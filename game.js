const $submitbutton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var guessnumber = Math.round(Math.random() * 100);
var lives = 10;
var message;

$submitbutton.onclick() => {
    let userinput = document.getElementById("number-input").Value;
    lives--;
    if (userinput == guessnumber) {
        location.href = "./win";
    } else if (lives == 0) {
        location.href = "./lose";
    } else if (userinput > guessnumber) {
        message = 'Oops! you guess is too high!. You have'
        $(lives)
        'lives remaining';
    } else if (userinput < guessnumber) {
        message = 'Oops! you guess is too low!. You have'
        $(lives)
        'lives remaining';
    }
    $message.style.display = "inherit";
    $message.innerHTML = message

}

}