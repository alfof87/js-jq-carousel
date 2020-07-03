$(document).ready(function(){
$(".next").click(function(){
  $(".slider-wrapper img.active").removeClass("active");
  $(".slider-wrapper img.active").next().addClass("active");
});




});
