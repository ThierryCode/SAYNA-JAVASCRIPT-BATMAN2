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
  
    const questionDiv = document.createElement('div');
    const questionTitle = document.createElement('h3');
    const questionOptions = document.createElement('ul');
    const questionButton = document.createElement('button');
  
    questionDiv.classList.add('question');
    questionTitle.textContent = question.question;
    question.response.forEach((option) => {
      const optionItem = document.createElement('li');
      optionItem.textContent = option.text;
      questionOptions.appendChild(optionItem);
    });
    questionButton.textContent = 'Question suivante';
    questionButton.addEventListener('click', suivanteQuestion);
  
    questionDiv.appendChild(questionTitle);
    questionDiv.appendChild(questionOptions);
    questionDiv.appendChild(questionButton);
    quizSection.innerHTML = ''; 
    quizSection.appendChild(questionDiv);
  }
  
  function suivanteQuestion() {
    questionIndex++;
    const questionDiv = document.querySelector('.question');
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
  