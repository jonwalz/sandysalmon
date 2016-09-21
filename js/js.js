$(document).ready(function(){
  $('.slider1').slick({
  	autoplay: true,
  	autoplaySpeed: 3000,
  	fade: true,
  	cssEase: 'linear',
  	respondTo: 'window',
    arrows: false
  });
  $('.slider2').slick({
  	autoplay: true,
  	autoplaySpeed: 3000,
  	fade: true,
  	cssEase: 'linear',
  	respondTo: 'slider',
    arrows: false
  });
});
				