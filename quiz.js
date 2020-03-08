// Grab html elements
let startButton = document.querySelector('#startbutton')
let mainContent = document.querySelector('#maincontent')
let startPage = document.querySelector('#start-page')
let highScores = document.querySelector('#highscore')
let timeContainer = document.querySelector('#time-container')
let timeLeft = document.querySelector('#time')

//Question objects
let question1 = {
    question: "Question 1: What is the world's biggest island by land mass?",
    options: ["1. Greenland", "2. Great Britain", "3. Cuba", "4. Madagascar"],
    answer: "1. Greenland"
}

let question2 = {
    question: "Question 2: What is the world's longest river?",
    options: ["1. Amazon River", "2. Mekong River", "3. Nile", "4. Yangtze"],
    answer: "3. Nile"
}

let question3 = {
    question: "Question 3: What is the capital of Philippines?",
    options: ["1. Kuala Lumpur", "2. Hanoi", "3. Bangkok", "4. Manila"],
    answer: "4. Manila"
}

let question4 = {
    question: "Question 4: What is the highest mountain in the world?",
    options: ["1. Mount Logan", "2. Mt. Kilimanjaro", "3. Mount Everest", "4. Himalchuli"],
    answer: "3. Mount Everest"
}

let question5 = {
    question: "Question 5: In what continent is Papua New Guinea located?",
    options: ["1. Africa", "2. Australia", "3. South America", "4. Antarctica"],
    answer: "2. Australia"
}
// Array of question objects
let quizContent = [question1, question2, question3, question4, question5]

// Timer function
let totalTime = 60
function timer () {
    let timerInterval = setInterval(function() {
      totalTime--;
      timeLeft.textContent = totalTime
  
      if(totalTime === 0) {
        clearInterval(timerInterval);
        // Execute High Scores Summary Page                                                                    //TO DO
      }
  
    }, 1000);
  }

function quizBody () {
    // Hide original start page
    startPage.style.display = 'none'

    // Display time once quiz begins with start time set to 60 seconds
    timeContainer.style.display = 'block'
    timer()




}


// on click of start button run the quiz generator function

startButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(quizContent[0]['question'])
    quizBody()
})