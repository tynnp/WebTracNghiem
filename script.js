let randomQuestions;
let questionElements = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestions(questions, number) {
    const shuffledQuestions = shuffle([...questions]);
    return shuffledQuestions.slice(0, number);
}

function createQuestionNav() {
    const questionNav = document.getElementById('question-nav');
    randomQuestions.forEach((q, index) => {
        const questionLink = document.createElement('div');
        questionLink.classList.add('question-link');
        questionLink.textContent = index + 1;
        questionLink.addEventListener('click', () => jumpToQuestion(index));
        questionNav.appendChild(questionLink);
    });
}

function jumpToQuestion(index) {
    questionElements[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.onload = function() {
    const quizContainer = document.getElementById('quiz-container');
    randomQuestions = getRandomQuestions(questions, 20);

    randomQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        questionElement.innerHTML = `
            <h3>Câu ${index + 1}: ${q.question}</h3>
            <div class="options">
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${i}">
                        <span>${String.fromCharCode(65 + i)}. </span>
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;

        quizContainer.appendChild(questionElement);
        questionElements.push(questionElement);
    });

    createQuestionNav();
}

function submitQuiz() {
    let score = 0;
    randomQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const questionNavLinks = document.getElementById('question-nav').querySelectorAll('div');
        const options = questionElements[index].querySelectorAll('.options label');

        if (selectedOption) {
            const selectedAnswerIndex = parseInt(selectedOption.value);
            if (selectedAnswerIndex === q.correctAnswer) {
                score++;
                questionNavLinks[index].classList.add('correct');
                options[selectedAnswerIndex].classList.add('correct');
            } else {
                questionNavLinks[index].classList.add('incorrect');
                options[selectedAnswerIndex].classList.add('incorrect');
                options[q.correctAnswer].classList.add('correct');
            }
        } else {
            questionNavLinks[index].classList.add('incorrect');
            options[q.correctAnswer].classList.add('correct');
        }
    });

    alert(`Bạn đã đúng ${score}/${randomQuestions.length} câu. Chúc bạn ôn bài vui vẻ!`);
}

document.addEventListener('DOMContentLoaded', function() {
    const rightToggle = document.createElement('div');
    rightToggle.id = 'right-toggle';
    rightToggle.innerHTML = '<img src="assets/images/nav-icon.png" atl="nav icon" width="55px">'; 

    rightToggle.addEventListener('click', function() {
        document.getElementById('right').classList.toggle('active');
    });

    document.body.appendChild(rightToggle);
});