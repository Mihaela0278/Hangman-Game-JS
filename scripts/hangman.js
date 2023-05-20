const optionsContainer = document.getElementById("options-container");
const letterContainer = document.getElementById("letter-container");
const userInputSection = document.getElementById("user-input-section");
const canvas = document.getElementById("canvas");
const newGameContainer = document.getElementById("new-game-container");
const resultText = document.getElementById("result-txt");
const newGameButton = document.getElementById("new-game-btn");

// Options vlues for btns
let options = {
    fruits: [
        "apple",
        "watermelon",
        "cherry",
        "blueberry",
        "mandarin",
        "peach",
        "strawberry",
    ],
    animals: [
        "zebra",
        "lion",
        "panther",
        "snake",
        "butterfly",
        "horse"
    ],
    flowers: [
        "tulip",
        "rose",
        "dahlia",
        "daisy",
        "snowdrop",
        "violet"
    ]
};

// Count 
let winCount = 0;
let count = 0;

let chosenWord = "";

// Display option btns
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')"
        >${value}</button>`
    }

    optionsContainer.appendChild(buttonCon);
}

