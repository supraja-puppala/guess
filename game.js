const $submitbutton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var guessnumber = Math.round(Math.random() * 100);
var lives = 10;
var message;

$submitbutton.onclick = () => {
    let x = document.getElementById("number-input").value
    console.log(x);
    console.write(guessnumber);
    lives--;
    if (x == guessnumber) {
        location.href = "./win";
    } else if (lives == 0) {
        location.href = "./lose";
    } else if (x > guessnumber) {
        console.log("You are high");
        document.write("your guess is high");

    } else if (x < guessnumber) {
        console.log("you are low")
        document.write("your guess is low");


    }



};