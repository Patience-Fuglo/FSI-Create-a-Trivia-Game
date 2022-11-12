// Your Code Here

let userName = window.prompt('Please enter your name:')
let userScore = 0
let playAgain = true

function playGame() {
    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
        if(userAnswer === question.correctAnswer){
            userScore = userScore + 10
        }
    }
    window.alert('Your score is: '+userScore)
}

while (playAgain === true) {
  playGame()
  let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')
  if(userChoice === 'yes'){
          playAgain = true
      } else {
          playAgain = false
          window.alert('Thanks for playing the game!')
      }
}

while (playAgain === true) {
  playGame()
  let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')
}

{
  text: `What is the first book of the Old Testament?
  A. Leviticus
  B. Numbers
  C. Genesis
  D. Exodus`,
  correctAnswer: "C"
}


function playGame() {
  // our code will go here
  }
  