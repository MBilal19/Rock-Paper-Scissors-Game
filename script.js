let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
  console.log("game was draw")
  msg.innerText="Game Was Draw Play Again!"
  msg.style.backgroundColor= "black";
}

const showWinner = (userWin , userChoice , compChoice) => {
  if (userWin){
    userScore++
    userScorePara.innerText= userScore;
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor= "green";
   
  }
  else{
    compScore++;
    compScorePara.innerText= compScore;
    msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor= "red";
  }

}

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};




const playGame = (userChoice) => {
  console.log("user choice =" ,userChoice)


  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("Comp Choice =" ,compChoice)

if(userChoice === compChoice){
  //game draw
  drawGame();
}

else{
  let userWin = true;
 if(userChoice === "rock" ) {
  //scissor , paper
  userWin = compChoice === "paper" ? false : true;
  
 }
 else if(userChoice === "paper"){
    //rock , scissor
    userWin = compChoice === "scissor" ? false : true ;
   
 }
 else {
    // rock , paper
    userWin = compChoice === "rock" ? false : true;
   

 }
 showWinner(userWin , userChoice , compChoice);


}

};

 

choices.forEach((choice) => {
  const userChoice = choice.getAttribute("id")
  choice.addEventListener("click", () => {
   
   playGame(userChoice);
 
  });
});