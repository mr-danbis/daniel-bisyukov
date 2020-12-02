//Connection of the keyboard
var mySwiper = new Swiper('.swiper-container', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//hotelSlider
var hotelSlider = new Swiper('.hotel-slider', {

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
})

//rewiewsSlider
var rewiewsSlider = new Swiper('.reviews-slider', {

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
})

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function(){
  console.log('Клик по кнопке меню');
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible')
})