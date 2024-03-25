let usermove;
let win = document.getElementById("win");
let loss = document.getElementById("loss");
let tie = document.getElementById("tie");

let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  tie: 0,
};

function computerMove() {
  let move = Math.floor(Math.random() * 3);
  let computerMove = "";
  if (move == 0) {
    computerMove = "rock";
  }
  if (move == 1) {
    computerMove = "paper";
  }
  if (move === 2) {
    computerMove = "scissor";
  }
  return computerMove;
}

function reset() {
  score = {
    win: 0,
    loss: 0,
    tie: 0,
  };
  localStorage.setItem("score", JSON.stringify(score));
  updateUI();
}

function updateUI() {
  // Update UI with the scores
  win.innerText = `wins: ${score.win}`;
  loss.innerText = `losses: ${score.loss}`;
  tie.innerText = `ties: ${score.tie}`;
}

function play(usermove) {
  let comp_move = computerMove();

  if (usermove === comp_move) {
    alert(
      `You chose: ${usermove} and the computer chose: ${comp_move}, The game is tied`
    );
    score.tie++;
  } else if (
    (usermove === "rock" && comp_move === "scissor") ||
    (usermove === "paper" && comp_move === "rock") ||
    (usermove === "scissor" && comp_move === "paper")
  ) {
    alert(
      `You chose: ${usermove} and the computer chose: ${comp_move}, You Win`
    );
    score.win++;
  } else {
    alert(
      `You chose: ${usermove} and the computer chose: ${comp_move}, You Lose`
    );
    score.loss++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  // Update UI with the updated scores
  updateUI();
}
updateUI();
