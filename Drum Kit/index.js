//Detecting button press

var Num=document.querySelectorAll(".drum").length;

for(var i=0; i<Num; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", sounds);
}

function sounds()
{
    var vibrate=this.innerHTML;
    makesounds(vibrate);
    makeAnimations(vibrate);
}

//Detecting keyboard press

document.addEventListener("keypress", events);

function events(event)
{
    makesounds(event.key)
    makeAnimations(event.key);
}

//Adding the sounds
function makesounds(key)
{
    switch(key)
    {
        case "w":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break; 
        default:
            console.log();
            break;
    }
}

//Adding the animations
function makeAnimations(currentKey)
{
    var activeButton=document.querySelector("." +currentKey);
    activeButton.classList.add("pressed");

    // Remove the "pressed" class after 1 second (1000 milliseconds)
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 1000);
}