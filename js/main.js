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

//Обработка форм
$(".form").each(function(){
  $(this).validate({
  errorClass: "invalid",

  rules: {
    name: {
      minlength: 2,
      lettersonly : true
    },
    phone:{
      minlength: 18
    }
  },

  messages: {
    name: {
      required: "We need your name",
      minlength: "Enter two or more characters",
      lettersonly: "Please enter letters"
    },
    email: {
      required: "We need your email",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone:{
      required: "We need your number",
      minlength: "Please, enter whole number"
    },
  }
});
})

$(".newsletter__subscribe").each(function(){
  $(this).validate({
  errorClass: "subscribe--invalid",
  messages: {
    email: {
      required: "We need your email",
      email: "Your email address must be in the format of name@domain.com"
    },
  }
});
})

$('.input_phone').mask('+7 (999) 999-99-99');
});     