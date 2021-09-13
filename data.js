$(document).ready(function(){
$(".body .radio_content").hide();
$(".body .radio_content:first-child").show();
$(".radio_wrap").click(function(){
var current_radio = $(this).attr("data-radio");
$(".body .radio_content").hide();
$("." + current_radio).show();
});
});