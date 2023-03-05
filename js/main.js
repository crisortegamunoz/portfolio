(function ($) {
 "use strict";
 
 
/*
Preloader
------------------------------ */

setTimeout(function () {
	$('#preloader').fadeToggle();
}, 1500);
 
/*
Tooltip
------------------------------ */

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

/*
Countdown Clock
------------------------------ */
function makeTimer() {
	let endTime = new Date('26 March 2023 22:00:00 GMT-03:00');			
	endTime = (Date.parse(endTime) / 1000);

	let now = new Date();
	now = (Date.parse(now) / 1000);

	const timeLeft = endTime - now;

	let days = Math.floor(timeLeft / 86400); 
	let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < '10') { hours = `0${hours}`; } 
	if (minutes < '10') { minutes = `0${minutes}`; }
	if (seconds < '10') { seconds = `0${seconds}`; }

	$("#days").html(`${days}<h6>Días</h6>`);
	$("#hours").html(`${hours}<h6>Días</h6>`);
	$("#minutes").html(`${minutes}<h6>Días</h6>`);
}
setInterval(function() { makeTimer(); }, 1000);


/*
Prognroll 
------------------------------ */
$(function() {
  $("#scrollbar-right").prognroll({
    height: 2, //Progress bar height
    color: "#linear-gradient(#9d2bf3, #5050f5)", //Progress bar background color
    custom: true //If you make it true, you can add your custom div and see it's scroll progress on the page
  });
});

/*
Expend 
------------------------------ */
$(".notify-btn,.close-icon").click(function() {
	$("body,#scrollbar-right,.close-icon").toggleClass("active");
});

 
 })(jQuery)