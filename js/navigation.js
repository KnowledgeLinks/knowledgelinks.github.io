

$(document).ready(function () {
        $("li.dropdown ul.dropdown-menu li").click(function (event) {
            event.toElement.parentElement.click();
        })
    })
 // Client-side routes    
    Sammy(function() {
        this.get('#/:folder', function() {
        	$(".blurred-container").addClass("non-homepage-blur");
        	var el = $("#kl-page")
            el.empty();
            el.load("/" + this.params.folder + "/index.html", function() {
            	scrollPage()
            });
        });
        this.get('#/:folder/', function() {
        	var el = $("#kl-page")
            el.empty();
            el.load("/" + this.params.folder + "/index.html", function() {
            	scrollPage()
            });
        });
        this.get('#/:folder/:page', function() {
        	$(".blurred-container").addClass("non-homepage-blur");
        	var el = $("#kl-page")
            el.empty();
            el.load("/" + this.params.folder + "/" + this.params.page + ".html", function() {
            	scrollPage()
            });
        });
        this.get('#:pageRef', function() {
        	$(".blurred-container").addClass("non-homepage-blur");
        	var pageEl = $("#"+this.params.pageRef)
        	var el = $("#kl-page")
        	if (pageEl.length > 0) {
        		offset = pageEl.offset();
        		window.scroll(offset.left, offset.top-50);
        	} else {
	            el.empty();
	            el.load("/" + this.params.pageRef + ".html", function() {
	            	scrollPage()
	            });
	        }
        });
     	this.get('', function() { 
     		$(".blurred-container").removeClass("non-homepage-blur");
     		var url = $.url();
     		if (url.attr('path') == "/") {
     			var el = $("#kl-page")
     			el.empty();
            	el.load("/home.html", function() {
            		if ($(".navbar-header").find("button").is(':visible')) { 
	            		scrollPage();
	            	} else {
	            		highlightActiveNav();
	            	};
	            });
            } else {
            	window.location = url.attr('source');
            };
        });
    }).run();
    
function highlightActiveNav() {
	/* Set the active link in the navigation by reading the url path and
   	   and comparing it to the links in navigation */
	var url = $.url();
	$("#navbar").find('a').each( function () {
		if (url.attr('relative') == "/" + $(this).attr('href')||
				url.attr('source') == $(this).attr('href')) {
			$(this).closest( "li" ).addClass("active")
		} else {
			if ($(this).closest( "li" ).hasClass("dropdown")&&
					url.attr('relative').indexOf("/" + $(this).attr('href'))>-1) {
				$(this).closest( "li" ).addClass("active");
			} else {
				$(this).closest( "li" ).removeClass("active");
			};
		}
	});
};

function scrollPage(){
	/* scrolls the page to the first content and closes all bootstrap dropdowns */
	var el = $("#kl-page");
	var offset = el.offset();
	//if ($(".navbar-header").find("button").is(':visible')) {
		 offset.top = offset.top - 90
	//};
	window.scroll(offset.left, offset.top);
	highlightActiveNav()
    // close all open dropdowns
    $('.in,.open').removeClass('in open');

}