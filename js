let currentQuestionIndex = 0; // start from the first question
let score = 0; // keep track of correct answers

// list of questions, choices, and the correct answer index
const questions = [
    { question: "Who is the captain of the Straw Hat Pirates?", answers: ["Luffy", "Zoro", "Nami", "Sanji"], correct: 0 },
    { question: "What is the name of Zoro's sword style?", answers: ["Two-Sword Style", "Three-Sword Style", "Four-Sword Style", "One-Sword Style"], correct: 1 },
    // add more questions as needed
];

// shows the current question and choices
function displayQuestion() {
    let question = questions[currentQuestionIndex]; // get the current question
    document.getElementById('question').textContent = question.question; // show the question text
    let answers = document.getElementById('answers');
    answers.innerHTML = ''; // clear previous answers
    // for each answer choice, create a div and set it clickable
    question.answers.forEach((answer, index) => {
        let div = document.createElement('div');
        div.textContent = answer; // set answer text
        div.addEventListener('click', () => checkAnswer(index)); // check answer when clicked
        answers.appendChild(div); // add to the answers container
    });
}

// checks if the clicked answer is correct or not
function checkAnswer(selected) {
    let correct = questions[currentQuestionIndex].correct; // get the correct answer index
    if (selected === correct) { // if the answer is correct
        score++; // increase score
        document.querySelectorAll('#answers div')[selected].classList.add('correct'); // highlight correct
    } else {
        document.querySelectorAll('#answers div')[selected].classList.add('incorrect'); // highlight incorrect
    }
    currentQuestionIndex++; // move to the next question
    // wait a bit before showing the next question or result
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) { // if there are more questions
            displayQuestion(); // show the next question
        } else {
            showResult(); // if no more questions, show the final score
        }
    }, 1000);
}

// shows the final score
function showResult() {
    document.getElementById('answers').style.display = 'none'; // hide answers
    document.getElementById('next-button').style.display = 'none'; // hide the next button
    document.getElementById('result').textContent = `Your score: ${score}/${questions.length}`; // show score
}

displayQuestion(); // start the quiz
