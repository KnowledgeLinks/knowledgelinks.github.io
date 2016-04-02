var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 100);
    $(".blur").css("opacity", oVal);
    
});

