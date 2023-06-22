//début animation fait avec javascripts
window.addEventListener('scroll', ()=> {
    const title_h2_1 = document.querySelector('.title_h2_1');
    const title_h2_2 = document.querySelector('.title_h2_2');
    const title_h2_3 = document.querySelector('.title_h2_3');
    const title_h2_4 = document.querySelector('.title_h2_4');
    const presentation1 = document.querySelector('.presentation1');
    const presentation2 = document.querySelector('.presentation2');
    const presentation3 = document.querySelector('.presentation3');
    const presentation4 = document.querySelector('.presentation4');
    const carte1 = document.querySelector('.carte1')
    const carte2 = document.querySelector('.carte2')
    const carte3 = document.querySelector('.carte3')
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition > 300) {
        title_h2_1.classList.add('h2Animation');
        presentation1.classList.add('presentationAnim');
    }
    if (scrollPosition > 1100){
        carte1.classList.add('carteAnim');
    }
    if (scrollPosition > 1800) {
        title_h2_2.classList.add('h2Animation');
        presentation2.classList.add('presentationAnim');
    }
    if (scrollPosition > 2400){
        carte2.classList.add('carteAnim');
    }
    if (scrollPosition > 2800) {
        title_h2_3.classList.add('h2Animation');
        presentation3.classList.add('presentationAnim');
    }
    if (scrollPosition > 3500){
        carte3.classList.add('carteAnim');
    }
    if (scrollPosition > 3600) {
        title_h2_4.classList.add('h2Animation');
        presentation4.classList.add('presentationAnim');
    }
    
});
//fin animation fait avec javascript
//Slide de la section cinema (image league des justicier)
let currentIndex = 0;
let slideImages = document.querySelectorAll('.imgJusticeLeag .slideShow');

function showImage(index) {
  for (var i = 0; i < slideImages.length; i++) {
    slideImages[i].classList.remove('activeSlide');
  }

  slideImages[index].classList.add('activeSlide');
}

function slideNext() {
  currentIndex = (currentIndex + 1) % slideImages.length;
  showImage(currentIndex);
}

setInterval(slideNext, 3000);
//Message popUp formulaire

const submitBtn = document.querySelector(".submitBtn");
const popUp = document.querySelector(".popUp");

submitBtn.addEventListener("click", (e) => {
    popUp.classList.add("active");
    e.preventDefault();
});
popUp.addEventListener("click", (e) => {
    popUp.classList.remove("active");
    e.preventDefault();
});