jQuery(document).ready(function() {
	iniciaSliderProjects();
	iniciaSliderNews();

	// Funcion para poner automaticamente el alto igual que el ancho de las capas absolutas de servicios
	autoHeight();

	// funcion para quitar y poner las clases de las animaciones de las empresas dependiendo del tamaÃ±o de pantalla
	if($(window).innerWidth() < 480){
		removeAnimClass();
	}else{
		addAnimClass();
	}

	// Funcionalidad para ajustar el alto del la seccion inicial al alto de cualquier dispositivo
	$('#Home-section').css({ 'height': $(window).height() });
	$(window).on('resize', function() {

		$('#Home-section').css({ 'height': $(window).height() });
		$('body').css({ 'width': $(window).width() })
	});

	$('#Home-section .sp-slides-container').css({ 'height': $(window).height() });
	$(window).on('resize', function() {

		$('#Home-section .sp-slides-container').css({ 'height': $(window).height() });
		$('body').css({ 'width': $(window).width() })
	});

	$('#Home-section .slider-pro').css('height','100%');


	// funcion para cambiar la pantalla del servicio en la imagen del movil
	$('#trigger-serv1').click(function(){
		if($(this).hasClass('active')){
			$('.absolute-layer-services > div').each(function(){
				$(this).removeClass('current');	
			});
		}else{
			$('.absolute-layer-services > div').each(function(){
				if($(this).hasClass('current')){
					$(this).removeClass('current');
				}	
			});

			setTimeout(function(){
				$('.serv1').addClass('current');
			}, 750);
		}

		var navHeight = $(".navbar").height();

		if($(".navbar-header").height()>0)
		{
			navHeight = $(".navbar-header").height();
		}

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target
			|| $('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body')
				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
				return false;
			}
		}

	});
	$('#trigger-serv2').click(function(){
		if($(this).hasClass('active')){
			$('.absolute-layer-services > div').each(function(){
				$(this).removeClass('current');	
			});
		}else{
			$('.absolute-layer-services > div').each(function(){
				if($(this).hasClass('current')){
					$(this).removeClass('current');	
				}	
			});

			setTimeout(function(){
				$('.serv2').addClass('current');
			}, 750);
		}

		var navHeight = $(".navbar").height();

			if($(".navbar-header").height()>0)
			{
				navHeight = $(".navbar-header").height();
			}

			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target
				|| $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body')
					.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
					return false;
				}
			}
		

	});
	$('#trigger-serv3').click(function(){
		if($(this).hasClass('active')){
			$('.absolute-layer-services > div').each(function(){
				$(this).removeClass('current');	
			});
		}else{
			$('.absolute-layer-services > div').each(function(){
				if($(this).hasClass('current')){
					$(this).removeClass('current');	
				}	
			});

			setTimeout(function(){
				$('.serv3').addClass('current');
			}, 750);
		}

		var navHeight = $(".navbar").height();

			if($(".navbar-header").height()>0)
			{
				navHeight = $(".navbar-header").height();
			}

			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target
				|| $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body')
					.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
					return false;
				}
			}
		

	});
	$('#trigger-serv4').click(function(){
		if($(this).hasClass('active')){
			$('.absolute-layer-services > div').each(function(){
				$(this).removeClass('current');	
			});
		}else{
			$('.absolute-layer-services > div').each(function(){
				if($(this).hasClass('current')){
					$(this).removeClass('current');			
				}	
			});
			setTimeout(function(){
				$('.serv4').addClass('current');
			}, 750);
		}

		var navHeight = $(".navbar").height();

			if($(".navbar-header").height()>0)
			{
				navHeight = $(".navbar-header").height();
			}

			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target
				|| $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body')
					.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
					return false;
				}
			}
		
		

	});
	$('#trigger-serv5').click(function(){
		if($(this).hasClass('active')){
			$('.absolute-layer-services > div').each(function(){
				$(this).removeClass('current');	
			});
		}else{
			$('.absolute-layer-services > div').each(function(){
				if($(this).hasClass('current')){
					$(this).removeClass('current');		
				}	
			});

			setTimeout(function(){
				$('.serv5').addClass('current');
			}, 750);
		}

		var navHeight = $(".navbar").height();

			if($(".navbar-header").height()>0)
			{
				navHeight = $(".navbar-header").height();
			}

			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target
				|| $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body')
					.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
					return false;
				}
			}
		

	});
	$('#trigger-serv6').click(function(){
		if($(this).hasClass('active')){
			$('.absolute-layer-services > div').each(function(){
				$(this).removeClass('current');	
			});
		}else{
			$('.absolute-layer-services > div').each(function(){
				if($(this).hasClass('current')){
					$(this).removeClass('current');	
				}	
			});

			setTimeout(function(){
				$('.serv6').addClass('current');
			}, 750);
		}

		var navHeight = $(".navbar").height();

			if($(".navbar-header").height()>0)
			{
				navHeight = $(".navbar-header").height();
			}

			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target
				|| $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body')
					.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
					return false;
				}
			}
		

	});

	// Funcion para que se deseleccionen los objetos si se clicka fuera de ellos
	$(document).click(function(e){
		$('.absolute-layer-services > div').each(function(){
			$(this).removeClass('current');
		});

		var myCount = 0;
		setTimeout(function(){
			$('.absolute-layer-services > div').each(function(){
				
				if(!$(this).hasClass('current')){
					myCount++;
				}
				
			});
		}, 760);			

		setTimeout(function(){
			if(myCount == 6){
				$('.services-list li a').each(function(){
					$(this).removeClass('active');
				});	
			}
		}, 760);

	});

	
	/***************/
	/*** RESIZES ***/
	/***************/
	$(window).resize(function(){

		// Funcion para poner automaticamente el alto igual que el ancho de las capas absolutas de servicios
		autoHeight();

		if($(window).innerWidth() < 769){

		}

		if($(window).innerWidth() < 480){
			removeAnimClass();
		}else{
			addAnimClass();
		}
	});

	/**************/
	/*** SCROLL ***/
	/**************/
	var waypoint = new Waypoint({
		element: document.getElementById('projects-section'),
		handler: function() {
			$('.absolute-layer-services > div').each(function(){
				$(this).removeClass('current');	
			});	
			$('.services-list li a').each(function(){
				$(this).removeClass('active');	
			});
		}
	});

	var waypoint2 = new Waypoint({
		element: document.getElementById('about-section'),
		handler: function() {
			$('.absolute-layer-services > div').each(function(){
				$(this).removeClass('current');	
			});	
			$('.services-list li a').each(function(){
				$(this).removeClass('active');	
			});
		}
	});

}); 

// funcion para quitar y poner las clases de las animaciones dependiendo del tamaÃ±o de pantalla
function removeAnimClass(){
	
}
function addAnimClass(){

}

// Funcion para poner automaticamente el alto igual que el ancho de las capas absolutas de servicios
function autoHeight(){
	$('.absolute-layer-services > div').each(function(){
		var obj = $(this);
		var currentWidth = obj.width();

		obj.height(currentWidth);
	});

}

//  SliderHome
function iniciaSliderHome()
{
	$( '#sliderHome' ).sliderPro({
		width: '100%',
		height: 520,
		arrows: false,
		buttons: false,
		waitForLayers: true,
		autoplay: false,
		touchSwipe: false,
		fade: true,
		fadeDuration: 2000,
		slideAnimationDuration: 300,
		slideDistance: 0,
		forceSize: 'fullWidth',
		breakpoints: {
			500: {
			}
		}
	});
}

//  SliderProjects
function iniciaSliderProjects()
{
	$( '#sliderProjects' ).sliderPro({
		width: '100%',
		height: 710,
		arrows: false,
		buttons: true,
		waitForLayers: true,
		autoplay: true,
		autoplayDelay: 5000,
		touchSwipe: false,
		fade: true,
		fadeDuration: 2000,
		slideAnimationDuration: 700,
		heightAnimationDuration: 1000,
		slideDistance: 0,
		loop: true,
		autoScaleLayers: false
	});
}

//  SliderNews
function iniciaSliderNews()
{
	$( '#sliderNews' ).sliderPro({
		width: '100%',
		height: 600,
		arrows: false,
		buttons: true,
		waitForLayers: true,
		autoplay: false,
		autoplayDelay: 5000,
		touchSwipe: false,
		fade: false,
		fadeDuration: 0,
		slideAnimationDuration: 0,
		heightAnimationDuration: 0,
		slideDistance: 0,
		loop: true,
		autoScaleLayers: false
	});
}

//  SliderWork
function iniciaSliderWork()
{
	$( '#sliderWork' ).sliderPro({
		width: '100%',
		height: 350,
		arrows: false,
		buttons: false,
		waitForLayers: true,
		autoplay: false,
		touchSwipe: false,
		fade: true,
		fadeDuration: 2000,
		slideAnimationDuration: 300,
		slideDistance: 0,
		loop: true,
		autoScaleLayers: false
	});
}


// funcion para navegacion en mobile de los servicios
function prevServ(pos){
	if(pos == 1){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv1').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv1').addClass('active');

	}else if (pos == 2){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv2').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv2').addClass('active');

	}else if (pos == 3){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv3').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv3').addClass('active');

	}else if (pos == 4){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv4').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv4').addClass('active');

	}else if (pos == 5){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv5').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv5').addClass('active');

	}
}

function nextServ(pos){
	if(pos == 2){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv2').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv2').addClass('active');

	}else if (pos == 3){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv3').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv3').addClass('active');

	}else if (pos == 4){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv4').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv4').addClass('active');

	}else if (pos == 5){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv5').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv5').addClass('active');

	}else if (pos == 6){
		$('.absolute-layer-services > div').each(function(){
			if($(this).hasClass('current')){
				$(this).removeClass('current');
			}	
		});

		setTimeout(function(){
			$('.serv6').addClass('current');
		}, 750);

		$('a[id*="trigger-serv"]').each(function(){
			$(this).removeClass('active');
		});

		$('#trigger-serv6').addClass('active');

	}
}

// Funcion para cambiar el zindex del video cuando cargue
function changeZindex(){
	$('#sliderHome .sp-slides.sp-motio').css('zIndex','2');
}