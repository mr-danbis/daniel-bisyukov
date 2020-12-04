$(document).ready(function () {
  //Connection of the keyboard
var mySwiper = new Swiper(".swiper-container", {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//hotelSlider
var hotelSlider = new Swiper(".hotel-slider", {

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
})

//rewiewsSlider
var rewiewsSlider = new Swiper(".reviews-slider", {

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
})

var menuButton = $(".menu-button");
menuButton.on("click", function(){
  $(".navbar-bottom").toggleClass("navbar-bottom--visible")
})



var modalButton = $("[data-toggle=modal]")
modalButton.on("click", openModal);
var closeModalButton = $(".modal__close");
closeModalButton.on("click", closeModal);

function openModal(){
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

function closeModal(event){
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");

  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}

var modalOverlay = $(".modal__overlay");
var modalDialog = $(".modal__dialog");
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { 
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }
});

});