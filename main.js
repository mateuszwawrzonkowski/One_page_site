const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header-content');
const menuButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.menu');

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

const openMenu = () => {
    navigation.classList.toggle('active');
    menuButton.classList.toggle('active');
}


window.addEventListener('scroll', scrollHeader);
menuButton.addEventListener('click', openMenu)