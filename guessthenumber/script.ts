const main1 = document.getElementById("mainSection") as HTMLDivElement;
const main2 = document.getElementById("mainSection2") as HTMLDivElement;
const main3 = document.getElementById("mainSection3") as HTMLDivElement;
const hintText = document.getElementById("textHint") as HTMLParagraphElement;
const inputText = document.getElementById("inputGuess") as HTMLInputElement;
const textResult = document.getElementById("textResult") as HTMLHeadingElement;
const textAnswer = document.getElementById("textAnswer") as HTMLHeadingElement;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let numAnswer = 0;
let numHint = [0, 0];
let numGuess = 0;

function ClickStart() {
    main1.style.display = "none";
    main2.style.display = "flex";

    numAnswer = getRandomInt(100);
    numHint[1] = Math.round(numAnswer/10) * 10
    numHint[0] = numHint[1] - 10;

    hintText.innerHTML = "The number is between " + numHint[0] + " & " + numHint[1];
}

function ClickGuess() {
    numGuess = +inputText.value

    if(numAnswer == numGuess)
    {
        textResult.innerHTML = "You have guessed Correct";
        textAnswer.innerHTML = "Correct Answer: " + numAnswer;
    }
    else
    {
        textResult.innerHTML = "You have guessed Incorrect";
        textAnswer.innerHTML = "Correct Answer: " + numAnswer;
    }
    main2.style.display = "none";
    main3.style.display = "flex";
}

function ClickRetry() {
    numHint = [0, 0]
    numAnswer = 0
    numGuess = 0

    main3.style.display = "none"
    main1.style.display = "flex"

    inputText.value = ''
}