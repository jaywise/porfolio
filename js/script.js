//slides in item (in Firefox) or fades item in (in Chrome)
$("#slide-in").css({"position":"relative","opacity": 0, "right":"+=100"});
 $("#slide-in").animate({right:0, opacity:1},1500);


//TODO sequence delay
 $("#slide-in-2").css({"position":"relative","opacity": 0, "right":"+=100"});
 $("#slide-in-2").delay(800).animate({right:0, opacity:1},1500);

//TODO sequence delay
 $("#slide-in-3").css({"position":"relative","opacity": 0, "right":"+=100"});
 $("#slide-in-3").delay(1600).animate({right:0, opacity:1},1500);

//hides highlight on load and fades in yellow after 1s
$(".highlight-delay").delay(2500).queue(function(next) {
  		$(this).addClass("highlight");
	  next();
});



 /*turns text blue, then fades, upon hover
?*$(document).ready(function(){
    $("p").hover(function(){
        $(this).css("background-color", "lightblue");
        }, function(){
        $(this).css("background-color", "white");
        $(this).css("opacity", "0.4")
    });
});
*/

/*TODO -- Streamline function to bind with only hovered element*/
$("#img1").mouseover(function() {
		$("#triangle1").fadeOut("fast")
});
$("#img1").mouseout(function() {
		$("#triangle1").fadeIn("slow")
});

$("#img2").mouseover(function() {
		$("#triangle2").fadeOut("fast")
});
$("#img2").mouseout(function() {
		$("#triangle2").fadeIn("slow")
});

$("#img3").mouseover(function() {
		$("#triangle3").fadeOut("fast")
});
$("#img3").mouseout(function() {
		$("#triangle3").fadeIn("slow")
});

$("#img4").mouseover(function() {
		$("#triangle4").fadeOut("fast")
});
$("#img4").mouseout(function() {
		$("#triangle4").fadeIn("slow")
});

$("#img5").mouseover(function() {
		$("#triangle5").fadeOut("fast")
});
$("#img5").mouseout(function() {
		$("#triangle5").fadeIn("slow")
});

$("#img6").mouseover(function() {
		$("#triangle6").fadeOut("fast")
});
$("#img6").mouseout(function() {
		$("#triangle6").fadeIn("slow")
});

$("#img7").mouseover(function() {
		$("#triangle7").fadeOut("fast")
});
$("#img7").mouseout(function() {
		$("#triangle7").fadeIn("slow")
});

$("#img8").mouseover(function() {
		$("#triangle8").fadeOut("fast")
});
$("#img8").mouseout(function() {
		$("#triangle8").fadeIn("slow")
});

$("#img9").mouseover(function() {
		$("#triangle9").fadeOut("fast")
});
$("#img9").mouseout(function() {
		$("#triangle9").fadeIn("slow")
});




$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});




//brings item to fore and darkens opacity when hovered 

//TODO color portofolio item as green and place checkmark over once item has been viewed in lightbox