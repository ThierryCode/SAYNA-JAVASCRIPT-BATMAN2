//Javascript pour le game
//Animation à l'intro de la page game
window.addEventListener('scroll', () => {
    const titleGameH21 = document.querySelector('.titleGameH21');
    const scrollPositionGame = window.scrollY;
    const imgGameBat = document.querySelector('.imgGameBat');
    const scrollPosition = window.scrollY;
    console.log(scrollPositionGame);
    if (scrollPositionGame > 350) {
      titleGameH21.classList.add('h2GameAnimation');
    }
    if (scrollPosition > 450) {
        imgGameBat.classList.add('scallimgGameBat');
      }
  });
//Animtion sur la partie image
