var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    380: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});

// var swiper = new Swiper(".mySwiper", {
//   effect: "cards",
//   grabCursor: true,
// });