$('nav a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    const navbarHeight = $('.navbar').height();
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - navbarHeight,
    })
})

$('.header-content img').on('click', function () {
    $('body, html').animate({
        scrollTop: 0,
    })
})