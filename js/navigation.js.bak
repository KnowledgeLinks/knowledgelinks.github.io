$('#kl-nav').load("/navigation.html");

/* Set the active link in the navigation by reading the url path and
   and comparing it to the links in navigation */
var url = $.url();
$(document).ready(function(){
	$(".navbar").find('a').each( function () {
		if (url.attr('source') == $(this).attr('href')) {
			$(this).closest( "li" ).addClass("active")
		} else {
			$(this).closest( "li" ).removeClass("active")
		}
	});
});
