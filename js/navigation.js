$('#kl-nav').load("/navigation.html");

/* Set the active link in the navigation by reading the url path and
   and comparing it to the links in navigation */
var url = $.url();
$(document).ready(function(){
	$(".navbar").find('a').each( function () {
		alert("ran nav")
		if (url.attr('path') == $(this).attr('href')) {
			$(this).closest( "li" ).addClass("active")
		} else {
			$(this).closest( "li" ).removeClass("active")
		}
	});
	
});
