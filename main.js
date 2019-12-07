const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header-content');
const menuButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.menu');
const navigationMenuButton = document.querySelectorAll('.menu a');

//Testimonials slider
const slideList = [{
        img: "images/testimonial-1.jpg",
        text: "Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur....",
        titleText: "Susan Sims, interaction designer at xyz"
    },
    {
        img: "images/testimonial-2.jpg",
        text: "Aamet consectetur adipisicing elit. Veritatis molestias, tenetur, quos voluptates provident, sint est ea voluptas....",
        titleText: "Jesica Melgibson, frontend developer at zyx"
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.quote');
const title = document.querySelector('p.title');
const dots = [...document.querySelectorAll('.dots span.dot')];

//Interface
const time = 5000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    title.textContent = slideList[active].titleText;
    changeDot();
}

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

setInterval(changeSlide, time);


//Project section - Lightbox gallery 

lightbox.option({
    'positionFromTop': 200,
    'alwaysShowNavOnTouchDevices': true,
    'albumLabel': "Project %1 of %2"
})

//Navbar
const scrollHeader = () => {
    const scrollValue = window.scrollY;
    const navbarHeight = document.querySelector('.navbar').scrollHeight;
    if (scrollValue >= (navbarHeight / 2)) {
        navbar.classList.add('active');
        headerContent.classList.add('active');
    } else {
        navbar.classList.remove('active');
        headerContent.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollHeader);

//Navigation
const openMenu = () => {
    navigation.classList.toggle('active');
    menuButton.classList.toggle('active');
}
menuButton.addEventListener('click', openMenu)

function closeMenu() {
    navigation.classList.remove('active');
    menuButton.classList.remove('active');
}

navigationMenuButton.forEach((button) => {
    button.addEventListener('click', closeMenu)
});