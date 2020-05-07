

//  Page load animation
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
});

//                               NAVIGATION
function checkNavTabs() {
	let navElems = document.querySelectorAll('.tab-pane');
	for (let node of navElems) {
	   if(Array.from(node.classList).includes("show")) {
		 return true;
	  }
	}
	return false;
  }
  
  
	function toggleData(elemId) {
		let tabId = document.querySelector(elemId);
		if (checkNavTabs())  {
		  if (Array.from(tabId.classList).includes('show')) {
			tabId.classList.remove('show');
			tabId.classList.add('hide'); 
		  }
		 else {
		   let tabPans = document.querySelectorAll('.tab-pane');
		   for (let tab of tabPans) {
			 if (Array.from(tab.classList).includes('show')) {
			   tab.classList.remove('show');
			   tab.classList.add('hide');
			   tabId.classList.add('show');
			   tabId.classList.remove('hide');
			 }
		   }
		 } 
		  
		} 
		else {
		  tabId.classList.remove('hide');
		  tabId.classList.add('show');
		}
	}

	let women = document.querySelectorAll('li')[0];
  	women.addEventListener('click', () => {
    toggleData("#women");
  })
	let men = document.querySelectorAll('li')[1];
	men.addEventListener('click', () => {
	toggleData("#men");
	})
	let brands = document.querySelectorAll('li')[2];
	brands.addEventListener('click', () => {
	toggleData("#brands");
	})

//                                 SLIDER
let slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	let index = 0, time = 5000;
	slides[index].classList.add('current-slide');

	setInterval( () => {
		slides[index].classList.remove('current-slide');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('current-slide');

	}, time);
}