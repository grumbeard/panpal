// NAVBAR TOGGLE
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('main-nav-active');
});

// CAROUSEL TOGGLE
let activeSlide = document.querySelector('.js-active-slide');
let activeButton = document.querySelector('.js-active-button');
let slideNavButtons = document.querySelectorAll('.js-carousel-button');
slideNavButtons.forEach(button => {
  button.addEventListener('click', event => {
    if(event.target !== activeButton) {
      event.target.classList.toggle('js-active-button');
      activeButton.classList.toggle('js-active-button');
      activeButton = event.target;
      activeSlide.classList.toggle('js-active-slide');
      if(event.target.id == 'js-slide1-nav-btn'){
        activeSlide = document.querySelector('.js-slide-first');
        activeSlide.classList.toggle('js-active-slide');
      }
      if(event.target.id == 'js-slide2-nav-btn'){
        activeSlide = document.querySelector('.js-slide-second');
        activeSlide.classList.toggle('js-active-slide');
      }
      if(event.target.id == 'js-slide3-nav-btn'){
        activeSlide = document.querySelector('.js-slide-third');
        activeSlide.classList.toggle('js-active-slide');
      }
    }
  })
})
