/* NOW, IT'S TIME TO RECREATE THE GAME BY YOURSELF USING PSEUDOCODE, CREATE A NEW FILE AND START FROM SCRATCH */

/* Objectie, create a game where an user plays with a computer RPS.
It must contain three options, different possibilities, and five rounds.
Everything must be in the console */



/* EXTRA STEP, create the scores for the future round as variables, they will change everytime someone wins */

let humanScore= 0
let computerScore= 0

/* STEP1: Create the humanchoice function, this will contain a prompt to ask to type, RPS */
function getHumanChoice() {
const question = prompt("Rock, paper, or scissors?")

/* create an if condition to state if the user writes rock, paper, or scissors,
the console will output the message */

if (question.toLowerCase() === "rock") {
  console.log("rock")
 
}

else if(question.toLowerCase() === "paper") {
  console.log("paper")
  
}
/* make question.toLowerCase with two options, scissors or scissor */
else if (question.toLowerCase() === "scissors" || question.toLowerCase() === "scissor") {
  console.log("scissors")
  
}

else {
  console.log("You need to put either rock, paper or scissors!")
}

}

/* Now, create a function that makes the computer choose between RPS */
function getComputerChoice() {

/* make a variable that stores an answer, use math.floor and math.random to create an option */
const choice = Math.floor(Math.random()* 3) + 1
/* the variable from above will create a random decimal and it will convert it to a normal one.
Make the number generated multiplies itself by 3 and adds 1, this is for creating the 3 options */

/* create the if condition to see if the number is either, 1, 2 or 3, it states RPS */
if (choice === 1) {
  console.log("rock")
  return "rock"
}

else if (choice === 2) {
  console.log("paper")
  return "paper"
}

else if (choice ===3) { /* you can either leave it like that or put else condition. The important is that is creating the options */
  console.log("scissors")
  return "scissors"
  /* make use of return to show the actual values, otherwise, you're producing output different from the result of the function */
}

}

/* Now create a function to play a round */

function playRound(humanChoice, computerChoice) /* make two parameters to receive later the responses from the first functions created */ {

/* create the conditions to see whether someone wins or loses */

if (humanChoice === "rock" && computerChoice === "paper") {
  console.log("you lose, paper beats rock")

}

}




