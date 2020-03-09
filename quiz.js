// Grab html elements
const startButton = document.querySelector('#startbutton')
const mainContent = document.querySelector('#maincontent')
const startPage = document.querySelector('#start-page')
const highScores = document.querySelector('#highscore')
const timeContainer = document.querySelector('#time-container')
const timeLeft = document.querySelector('#time')
const resultMessage = document.querySelector('#result-message')
const summaryPage = document.querySelector('#summary-page')
const userName = document.querySelector('#username')


//Question objects
let question1 = {
    question: "Question 1: What is the world's biggest island by land mass?",
    options: ["1. Greenland", "2. Great Britain", "3. Cuba", "4. Madagascar"],
    answer: 0
}

let question2 = {
    question: "Question 2: What is the world's longest river?",
    options: ["1. Amazon River", "2. Mekong River", "3. Nile", "4. Yangtze"],
    answer: 2
}

let question3 = {
    question: "Question 3: What is the capital of Philippines?",
    options: ["1. Kuala Lumpur", "2. Hanoi", "3. Bangkok", "4. Manila"],
    answer: 3
}

let question4 = {
    question: "Question 4: What is the highest mountain in the world?",
    options: ["1. Mount Logan", "2. Mt. Kilimanjaro", "3. Mount Everest", "4. Himalchuli"],
    answer: 2
}

let question5 = {
    question: "Question 5: In what continent is Papua New Guinea located?",
    options: ["1. Africa", "2. Australia", "3. South America", "4. Antarctica"],
    answer: 1
}
// Array of question objects
let quizContent = [question1, question2, question3, question4, question5]

// Global variables
let currentQuestion = 0, score = 0, totalTime = 70


// Timer function
function timer() {                                                                                       //TO DO: Execute Summary Page
    let timerInterval = setInterval(function () {
        totalTime--;
        timeLeft.textContent = totalTime

        if (totalTime === 0) {
            clearInterval(timerInterval);
            alert('Time is up!')
            // Execute High Scores Summary Page                                                                    //TO DO: Execute Summary Page
        }

    }, 1000);
}

// Score Counter Function
function scoreCounter(str, correctStr) {
    if (str === correctStr) {
        resultMessage.setAttribute('class', 'text-center')
        const msgLine = document.createElement('hr')
        resultMessage.appendChild(msgLine)
        const msg = document.createElement('button')
        msg.innerHTML = 'Correct Answer!'
        msg.setAttribute('class', 'btn btn-success font-italic')
        resultMessage.appendChild(msg)
        score = score + 100
    }
    else {
        resultMessage.setAttribute('class', 'text-center')
        const msgLine = document.createElement('hr')
        resultMessage.appendChild(msgLine)
        const msg = document.createElement('p')
        msg.textContent = 'Wrong Answer!'
        msg.setAttribute('class', 'btn btn-danger font-italic')
        resultMessage.appendChild(msg)
    }
}

// Delay: Clears the question but allows user to see result message before next question  

// function delay(show) {
//     // setTimeout(function () {
//     //     resultMessage.innerHTML = ""
//     //     mainContent.innerHTML = ""
//     //     if (currentQuestion < 5) question(currentQuestion, 0)
//     //     if (show) summaryPage.setAttribute('style', 'display: block;')
//     // }, 100)
// }

// summary page for saved user score
function saveUserScore(event) {
    event.preventDefault()
    const userInput = document.querySelector('#user-input')
    localStorage.setItem('score', JSON.stringify({ name: userInput.value, score })) //Saving total score in Local Storage
    userInput.value = ''

}

// Change question
function changeQuestion(event) {
    resultMessage.innerHTML = ''
    const index = quizContent[currentQuestion].answer
    const str = event.target.innerText
    const correctStr = quizContent[currentQuestion].options[index]
    //  Get scores for each question based on correct or wrong answers    
    scoreCounter(str, correctStr)
    currentQuestion++
    if (currentQuestion > 4) {
        userName.addEventListener('click', saveUserScore)
        // delay(true)
        console.log("Quiz End")
        return
    }
    // delay(false)

}


function question(qIndex, aIndex) {                                //TO DO: Explain qIndex and aIndex in ReadMe   &&   Execute Summary Page  && Score Counter

    // Create new question section
    const questionSection = document.createElement('section')
    questionSection.setAttribute('id', 'questions-page')
    mainContent.appendChild(questionSection)

    // Create question h2 element and display question 1
    const question = document.createElement('h2')
    question.textContent = quizContent[qIndex]['question']
    questionSection.appendChild(question)

    // Create possible answers Container
    const optionsContainer = document.createElement('div')
    optionsContainer.setAttribute('class', 'mt-3')
    questionSection.appendChild(optionsContainer)

    // Create unordered list
    const answersList = document.createElement('ul')
    answersList.setAttribute('class', 'list-unstyled')
    optionsContainer.appendChild(answersList)

    // Get all the possible answer options for question 1
    for (i = aIndex; i < quizContent[qIndex]['options'].length; i++) {
        const option = document.createElement('li')
        const optionBtn = document.createElement('button')
        optionBtn.textContent = quizContent[qIndex]['options'][i]
        optionBtn.setAttribute('class', 'answer-button btn btn-primary mb-3')
        optionBtn.addEventListener("click", changeQuestion)
        option.appendChild(optionBtn)
        answersList.appendChild(option)
    }
}

// Executes the question pages
function quizBody() {
    // Hide original start page
    startPage.style.display = 'none'

    // Display time once quiz begins with start time set to 60 seconds
    timeContainer.style.display = 'block'
    timer()

    // Display question 1
    question(0, 0)
}

// on click of start button run the quiz generator function
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    quizBody()
})