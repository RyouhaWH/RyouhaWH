let navbarBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

navbarBtn.onclick = () =>{
    navbarBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active');
}
const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
    navbarBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

AOS.init();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    //centrado y exposicion de otras slides
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    //autoplay
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

swiper;
// let navHome = document.querySelector(".nav-home");
// let navInfo = document.querySelector(".nav-info");
// let navProducts = document.querySelector(".nav-products");
// let navContact = document.querySelector(".nav-contact");

// navHome.onclick = () =>navbar.classList.toggle('active');
// navInfo.onclick = () =>navbar.classList.toggle('active');
// navProducts.onclick = () =>navbar.classList.toggle('active');
// navContact.onclick = () =>navbar.classList.toggle('active');