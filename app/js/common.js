function preloader() {
	$(document).ready(function () {

		setInterval(function () {
			let p = $('.preloader');
			p.css('opacity', 0);
			p.css('visibility', 'hidden')
		}, 1000)

	});
}

preloader();


$(document).ready(function () {


	new WOW().init(); //Ініціалізація wow.js

	//Центрування кутів перщої секції
	function carCorner() {
		let winWidth = $(window).width()
		let corWidth = winWidth / 2
		let corTop = $('.carousel-corner-top')
		let corBot = $('.carousel-corner-bot')
		corTop.css('border-right', '' + corWidth + 'px solid transparent');
		corTop.css('border-left', '' + corWidth + 'px solid transparent');
		corBot.css('border-right', '' + corWidth + 'px solid #fff');
		corBot.css('border-left', '' + corWidth + 'px solid #fff');
	}

	function resetCorner() {

		let corTop = $('.carousel-corner-top')
		let corBot = $('.carousel-corner-bot')

		corTop.css('border-right', '');
		corTop.css('border-left', '');
		corBot.css('border-right', '');
		corBot.css('border-left', '');
	}

	$(window).on('load', carCorner());
	$(window).on('resize', function () {
		clearTimeout(window.resizedFinished);
		resetCorner();
		window.resizedFinished = carCorner();
	});





	$(".main-carousel").owlCarousel({
		loop: true,
		nav: true,
		center: true,
		items: 2,
		stagePadding: 20,
		dots: true,
		margin: 0,
		smartSpeed: 800,
		navText: ['<img src="img/prev.svg">',
			'<img src="img/next.svg">'
		],
		autoplay: false,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				stagePadding: 20,
				margin: 0
			},
			800: {
				margin: 0,
				items: 1.4
			},
			1100: {
				margin: 0,
				items: 1
			},
			1400: {
				margin: 0,
				items: 1
			}

		}
	});

	//Міняє фон каруселі
	let mCar = $('.main-carousel')
	url = null

	mCar.on("changed.owl.carousel", function () {
		setTimeout(function () {
			let centerImg = $(".main-carousel").find(".center").find(".main-carousel-item"),
				url = centerImg.css("background-image");
			$(".s-serv-carousel").css("background-image", url);
		}, 10);

	});







	$(".carousel-articles").owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		dots: true,
		navText: ['<img src="img/prev.svg">',
			'<img src="img/next.svg">'
		],
		slideTransition: 'ease-in-out',
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			},
			1400: {
				items: 3,
				margin: 0
			},
			1500: {
				items: 4
			}

		}
	});








	// ПЛАВНА ПРОКРУТКА ПО ЯКОРЯХ
	let $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 700);
		return false;
	});





	$(window).scroll(function () {

		if ($(this).scrollTop() > 700) {

			$('#to-top').fadeIn();

		} else {

			$('#to-top').fadeOut();

		}

	});

	$('#to-top').click(function () {

		$('body,html').animate({
			scrollTop: 0
		}, 800);

	});


});