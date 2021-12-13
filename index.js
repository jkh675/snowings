var init_blur = 100;
var blur_animation_frame = 0;
var intro_blur = setInterval(function () {
    $("#header_svg_notblur").fadeOut(0);
    $("#down_fleet").fadeOut(0);
    $("#down_about").fadeOut(0);
    blur_animation_frame = blur_animation_frame + 1;
    init_blur = init_blur - 1;
    $('#header_svg').css('filter', `blur(${init_blur}px)`);
    if (init_blur == 0) {
        clearInterval(intro_blur);
        init_header();
    }
}, 1);

function init_header() {
    $("#company_name").animate({
        top: '-100px',
    },300);
    $("#company_name").animate({
        letterSpacing: '0px',
        fontSize: '105px',
        color: 'rgb(138,103,208)',
    }, 300);
    $("#company_sologan").animate({
            top: '-100px',
    },500);
    $("#company_sologan").animate({
        letterSpacing: '30px',
        fontSize: '55px',
        color: 'rgb(138,103,208)',
    }, 500);
    $("#header_svg_notblur").fadeIn("slow")
    $("#down_fleet").fadeIn("slow")
    $("#down_about").fadeIn("slow")
}