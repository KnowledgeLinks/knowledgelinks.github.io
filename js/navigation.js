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
        	var el = $("#kl-page")
            el.empty();
            el.load("/" + this.params.page + ".html")
            var offset = el.offset()
            window.scroll(offset.left, offset.top);
        });
     	this.get('', function() { 
     		var url = $.url();
     		if (url.attr('path') == "/") {
     			var el = $("#kl-page")
     			el.empty();
            	el.load("/home.html");
            } else {
            	window.location = url.attr('source');
            };
        });
    }).run();