let startButton = document.querySelector('#startbutton')
let mainContent = document.querySelector('#maincontent')




// console.log(quizContent[0]['question'])

// This function create the html structure for the quiz.
// The function takes in the index of the question in the quizContent array and is called "questionNumber"
function quizBody(questionNumber) {
    mainContent.innerHTML = ""
    // Create questions, options, and answers
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

    let quizContent = [question1, question2, question3, question4, question5]


    // Create question H2 element
    const question = document.createElement('h2')
    // Get question content
    question.textContent = quizContent[questionNumber]['question']
    mainContent.appendChild(question)
    // Create spacing
    const spacing = document.createElement('div')
    spacing.setAttribute('class', 'p-2')
    mainContent.appendChild(spacing)

    // Create options Container
    const optionsContainer = document.createElement('div')
    spacing.appendChild(optionsContainer)
    // Create unordered list
    const optionList = document.createElement('ul')
    optionList.setAttribute('class', 'list-unstyled')
    optionsContainer.appendChild(optionList)
    // Create lists of choices
    // Use for loop to create option buttons and lead to next question on option button click
    for (let i = 0; i < quizContent[questionNumber]['options'].length; i++) {
        const option = document.createElement('li')
        const optionBtn = document.createElement('button')
        optionBtn.textContent = quizContent[questionNumber]['options'][i]
        optionBtn.setAttribute('class', 'question btn btn-primary mb-3')
        optionBtn.addEventListener("click", function (event) {
            event.preventDefault();
            quizBody(questionNumber + 1)
        })
        option.appendChild(optionBtn)
        optionList.appendChild(option)

    }

}

// Upon click of start button
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    quizBody(0)
})
