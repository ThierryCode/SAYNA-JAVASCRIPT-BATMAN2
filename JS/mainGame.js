//Javascript pour le game
//Animation à l'intro de la page game et la partie image
window.addEventListener('scroll', () => {
    const titleGameH21 = document.querySelector('.titleGameH21');
    const scrollPositionGame = window.scrollY;
    const imgGameBat = document.querySelector('.imgGameBat');
    const boutonGame = document.querySelector('.boutonGame');
    const scrollPosition = window.scrollY;
  
    if (scrollPositionGame > 350) {
      titleGameH21.classList.add('h2GameAnimation');
    }
    if (scrollPosition > 450) {
      imgGameBat.classList.add('scallimgGameBat');
    }
    if (scrollPosition > 500) {
      boutonGame.classList.add('animBoutonGame');
    }
  });
  
  // Début Quiz
const boutonGame = document.querySelector('.boutonGame');
const titleGameH2 = document.querySelector('.titleGameH2');
const imgGameBat = document.querySelector('.imgGameBat');
const quizSection = document.querySelector('.quiz');
let questionIndex = 0;
let questions = [];

boutonGame.addEventListener('click', afficherQuestion);

function afficherQuestion() {
  titleGameH2.style.display = 'none';
  imgGameBat.style.display = 'none';

  if (questionIndex >= questions.length) {
    console.log('Quiz terminé');
    return;
  }

  const question = questions[questionIndex];

  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');

  const questionTitle = document.createElement('h2');
  questionTitle.textContent = 'Question : ' + (questionIndex + 1) + '/12';
  questionContainer.appendChild(questionTitle);

  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');
  questionDiv.innerHTML = '<h3>' + question.question + '</h3>';

  const questionOptions = document.createElement('ul');
  question.response.forEach((option) => {
    const optionItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'option' + (questionIndex + 1);
    checkbox.name = 'question' + (questionIndex + 1);
    checkbox.value = option.text;

    const label = document.createElement('label');
    label.setAttribute('for', 'option' + (questionIndex + 1));
    label.textContent = option.text;

    optionItem.appendChild(checkbox);
    optionItem.appendChild(label);

    questionOptions.appendChild(optionItem);
  });

  questionDiv.appendChild(questionOptions);
  questionContainer.appendChild(questionDiv);

  const questionButton = document.createElement('button');
  questionButton.textContent = 'Question suivante';
  questionButton.addEventListener('click', suivanteQuestion);
  questionContainer.appendChild(questionButton);

  quizSection.innerHTML = '';
  quizSection.appendChild(questionContainer);
}

function suivanteQuestion() {
  questionIndex++;
  const questionDiv = document.querySelector('.question-container');
  questionDiv.remove();
  afficherQuestion();
}

fetch('https://batman-api.sayna.space/questions?fbclid=IwAR2j0VY3PGd0Y_FLZygi9epi_hVUaMXblTtKLr97BuwyVCDI1FWgC0_w9-k')
  .then(response => response.json())
  .then(data => {
    questions = data;
  })
  .catch(error => {
    console.log('Une erreur s\'est produite lors de la récupération des questions:', error);
  });
