// load the navigation bar
$('#kl-nav').after().load("/navigation.html", function(){
	/* Set the active link in the navigation by reading the url path and
   	   and comparing it to the links in navigation */
   	var url = $.url();
	$(".navbar").find('a').each( function () {
		if (url.attr('path') == $(this).attr('href')) {
			$(this).closest( "li" ).addClass("active")
		} else {
			$(this).closest( "li" ).removeClass("active")
		}
	});
});

 // Client-side routes    
    Sammy(function() {
        this.get('#:page', function() {
            $("#kl-page").empty();
            $('#kl-page').load("/" + this.params.page + ".html")
        });
     	this.get('', function() { 
     		var url = $.url();
     		if (url.attr('path') == "/") {
     			$("#kl-page").empty();
            	$('#kl-page').load("/home.html");
            } else {
            	window.location(url.attr('source'));
            };
        });
    }).run();