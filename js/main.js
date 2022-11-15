let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
	buttons: [
	  "slideShow",
	  "thumbs",
	  "zoom",
	  "fullScreen",
	  "share",
	  "close"
	],
	loop: true,
	protect: true
  });
  
  new WOW().init();