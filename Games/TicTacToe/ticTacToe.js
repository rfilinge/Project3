/*constants*/
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
/*variables*/
let board;
let turn = 'X';
let win;
/*cached element references*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*event listeners*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);
/*functions*/
function init() {
  board = [
      '','','',
      '','','',
      '','',''
  ];
  render();
};
init();

function render() {
  board.forEach(function(mark, index) {
      console.log(mark, index);
      squares[index].textContent=mark;
  });
  messages.textContent = win === 'T' ? `It's a tie` : win ? `${win} wins` : `${turn}'s turn!`;


};

function handleTurn(event) {
  let idx = squares.findIndex(function(square) {
      return square === event.target;
  });
  board[idx] = turn;
  if(turn === 'X') {
      turn = 'O';
  } 
  else {
      turn ='X';
  }
  win = checkWinner();
  render();
};

function checkWinner() {
  let winner = null;
  winningCombos.forEach(function(combo, index) {
      if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
      });
      return winner;
}