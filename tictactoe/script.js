const cells = document.querySelectorAll('.cell');
const playerXScoreSpan = document.querySelector('#playerXScore');
const playerOScoreSpan = document.querySelector('#playerOScore');
const resetBtn = document.querySelector('#resetBtn');
const toastDiv = document.querySelector('.toast');
const draws = document.querySelector('#draws');

const playerX = 'x';
const playerO = 'o';
let playerXScore = 0;
let playerOScore = 0;
let currentLevel = 1;
let flag = true;
let currentPlayer = playerX;

const winningPatterns = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

for(let i=0;i<cells.length;i++){
    cells[i].addEventListener('click', cellClicked);
};

function cellClicked(e) {
    if(flag) {
        if(e.target.innerHTML === '') {
            console.log('Clicked');
            e.target.appendChild(addImg(currentPlayer));
        }
    }
}

function addImg(player) {
    const img = document.createElement('img');
    img.src = `images/${player}.png`;
    return img;
}