// 1. State: Track the scores
let userScore = 0;
let robotScore = 0;
let userScorepara = document.querySelector ('#userScore');
let roboScorepara = document.querySelector ('#computerScore');

// 2. Logic: The function that generates the Robot's choice
// (Defined first so palyGame can use it)
const genRoboChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const randIdx = Math.floor (Math.random () * 3);
  return options[randIdx];
  //if else for defing the choice;
};
//Eccess msg container;
let msg = document.querySelector ('#msg');
// console.log(msg.innerHTML
// )
//DrawGame function;
let draw = () => {
  console.log ('The game has drawn');
  msg.innerText = 'Game Drawn!';
  msg.style.backgroundColor = '#2de615';
};
//Show Winner
const showWinner = (userWin, userChoice, roboChoice) => {
  if (userWin == true) {
    console.log ('You Win');
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${roboChoice}`;
    msg.style.backgroundColor = 'blue';
  } else {
    console.log ('You loss');
    robotScore++;
    roboScorepara.innerText=robotScore;
    msg.innerText = `You Loss! ${roboChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = 'red';
  }
};
// 3. Logic: The function that runs the game
// (Defined second so the event listeners can use it)
const palyGame = userChoice => {
  console.log (`User choice = ${userChoice}`);

  // Generate computer choice
  const roboChoice = genRoboChoice ();
  console.log (`Robot choice = ${roboChoice}`);

  // You can add your Win/Loss comparison logic here next!
  if (userChoice == roboChoice) {
    draw ();
  } else {
    let userWin = true;
    if (userChoice == 'rock') {
      //Scessor,paper;
      userWin = roboChoice == 'paper' ? false : true;
    } else if (userChoice == 'paper') {
      //rock,scessor
      userWin = roboChoice == 'scissors' ? false : true;
    } else {
      userWin = roboChoice == 'rock' ? false : true;
    }
    showWinner (userWin, userChoice, roboChoice);
  }
};

// 4. Select Elements: Get all the choice buttons
const choices = document.querySelectorAll ('.choice');

// 5. Interaction: Attach the Click Event to each choice
choices.forEach (choice => {
  // Get the ID once for each choice
  const userChoice = choice.getAttribute ('id');

  choice.addEventListener ('click', () => {
    // console.log(`Choice was clicked = ${userChoice}`);

    // This runs ONLY when the user actually clicks a button
    palyGame (userChoice);
  });
});
