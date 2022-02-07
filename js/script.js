//Menu Fix
let navOff = $('#menu').offset().top

$(window).scroll(function(){
    let scrolling = $(this).scrollTop();

    if(scrolling > navOff){
        $('#menu').addClass('menu_fix');
    }
    else{
        $('#menu').removeClass('menu_fix');
    }
})