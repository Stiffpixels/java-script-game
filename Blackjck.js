let isAlive= false;
let cards = [];
let sum=0;
let message= "";
let player={
  name: "Muzammil",
  chips: 20000
};
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector(".player");

function reset(){
  playerEl.textContent= "";
  isAlive= false;
  hasBj = false;
  cards = [];
  sum=0;
  message= "";
}

function getRandomCard()
{
  let randomCard= Math.floor(Math.random()*13+1);
  if(randomCard>10){
    return 10;
  }else if(randomCard===1){
    return 11;
  }else{
    return randomCard;
  }
}

function startGame()
{
  if(sum>=21){
    reset();
    startGame();
    return;
  }else if(cards.length>=2){
    messageEl.textContent="You cannot start the game again please draw";
  }else{
    playerEl.textContent += player.name + ": "+ "₹" + player.chips ;
    isAlive=true;
    cards.push(getRandomCard());
    cards.push(getRandomCard());
    sum = cards[0] + cards[1];
    renderGame();
  }
  
}

function renderGame(){
  cardsEl.textContent="Cards: ";
  //document.getElementById("sum-el").textContent="Sum: " +sum;
  sumEl.textContent= "Sum " +sum;
  for(let i=0; i<cards.length; i++)
  {
    cardsEl.textContent += cards[i] + " ";
  }
  if(sum===21){
    player.chips += 2000;
    message="Congratulations you got a blackjack!";
  }else if(sum<=20){
    message="Lets draw a new card.";
  }else{
    player.chips-= 2000;
    message="You're out";
    isAlive = false;
  }
  messageEl.textContent= message;
}

function newCard(){
  if(sum===0 || sum>=21){
    messageEl.textContent="Start the game to continue playing";
  }else{
    cards.push(getRandomCard());
    sum += cards[cards.length-1];
    renderGame();
  }
}