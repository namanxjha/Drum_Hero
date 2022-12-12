var numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function (event) {
    var pressedKey = event.key.toLowerCase();
    makeSound(pressedKey);
    buttonAnimation(pressedKey);
})

function makeSound(keyName) {
    switch (keyName) {
        case 'a':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 's':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'd':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'f':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

        default: console.log(keyName);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}