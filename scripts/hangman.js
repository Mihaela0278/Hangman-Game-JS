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
}

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

// Word generator
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");

    // If optionValue matches the button innerText then highlight the button
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    })
}

// Initial function (called when page loads/user press new game )
const initializer = () => {
    winCount = 0;
    count = 0;

    // For creating letter buttons
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");

        // Number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i);
        letterContainer.append(button);
    }

    displayOptions();
}

// New game 
newGameButton.addEventListener("click", initializer);
window.onload = initializer;