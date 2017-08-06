$(function() {
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        console.log("scrolled", $(window).scrollTop());
        if ($(window).scrollTop() > 50)
    	{
             $("#logo1").scrollTop(function(){
				$(this).hide("slow");
			});
        } else {
            $("#logo1").scrollTop(function(){
				$(this).show("slow");
			});
        }
    });
});




$(function() {
			$( "#text2" ).ready(function() {
			  $( "#text1" )
				.animate({
				 // color: "red"
				}, {
				  queue: false,
				  duration: 3000
				})
				.animate({ fontSize: "20px" }, 1000 )
				.animate({ borderRightWidth: "15px" }, 1000 );
			});
    });

	
	