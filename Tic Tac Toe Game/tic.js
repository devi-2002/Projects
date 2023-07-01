const boxs=document.querySelectorAll('.box');
const statusTxt=document.querySelector('#status');
const btnRestart=document.querySelector('#restart');
let x="<img src='x.png'>";
let o="<img src='o.png'>";
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options=["","","","","","","","",""];
let currentPlayer=x;
let player="X";
let running=false;
init();
function init(){
    boxs.forEach(box=>box.addEventListener('click',boxClick));
    btnRestart.addEventListener('click',restartGame);
    statusTxt.textContent=player +" Your Turn";
    running=true;
}
function boxClick(){
    console.log(this.dataset.index);
    if(options[index]!=""||!running){
        return;
    }
    updateBox(this,index);
    checkWinner();

}
function updateBox(box,index){
    options[index]=player;
    box.innerHTML=currentPlayer;
}
function changePlayer(){

}
function checkWinner(){

}
function restartGame(){

}



