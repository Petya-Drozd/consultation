//@prepros-append dynamic adaptive.js

let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {
	///////////////////////////////
	 //header header fixed
	///////////////////////////////
	 $(document).ready(function () {
	   let header = $("#header");
	   let about = $("#headFix");
	   let aboutH = about.innerHeight();
	   let scrollPos = $(window).scrollTop();

	   checkScroll(scrollPos, aboutH);

	   $(window).on("scroll resize", function() {
	     scrollPos = $(this).scrollTop();

	     checkScroll(scrollPos, aboutH);
	   });

	   function checkScroll(scrollPos, aboutH) {
	     if(scrollPos > aboutH) {
	       header.addClass("header__fixed");
	     }
	     else {
	       header.removeClass("header__fixed");
	     }
	   };
	 });
	//MENU burger
		let iconMenu=document.querySelector(".icon__menu");
			iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle("active");
	});
	$(document).ready(function() {
	$('.item-blog_link').click(function(event) {
		$('.item-blog_text').toggleClass('expand');
    });
});

//	MENU burger
		let body=document.querySelector("body");
		let menuBody=document.querySelector(".menu");
	iconMenu.addEventListener("click", (e) => {
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});

	//SLIDER
		let slider=document.querySelectorAll(".slider");
	slider.forEach(el => {
		let sliderItem = new Glide(el, {
			type: 'carousel',
			perView: 1,
		});
		sliderItem.mount();
	});

	function ibg(){

		let ibg=document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}

	ibg();
});


$('.load-more').on('click', function() {
		let hideBtn=document.querySelector(".load-more");
			hideBtn.addEventListener("click", (e) => {
			hideBtn.classList.toggle("dis");
	});
	const btn = $(this);
	const loader = btn.find('span');
	$.ajax ({
		url:'data.html',
		type: 'GET',
		beforeSend: function() {
			btn.attr('disabled', true);
			loader.addClass('active');
		},
		success: function(responce) {
			setTimeout(function() {
				loader.removeClass('active');
				btn.attr('disabled', true);
				$('.show-all').before(responce);
			}, 1000);
				hideBtn.classList.toggle("dis");
		},
		error: function() {
			alert('Error 404 Reload Page');
			btn.attr('disabled', true);
	}
	});
});

//acordeon
$(document).ready(function() {
	$('.item-faq_title').click(function(event) {
		if($('.faq__row').hasClass('one')){
			$('.item-faq_title').not($(this)).removeClass('active');
			$('.item-faq_text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

//animation on scroll
const animItems = document.querySelectorAll('.anim-on');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('anim-onetime')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
