
let animItems = document.querySelectorAll('.anim-items');
const nav = document.querySelector('.navbar');

statisticArr = new Array(26, 128, 450, 100);

lockNum = true;

animLock = true;

let statisticVal = document.querySelectorAll('.statistic-nubers');


if (window.innerWidth < 800) {
	// console.log(window.innerWidth < 800)
	for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      animItem.classList.add('animation');
      funFor();
      animLock = false;
   }
}

if ((animItems.length > 0) && animLock) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll(){
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 2;
         
         statisticAnim = document.querySelector('.statistic-nubers.animation');

         if (statisticAnim) {
         	funFor();
         }
         	
         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('animation');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   animOnScroll();
}

let videoImg = document.querySelector('.video-img');
videoImg.addEventListener("click", function(){
	videoImg.classList.remove('visible');
});


//=====================---//scroll-to//---========================//

let linkDown = document.querySelector('.link-down');

linkDown.addEventListener("click", function(e) {
	linkDown.classList.remove('animation');
	linkDown.classList.add('link-lock');
	scrollTo(arrNav[0]);
	e.preventDefault();
});

function scrollTo(el) {
	window.scroll({
		left: 0,
		top: el.offsetTop - nav.offsetHeight,
		behavior: 'smooth'
	});
}

arrNav = document.querySelectorAll('.scrol-to');
navLincks = document.querySelectorAll('.menu-item.link');
keyNavLinck = true;

for (let i = 0; i < navLincks.length; i++) {
	const navLinck = navLincks[i];
	navLinck.addEventListener('click', function(e) {
		removeActiveNavLinck();
		navBurger.classList.remove('active');
		navigation.classList.remove('menu-active');
		body.classList.remove('lock');
		navLinck.classList.add('active');
		const el = arrNav[i];
		keyNavLinck = false;
		scrollTo(el);
		e.preventDefault();
		setTimeout(function() {
			keyNavLinck = true;
		}, 1000);
	});
}

function removeActiveNavLinck() {
	let navActive = document.querySelector('.menu-item.link.active');

	navActive.classList.remove('active');
}

function funFor() {

	if (lockNum) {
		for (let a = 0; a < statisticVal.length; a++) {
			let elNum =  statisticVal[a];
			let bracePoint = statisticArr[a];
			animStatistic(a, elNum, bracePoint);
		}
	}

	let statisticAnim = document.querySelectorAll('.statistic-nubers.animation');
	if (statisticAnim) {
		lockNum = false;
	}

	statisticAnimActive = document.querySelectorAll('.statistic-nubers.statistic-anim-active');

}

function animStatistic(a, elNum, bracePoint) {
	let n = 0;
	let t = 2500 / bracePoint;
	
	let step = 1;

	let interval = setInterval(() => {
		n = n + step;
		if (n == bracePoint) {
			clearInterval(interval);
		}
		elNum.innerHTML = n;
	},t);
}

//=====================---//scroll-to//---========================//
tabActiveId = 0;
$(document).ready(function() {
	$('.slider-header').slick({
		speed: 800,
		autoplay: true,
		autoplaySpeed: 3500
	});
	$('#tab-1').click(function(){
		$('label[class^=tab-worcs]').removeClass('active');
		$('.tab-worcs-1').addClass('active');
		tabActiveId = 0;
	});
	$('#tab-2').click(function(){
		$('label[class^=tab-worcs]').removeClass('active');
		$('.tab-worcs-2').addClass('active');
		tabActiveId = 1;
	});
	$('#tab-3').click(function(){
		$('label[class^=tab-worcs]').removeClass('active');
		$('.tab-worcs-3').addClass('active');
		tabActiveId = 2;
	});
	$('#tab-4').click(function(){
		$('label[class^=tab-worcs]').removeClass('active');
		$('.tab-worcs-4').addClass('active');
		tabActiveId = 3;
	});
	$('#tab-5').click(function(){
		$('label[class^=tab-worcs]').removeClass('active');
		$('.tab-worcs-5').addClass('active');
		tabActiveId = 4;
	});
	
});

const popapLinkcs = document.querySelectorAll('.popap-linck');
const body = document.querySelector('body');
const lockPading = document.querySelector(".lock-pading");
const tabs = document.querySelectorAll('label[class^=tab-]');

let unlock = true;

const timeout = 800;

$(document).ready(function(){
	let = sliderPopap = new Swiper('.popap-slider',{
		navigation: {
		  	nextEl: '.swiper-button-next',
		   prevEl: '.swiper-button-prev'
		},

	 	pagination: {
	   	el: '.swiper-pagination',
	   	type: 'fraction'
	  	},

	  	observer: true,
	  	observerSlideChildren: true,
	  	observerParents: true,

	  	speed: 600,

		// breakpoints: {
	 //  		320: {
	 //  			effect: 'fade',
				
	 //  			speed: 500,

	 //  			fadeEffect: {
	 //  				crossFade: true,
	 //  			},
	 //  			cubeEffect: {
		// 			slideShadows: false,
		// 			shadow: false,
		// 			shadowOffset: 0,
		// 			shadowScale: 0
		// 		},
	 //  		},

	 //  		900: {
	 //  			effect: 'cube',
		// 	  	cubeEffect: {
		// 			slideShadows: true,
		// 			shadow: true,
		// 			shadowOffset: 20,
		// 			shadowScale: 0.94
		// 		},
	 //  		},
		//  	},
	  	effect: 'fade',
				
		// speed: 500,

		fadeEffect: {
			crossFade: true,
		},

	  	autoHeight: true,
	 //  	effect: 'cube',
	 //  	cubeEffect: {
		// 	slideShadows: true,
		// 	shadow: true,
		// 	shadowOffset: 20,
		// 	shadowScale: 0.94
		// },
	  
	});
});
// window.addEventListener('resize', function(e){
// 	var swiperSlides = document.querySelectorAll('.swiper-slide');
// 	var sliderContainer = document.querySelectorAll('.popap-slider');
// 		console.log(window.innerWidth);
// 	for (let i = 0; i < swiperSlides.length; i++) {
// 		let swiperSlide = swiperSlides[i];
// 		if (swiperSlide.closest('.popap.open')) {
// 			setTimeout(function() {
// 				var sliderWidth = sliderContainer[tabActiveId].offsetWidth;
// 				var sliderTransform = (i - (tabActiveId * 12)) * sliderWidth;
// 				console.log(sliderWidth);
// 				swiperSlide.style.width = sliderWidth + "px";
// 				swiperSlide.style.transform = `translate3d(-${sliderTransform}px, 0, 0)`;
// 			}, 750);
// 		}
// 	}
// });

if (popapLinkcs.length > 0) {
	for (let i = 0; i < popapLinkcs.length; i++) {
		const popapLinck = popapLinkcs[i];
		popapLinck.addEventListener("click", function(e) {
			const popapName = popapLinck.getAttribute('href').replace('#', '');
			// 
			const curentPopap = document.getElementById(popapName);
			popapOpen(curentPopap);
			const nuber = i / 2;
			for (let ix = 0; tabs.length > ix; ix++) {
				const tab = tabs[ix];
				// const tabActive = document.querySelector('tab.active');
				// if (tab == tabActive) {
					const slide = nuber - tabActiveId * 12;
					// console.log(slide);
					sliderPopap[tabActiveId].slideTo(slide, 10);
					break;
				// }
			}
			
			e.preventDefault();
		});
	}
}

const popapCloseIcon = document.querySelectorAll('.cloce-popap');

if (popapCloseIcon.length > 0) {
	for (let i = 0; i < popapCloseIcon.length; i++) {
		const el =popapCloseIcon[i];
		el.addEventListener('click', function(e) {
			popapClose(el.closest('.popap'));
			e.preventDefault();
		});
	}
}

const plan = document.querySelector('.plan');

function popapOpen(curentPopap) {
	if (curentPopap && unlock) {
		const popapActive = document.querySelector('.popap.open');
		
		if (popapActive) {
			popapClose(popapActive, false);
		}else {
			bodyLock();
		}
		plan.classList.add('width');
		curentPopap.classList.add('open');
		nav.classList.add('animation');
		curentPopap.addEventListener("click", function(e) {
			if (!e.target.closest('.popap-content')) {
				popapClose(e.target.closest('.popap'));
			}
		});
	}
}

function popapClose (popapActive, doUnlock = true) {
	if (unlock) {
		popapActive.classList.remove('open');
		plan.classList.remove('width');
		nav.classList.remove('animation');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPadingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	for (let i = 0; i < lockPading.length; i++) {
		const el = lockPading[i];
		el.style.padingRight = lockPadingValue;
	}

	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function() {
		for (let i = 0; i < lockPading.length; i++) {
			const el = lockPading[i];
			el.style.padingRight = '0px';
		}
		body.style.padingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popapActive = document.querySelector('.popap.open');
		popapClose(popapActive);
	}
});

//===========---//popup//---================//


const meTabs = document.querySelectorAll('.me');
const tabLincs = document.querySelectorAll('.tab-woh_we-01');
const scilProsents = document.querySelectorAll('.scil_prosent');

let tabArr_1 = new Array(88, 92, 90, 98);
let tabArr_2 = new Array(98, 85, 95, 90);
let tabArr_3 = new Array(78, 90, 99, 86);

tabArray = new Array(tabArr_1, tabArr_2, tabArr_3);

let prevailing = new Array();

for (let i = 0; i < tabLincs.length; i++) {
	const tabLinc = tabLincs[i];
	tabLinc.addEventListener("click", function(e) {
		let meTabPrev = document.querySelector('.me.prev-tab');
		let meTabActive = document.querySelector('.me.active');
		let meTabActivePrev = document.querySelector('.me.active.prev-tab');
		removeTab();
		if (meTabActivePrev) {}
		meTabs[i].classList.add('active');
		tabLincs[i].classList.add('active');
		if (meTabPrev) {
			if (!meTabActivePrev) {
				meTabPrev.classList.remove('prev-tab');
			}
		}
		// for (let index = 0; index < scilProsents.length; index++) {}
		// 	const scilProsent = scilProsents[index];
		// 	scilProsent.innerHTML = tabArray[i][index] + "%";
		// if (scilProsents.length == index + 1) {}
		// 	const a = scilProsents[0].textContent;
		// 	const b = a.replace('%', '');
		for (let x = 0; x < meTabs.length; x++) {
			const meTab = meTabs[x];
			let meTabPrev = document.querySelector('.me.prev-tab');
			if (meTab == meTabPrev) {
				for (let c = 0; c < scilProsents.length; c++) {
					prevailing[c] = tabArray[i][c] - tabArray[x][c];
					if (scilProsents.length == c + 1) {
						tabAnimation(prevailing, i,x);
					}
				}
			}
		}
	});
}

function removeTab() {

	let meTabActive = document.querySelector('.me.active');
	let meTabPrevActive = document.querySelector('.me.prev-tab');
	
	let meTabActive1 = document.querySelector('.tab-woh_we-01.active');

	if (meTabActive) {       
		meTabActive.classList.remove('active');
		meTabActive1.classList.remove('active');
		meTabActive.classList.add('prev-tab');
	}
}

function tabAnimation(prevailing, i,x) {

	var prosentId = i;

	let timer;

	if (!prevailing[0] == 0) {
		for (let a = 0; a < prevailing.length; a++) {
			const scilProsent = scilProsents[a];
			if (prevailing[a] < 0) {
				timer = 1000 / (prevailing[a] * -1);
				let prosentStop = prevailing[a];
				let step = -1;
				animSkill(timer, step, prosentStop, i, a, x, scilProsent);
			}else{
				let step = 1;
				timer = 1000 / prevailing[a];
				let prosentStop = tabArray[x][a];
				animSkill(timer, step, prosentStop, i, a, x, scilProsent);
			}
		}
	}
}

function animSkill(timer, step, prosentStop, i, a, x, scilProsent) {

	let n = tabArray[x][a];
	let stopPoint = tabArray[i][a];

	let interval = setInterval(() => {
		n = n + step;
		if (n == stopPoint) {
			clearInterval(interval);
		}
		scilProsent.innerHTML = n + "%";
	},timer);
}

// $('.slider-worcs').slick({
// 	speed: 800,
// 	slidesToShow: 3,
// });

let = sliderWorcs = new Swiper('.slider-worcs',{
	navigation: {
   	nextEl: '.swiper-button-next',
   	prevEl: '.swiper-button-prev'
 	},

 	speed: 800,

 	observer: true,
  	observerSlideChildren: true,
  	observerParents: true,

  	slidesPerView: 3,

  	breakpoints: {
  		320:{
  			slidesPerView: 1
  		},

  		670: {
  			slidesPerView: 2
  		},

  		900: {
		  	slidesPerView: 3
  		},
  	},
});


$('.open-btn').click(function() {
	$('.map').toggleClass('open');
});
