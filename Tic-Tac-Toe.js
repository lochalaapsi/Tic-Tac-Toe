let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let score1 = document.getElementById("score1"); //X
let score2 = document.getElementById("score2"); //O
let rounds = 0;
let player1;
let player2;
let count1 = 0;
let count2 = 0;
let count = 0;
let winner = "O";
let turnO = true;
let gamereset = false;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Clicked");
    count++;
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        setTimeout(() => {
          if(pos1Val == 'X'){
            count1++;
            score1.innerHTML = count1;
            winner = 'X';
            player1 = document.getElementById("player1").value;
            alert(`${player1} won the round`);
          }else{ 
            count2++;
            score2.innerHTML = count2;
            winner = 'O';
            player2 = document.getElementById("player2").value;
          alert(`${player2} won the round`);
        }
        rounds++;

        if(rounds == 10){
            gamereset = true;
          if(count1 == count2)
            alert("match Draw");
          else if(count1 > count2)
            alert(`${player1} wont the match`)
          else 
            alert(`${player2} wont the match`)
        }
        resetgame();
        }, 100);
      }
    }
    if( count == 9){
    setTimeout( () => {
      resetgame();
    },100)
  }
}
};


let resetgame = () => {
boxes.forEach((box) => {
  box.innerText = "";
  box.disabled = false;
});

if(gamereset){
  count1 = 0;
  count2 = 0;
  score1.innerHTML = count1;
  score2.innerHTML = count2;
}
if(winner == 'X')
  turnO = false;
else
  turnO = true;

count = 0;
};

