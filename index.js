let firstCard, secondCard;
let  max = 13, min = 1;
let cards = [];

let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let sumEl = document.querySelector(".sum-el");

let playerName = "Per";
let PlayerChips = 145;

let player = {
    name: "",
    chips: 145
}



let playerEl = document.getElementById("player-el");
playerEl.textContent = playerName + ": $" + PlayerChips;

function getRandomCard(){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(){
     renderGame();
}

function renderGame(){
    cardEl.textContent = "Cards :";
    for(let i = 0; i < cards.length; i++){
         cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum :" + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card!!";
   }else if(sum === 20){
        message = "Wohoo!, you have got a blackJack!!";
        hasBlackJack = true;
   }else{
         message = "You are out of game !!";
         isAlive = false;
   }
   
    messageEl.textContent = message;
    
}

function newCard(){
     //Draw new card if player do not have blackjack and is alive
      if(isAlive == true && hasBlackJack == false){
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
      }
   
}



//log it out
if(isAlive == false)
    message = "I am logging out!!";


console.log(message);

//arrays
let experience = ["CEO at scrimba", "Frontend developer at XYZ", "Tech Lead"];

console.log(experience[0]);
console.log(experience[1]);
console.log(experience[2]);

//arrays with multiple data types!!
let raman = ["Raman Bhari", 23, "SDE at HashedIn by Deloitte"];
raman.push("5.7");
console.log(raman);

raman.pop();

console.log(raman);