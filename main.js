// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate a coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'/>";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'/>";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

// DICE ROLL SIMULATOR

// HTML Variables
let diceOutEl = document.getElementById("dice-output");

// Button Event Listener
document.getElementById("dice-btn").addEventListener("click", diceBtnClicked);

function diceBtnClicked() {
  // Generate a random number
  let randNumb = Math.random() * 6;
  console.log(randNumb);

  // Simulate a dice roll
  if (randNumb < 1) {
    diceOutEl.innerHTML = "<img src='img/1.png'/>";
  } else if (randNumb > 2) {
    diceOutEl.innerHTML = "<img src='img/2.png'/>";
  } else if (randNumb > 3) {
    diceOutEl.innerHTML = "<img src='img/3.png'/>";
  } else if (randNumb > 4) {
    diceOutEl.innerHTML = "<img src='img/4.png'/>";
  } else if (randNumb > 5) {
    diceOutEl.innerHTML = "<img src='img/5.png'/>";
  } else {
    diceOutEl.innerHTML = "<img src='img/6.png'/>";
  }
}
