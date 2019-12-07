$('nav a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    const navbarHeight = $('.navbar').height();
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - navbarHeight,
    })
})