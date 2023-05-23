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

// Block all the buttons
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");

    // Disable all options
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });


    // Disable all letters
    letterButtons.forEach((button) => {
        button.disabled = true;
    });

    newGameContainer.classList.remove("hide");
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
    });

    // Initially hide letters, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];

    // Choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    console.log(chosenWord);

    // Replace every letter with span containing dash
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

    // Display each element as span
    userInputSection.innerHTML = displayItem;
}

// Initial function (called when page loads/user press new game )
const initializer = () => {
    winCount = 0;
    count = 0;

    // Initially erase all content and hide letters and new game button
    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";

    // For creating letter buttons
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");

        // Number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i);

        // Character button click
        button.addEventListener("click", () => {
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");

            // If array contains clicked value 
            // replace the matched dash with letter 
            // else draw on canvas
            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {

                    // If character in array is same as clicked button
                    if (char === button.innerText) {
                        // Replace dash with letter
                        dashes[index].innerText = char;
                        // Increment counter
                        winCount += 1;
                        // If winCount equals word length
                        if (winCount == charArray.length) {
                            resultText.innerHTML = `<h2 class='win-msg'>You Win!!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                            // Block all buttons
                            blocker();
                        }
                    }
                });
            }
            else {
                // Lose count 
                count += 1;
               
                // Count === 6 (because head,body,left arm, right arm,left leg,right leg)
                if (count === 6) {
                    resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                    blocker();
                }
            }
            // Disable clicked button
            button.disabled = true;
        });
        letterContainer.append(button);
    }

    displayOptions();
}

// New game 
newGameButton.addEventListener("click", initializer);
window.onload = initializer;