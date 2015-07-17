$(document).ready(function() {
	$("body").scrollspy({target: "#menu", offset:50});
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top -50}, 1000);
		return false;
	});
	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
	var scroll_r = $(this).scrollTop();
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
	 $('.selectpicker').selectpicker();
	var myMap;
	ymaps.ready(init);
	function init () {
		myMap = new ymaps.Map('map', {
			center: [55.7260346,37.3994994],
			zoom: 12,
			controls: []
		}),
		myMap.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			myPlacemark = new ymaps.Placemark([55.7260346,37.3994994], {
				hintContent: [
				''
			].join(''),
				balloonContentBody: [
				'<div class=\'map_holder\'><div class=\'map_header\'><p>Контакты</p><\/div><div class=\'map_address\'><div class=\'icon\'><\/div><p>г. Москва,ул. Горбунова, 2</p><\/div><div class=\'map_phone\'><div class=\'icon\'><\/div><p><strong>+ 7 (495) 000-00-00</strong></p><\/div><div class=\'map_date\'><div class=\'icon\'><\/div><p>Пн-Пт с 08:00 до 17:00</p><\/div><div class=\'map_mail\'><div class=\'icon\'><\/div><p><a href="mailto:vorota@mail.ru">vorota@mail.ru</a></p><\/div><\/div>'
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pin.png',
				//balloonLayout: "default#imageWithContent",
				//closeButton: true,
				iconImageSize: [102, 91],
				iconImageOffset: [-32, -87],
				//balloonImageHref: 'assets/img/newbaloon.png',
				//balloonImageSize: [345, 244],
				//balloonContentSize: [345, 244],
				//balloonOffset: [-300, 80],
				//balloonShadow: true
			});
		myMap.geoObjects.add(myPlacemark);
	}
});


function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}


function menuTop() {
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	}
	else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
