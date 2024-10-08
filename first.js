const container = document.querySelector("#container");
let value = "";
let marker = "";
let score=1;
let score1=1;
let score2=1;
let chance=1;
let choices = ["scissors", "rock", "paper"];
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box6 = document.querySelector("#box6");
const box5 = document.querySelector("#box5");
const box7= document.querySelector("#box7");
const box8= document.querySelector("#box8");
const box9= document.querySelector("#box9");
const box10= document.querySelector("#box10");

const box11= document.querySelector("#box12");

const box14= document.querySelector("#box14");
box4.addEventListener("click", function () {
    box6.innerHTML = "Your's Chance!"
    value = 1;
    box10.innerHTML=`${chance}`;
    chance++;
})
box5.addEventListener("click", function () {

    if(value==1){
    let computerAns = computerChoice();
    box6.innerHTML=`${computerAns}`
    setTimeout(()=> fun(computerAns),1000);
    }   
    value=0;
})
box1.addEventListener("click", function () {
    if (value == 1) {
        marker = "scissors";
        box6.innerHTML = `${marker}`
    }
    
})
box2.addEventListener("click", function () {
    if (value == 1) {
        marker = "rock"
        box6.innerHTML = `${marker}`
    }
    
})
box3.addEventListener("click", function () {
    if (value == 1) {
        marker = "paper"
        box6.innerHTML = `${marker}`
    }
    
})
const fun = function (computerAns) {
    if (marker == "scissors" && computerAns == "paper") {
        box6.innerHTML = "You won!"
        box9.innerHTML=score;
        score++;
        return;
    }
    if (marker == "scissors" && computerAns == "rock") {
        box6.innerHTML = "Computer won!"
        box12.innerHTML=score1
        score1++;
        return;
    }
    if (marker == "rock" && computerAns == "paper") {
          box6.innerHTML = "Computer won!"
        box12.innerHTML=score1
        score1++;
      
        return;
    }
    if (marker == "rock" && computerAns == "scissors") {
        box6.innerHTML = "You won!"
        box9.innerHTML=score;
        score++;
        return
    }
    if (marker == "paper" && computerAns == "scissors") {
        box6.innerHTML = "Computer won!"
        box12.innerHTML=score1
        score1++;

        return
    }
    if (marker == "paper" && computerAns == "rock") {
        box6.innerHTML = "You won!"
        box9.innerHTML= score;
        score++;
        return
    }
    if (marker == "paper" && computerAns == "paper") {
        box6.innerHTML = "Game draw!"
        box14.innerHTML=score2;
        score2++;
        return
    }
    if (marker == "rock" && computerAns == "rock") {
        box6.innerHTML = "Game draw!"
        box14.innerHTML=score2;
        score2++;
        return
    }
    if (marker == "scissors" && computerAns == "scissors") {
        box6.innerHTML = "Game draw!"
        box14.innerHTML=score2;
        score2++;
        return
    }
}
const computerChoice = function () {
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice
}

box7.addEventListener("click", function(){
    window.location.reload();
})