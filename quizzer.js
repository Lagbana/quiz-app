let startButton = document.querySelector('#startbutton')
let mainContent = document.querySelector('#maincontent')


let questions = {
    question1: "What is the world's biggest island by land mass?",
    question2: "What is the world's longest river?",
    question3: "What is the capital of Philippines?",
    question4: "What is the highest mountain in the world?",
    question5: "In what continent is Papua New Guinea located?"
}


let options = {
    option1: ["1. Greenland", "2. Great Britain", "3. Cuba", "4. Madagascar"],
    option2: ["1. Amazon River", "2. Mekong River", "3. Nile", "4. Yangtze"],
    option3: ["Kuala Lumpur", "Hanoi", "Bangkok", "Manila"],
    option4: ["Mount Logan", "Mt. Kilimanjaro", "Mount Everest", "Himalchuli"],
    option5: ["Africa", "Australia", "South America", "Antarctica"]
}

let answers = {
    answer1: "1. Greenland",
    answer2: "3. Nile",
    answer3: "Manila",
    answer4: "Mount Everest",
    answer5: "Australia"
}

    function quizBody(whatQuestion) {
    mainContent.innerHTML = ""
    const question = document.createElement('h2')
    question.textContent = questions[whatQuestion]
    mainContent.appendChild(question)
    // const options = document.createElement('div')
    // question1.appendChild(options)
}

startButton.addEventListener("click", function (event) {
    event.preventDefault();
    quizBody('question1')
    // mainContent.innerHTML = ""
    // const question1 = document.createElement('h2')
    // question.textContent = questions['question1']
    // mainContent.appendChild(question)
    // const options = document.createElement('div')
    // question1.appendChild(options)
})