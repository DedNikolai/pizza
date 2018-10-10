$('.navbar-button').click(function () {
    if ($('.navbar-menu').hasClass('navbar-menu-active')) {
        $('.navbar-menu').removeClass('navbar-menu-active')
        $('.navbar-button span').css('display', 'block')
        $('.close-menu').css('display', 'none')
    } else {
        $('.navbar-menu').addClass('navbar-menu-active')
        $('.navbar-button span').css('display', 'none')
        $('.close-menu').css('display', 'block')
    }
})