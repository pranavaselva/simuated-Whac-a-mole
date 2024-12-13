const box = document.querySelectorAll('.box');
const mole = document.querySelectorAll('.mole');
const timer = document.querySelectorAll('#timer');
const score = document.querySelectorAll('#score');

let hitPlace;
let result = 0;
let curTime = 60;
let timeID = null;

function randomBox(){
    box.forEach(bo => bo.classList.remove('mole'));

    let randomPlace = box[Math.floor(Math.random() * box.length)];
    randomPlace.classList.add('mole');

    hitPlace = randomPlace.id;
}

function moveMole(){
    timeID = setInterval(randomBox, 500);
}

box.forEach(bo =>{
    bo.addEventListener('click',() =>{
        if(bo.id == hitPlace){
            result++;
            score[0].textContent = result;
            hitPlace = null;
        }
    })
})

moveMole();

function count(){
    curTime--
    timer[0].textContent = curTime
    if(curTime ==0){
        clearInterval(countDown)
        clearInterval(timeID)
        alert('Game Over, Your final score is '+ result)
    }
}

let countDown = setInterval(count, 1000);