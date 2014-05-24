$(document).ready(function() {

// menu on mobile devices
	$("#drop-menu").on("click", function() {
		$("nav ul").toggleClass("slideDown");
	});

// expanding the form
	var open = $("#theformBtn")

	open.on("click", function() {
		$("#contact").toggleClass("goTo");
	});

// expanding the tag boxes
	$(".tag-img").on("click", function() {
		$("ul.tag-group").toggleClass("open");
	});

//FitVids
	$("body").fitVids();

//Scrolld
	$("[id*='Btn']").stop(true).on("click",function(e){e.preventDefault();$(this).scrolld();});

//fancybox
	$(".fancybox").fancybox({
    helpers : {
        overlay : {
            css : {
                "background" : "rgba(58, 42, 45, 0.5)"
            }
        }
    }
});

});