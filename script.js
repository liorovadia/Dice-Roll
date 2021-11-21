const button = document.getElementById("btn")
let diceOne = document.getElementById("firstDice")
let diceTwo = document.getElementById("secondDice")


button.addEventListener("click", () => {
    let randomNumOne = Math.floor(Math.random() * 6 + 1);
    if (randomNumOne == 1) {
        diceOne.innerHTML = "<i class='fas fa-dice-one'></i>"
    }
    else if (randomNumOne == 2) {
        diceOne.innerHTML = "<i class='fas fa-dice-two'></i>"
    }
    else if (randomNumOne == 3) {
        diceOne.innerHTML = "<i class='fas fa-dice-three'></i>"
    }
    else if (randomNumOne == 4) {
        diceOne.innerHTML = "<i class='fas fa-dice-four'></i>"
    }
    else if (randomNumOne == 5) {
        diceOne.innerHTML = "<i class='fas fa-dice-five'></i>"
    }
    else if (randomNumOne == 6) {
        diceOne.innerHTML = "<i class='fas fa-dice-six'></i>"
    }
    
    let randomNumTwo = Math.floor(Math.random() * 6 + 1);
    if (randomNumTwo == 1) {
        diceTwo.innerHTML = "<i class='fas fa-dice-one'></i>"
    }
    else if (randomNumTwo == 2) {
        diceTwo.innerHTML = "<i class='fas fa-dice-two'></i>"
    }
    else if (randomNumTwo == 3) {
        diceTwo.innerHTML = "<i class='fas fa-dice-three'></i>"
    }
    else if (randomNumTwo == 4) {
        diceTwo.innerHTML = "<i class='fas fa-dice-four'></i>"
    }
    else if (randomNumTwo == 5) {
        diceTwo.innerHTML = "<i class='fas fa-dice-five'></i>"
    }
    else if (randomNumTwo == 6) {
        diceTwo.innerHTML = "<i class='fas fa-dice-six'></i>"
    }

});

// diceOne.innerHTML = Math.floor(Math.random() * 6 + 1);
// diceTwo.innerHTML = Math.floor(Math.random() * 6 + 1);