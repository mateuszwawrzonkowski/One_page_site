$('nav a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    const navbarHeight = $('.navbar').height();
    const navbarHeightActive = 75;

    if (document.documentElement.scrollTop === 0) {
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top - navbarHeightActive,
        })
    } else {
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top - navbarHeight,
        })
    }
})

$('.header-content img').on('click', function () {
    $('body, html').animate({
        scrollTop: 0,
    })
})