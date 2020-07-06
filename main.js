$(document).ready(function(){
$(".next").click(function(){
  var j = $(".slider-wrapper img.active");
  j.removeClass("active");
  var k = $(".slider-wrapper i.active");
  k.removeClass("active");


  if (j.hasClass("last") == true) {
    $(".slider-wrapper img.first").addClass("active");
    $(".slider-wrapper i.first").addClass("active");
  }else{
      j.next().addClass("active");
      k.next().addClass("active");
  }
});
////////////////////////////////////////////////////////////
$(".prev").click(function(){
  var j = $(".slider-wrapper img.active");
  j.removeClass("active");
  var k = $(".slider-wrapper i.active");
  k.removeClass("active");


  if (j.hasClass("first") == true) {
    $(".slider-wrapper img.last").addClass("active");
    $(".slider-wrapper i.last").addClass("active");
  }else{
      j.prev().addClass("active");
      k.prev().addClass("active");
  }
});





});
