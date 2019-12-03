const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header-content');

const changeMenu = () => {
    const scrollValue = window.scrollY;
    const navbarHeight = document.querySelector('.navbar').scrollHeight;
    console.log(`scroll value ${scrollValue}`);
    console.log(`smavbar Height ${navbarHeight}`);

    if (scrollValue >= (navbarHeight / 2)) {
        navbar.classList.add('active');
        headerContent.classList.add('active');
    } else {
        navbar.classList.remove('active');
        headerContent.classList.remove('active');
    }
}

window.addEventListener('scroll', changeMenu);