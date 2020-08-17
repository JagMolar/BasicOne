jQuery(document).ready(function() {
	iniciaSliderProjects();
	iniciaSliderNews();
	isReadyVideo();

	// Funcion para poner automaticamente el alto igual que el ancho de las capas absolutas de servicios
	autoHeight();

	// funcion para quitar y poner las clases de las animaciones de las empresas dependiendo del tamaÃ±o de pantalla
	if($(window).innerWidth() < 480){
		removeAnimClass();
	}else{
		addAnimClass();
	}

	//btn-about-us onClick
	// $('.btn-about-us').on('click', function(){ 
	// 	window.location.href = "about-us.html";
	// });

	//btn-que Projects onClick
	// $('.btn-projects').on('click', function(){ 
	// 	window.location.href = "projects.html";
	// });



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



	// FunciÃ³n para desplegar las empresas y plegarlas
	// $('.col-about-icons .button-layer').click(function(){
	// 	if($(this).hasClass('desplegated')){

	// 		$('#empresa1-poup').css('display','none');
	// 		$('#empresa2-poup').css('display','none');
	// 		$('#empresa3-poup').css('display','none');
	// 		$('#empresa4-poup').css('display','none');
	// 		$('#empresa5-poup').css('display','none');
	// 		$('#empresa6-poup').css('display','none');
	// 		$('.content-standar-empresas').css('display','block');

	// 		$(this).removeClass('desplegated');
	// 	}else{
	// 		$(this).addClass('desplegated');
	// 	}
	//     $('.container-block-empresas').slideToggle('fast');
	// });

	// Animacion para la linea roja
	// $('.button-layer').hover(function(){
	// 	if($('.redline-layer').hasClass('animated3s')){
	// 		$('.redline-layer').removeClass('animated3s');
	// 		$('.redline-layer').addClass('animated');
	// 	}

	// 	$('.redline-layer').addClass("rotateSutilZRight");
	// 	$('.redline-layer').removeClass("rotateSutilZRightBack");
	// }, function(){
	// 	if(!$('.button-layer').hasClass('desplegated')){
	// 		$('.redline-layer').removeClass("rotateSutilZRight");
	// 		$('.redline-layer').addClass("rotateSutilZRightBack");
	// 	}
	// });

	

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

		if(e['toElement'].classList != undefined){
			if(!e['toElement'].classList.contains("logo-innevis") && !e['toElement'].classList.contains("logo-legal") && !e['toElement'].classList.contains("logo-tbh") && !e['toElement'].classList.contains("logo-gedisa") && !e['toElement'].classList.contains("logo-ead") && !e['toElement'].classList.contains("logo-transformacion") && !e['toElement'].classList.contains("logo-kruger") && !e['toElement'].classList.contains("logo-itn")  && !e['toElement'].classList.contains("prev-arrow") && !e['toElement'].classList.contains("next-arrow")){
				$('.content-text-empresa').each(function(){
					$(this).fadeOut();
				});

				$('.block-logo-empresa').each(function(){

					$(this).removeClass('selected');
				});

				$('#default-text-basicOne').fadeIn();
			}
		}

	});

	// funcion para cambiar el color el servicio clickado
	$('.services-list li a').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$('.services-list li a').each(function(){
				$(this).removeClass('active');
			});
			$(this).addClass('active');
		}	
	});


	// funcion para activar y desactivar las empresas seleccionadas en hastenlab
	// $('.block-logo-empresa').click(function(){
	// 	var myNode = $(this);
	// 	var bool = true;

	// 	if(myNode.hasClass('selected')){
	// 		bool = false;
	// 	}

	// 	$('.block-logo-empresa').each(function(){
	// 		var currentIteration = $(this);

	// 		currentIteration.removeClass('selected');
	// 	});

	// 	if(bool){
	// 		myNode.addClass('selected');
	// 	}	

	// 	if(myNode.hasClass('logo-innevis') && bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#empresa101').fadeIn();

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}
	// 	}else if(myNode.hasClass('logo-legal') && bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#empresa102').fadeIn();

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}
	// 	}else if (myNode.hasClass('logo-tbh') && bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#empresa103').fadeIn();	

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}
	// 	}else if (myNode.hasClass('logo-gedisa') && bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#empresa104').fadeIn();

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}
	// 	}else if (myNode.hasClass('logo-ead') && bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#empresa105').fadeIn();

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}	
	// 	}else if (myNode.hasClass('logo-transformacion') && bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#empresa106').fadeIn();

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}
	// 	}else if (myNode.hasClass('logo-kruger') && bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#empresa107').fadeIn();

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}
	// 	}else if (myNode.hasClass('logo-itn') && bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#empresa108').fadeIn();

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}
	// 	}else if (!bool){
	// 		$('.content-text-empresa').each(function(){
	// 			$(this).fadeOut();
	// 		});

	// 		$('#default-text-basicOne').fadeIn();

	// 		var navHeight = $(".navbar").height();

	// 		if($(".navbar-header").height()>0)
	// 		{
	// 			navHeight = $(".navbar-header").height();
	// 		}

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	// 		&& location.hostname == this.hostname) {
	// 			var $target = $(this.hash);
	// 			$target = $target.length && $target
	// 			|| $('[name=' + this.hash.slice(1) + ']');
	// 			if ($target.length) {
	// 				var targetOffset = $target.offset().top;
	// 				$('html,body')
	// 				.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
	// 				return false;
	// 			}
	// 		}
	// 	}

	// });

	// funcion para cambiar la pantalla de las noticias en la imagen del movil
	$('.sp-button:nth-child(1)').click(function(){

		$('.absolute-layer-news > div').each(function(){
			if($(this).hasClass('current')){
				$(this).animate({
					'top': '-538px'
				}, 500);
				$(this).removeClass('current');
				$(this).css('top','538px');
				
				$('.noti1').animate({
					'top': '0'
				}, 500);
				
			}	
		});

		$('.noti1').addClass('current');

		setTimeout(function(){
			$('.absolute-layer-news > div').each(function(){
				if(!$(this).hasClass('current')){
					$(this).css('top','538px');	
				}	
			});
		}, 600);

	});

	$('.sp-button:nth-child(2)').click(function(){

		$('.absolute-layer-news > div').each(function(){
			if($(this).hasClass('current')){
				$(this).animate({
					'top': '-538px'
				}, 500);
				$(this).removeClass('current');
				$(this).css('top','538px');
				
				$('.noti2').animate({
					'top': '0'
				}, 500);
				
			}	
		});

		$('.noti2').addClass('current');

		setTimeout(function(){
			$('.absolute-layer-news > div').each(function(){
				if(!$(this).hasClass('current')){
					$(this).css('top','538px');	
				}	
			});
		}, 600);

	});

	$('.sp-button:nth-child(3)').click(function(){

		$('.absolute-layer-news > div').each(function(){
			if($(this).hasClass('current')){
				$(this).animate({
					'top': '-538px'
				}, 500);
				$(this).removeClass('current');
				$(this).css('top','538px');
				
				$('.noti3').animate({
					'top': '0'
				}, 500);
				
			}	
		});

		$('.noti3').addClass('current');

		setTimeout(function(){
			$('.absolute-layer-news > div').each(function(){
				if(!$(this).hasClass('current')){
					$(this).css('top','538px');	
				}	
			});
		}, 600);

	});

	$('.sp-button:nth-child(4)').click(function(){

		$('.absolute-layer-news > div').each(function(){
			if($(this).hasClass('current')){
				$(this).animate({
					'top': '-538px'
				}, 500);
				$(this).removeClass('current');
				$(this).css('top','538px');
				
				$('.noti4').animate({
					'top': '0'
				}, 500);
				
			}	
		});

		$('.noti4').addClass('current');

		setTimeout(function(){
			$('.absolute-layer-news > div').each(function(){
				if(!$(this).hasClass('current')){
					$(this).css('top','538px');	
				}	
			});
		}, 600);

	});
	
	/***************/
	/*** RESIZES ***/
	/***************/
	$(window).resize(function(){

		// Funcion para poner automaticamente el aulto igual que el ancho de las capas absolutas de servicios
		autoHeight();

		if($(window).innerWidth() < 769){
			$('.redline-layer').removeClass('rotateSutilZRight');
			$('.redline-layer').removeClass('rotateSutilZRightBack');
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


	/*****************/
	/*** ON RESIZE ***/
	/*****************/
	// var width = $(window).width(); 
	// $(window).resize(function(){
	// 	if($(window).width()!=width){
	// 		if($(window).innerWidth() < 992){
	// 			var tempContent = $('.container-block-empresas').html();

	// 			$('.container-block-empresas').remove();

	// 			$('.col-about-icons').after('<div class="row container-block-empresas">'+tempContent+'</div>');

	// 			// Funcion para mostrar u ocultar el contenido de cada una de las empresas
	// 			$('.iconEmpresa-1').click(function(){
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa1-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-2').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa2-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-3').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa3-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-4').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa4-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-5').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa5-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-6').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa6-poup').css('display','block');

	// 			});
	// 		}else{
	// 			var tempContent = $('.container-block-empresas').html();

	// 			$('.container-block').remove();

	// 			$('.container-about').append('<div class="row container-block">'+tempContent+'</div>');
				

	// 			// Funcion para mostrar u ocultar el contenido de cada una de las empresas
	// 			$('.iconEmpresa-1').click(function(){
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa1-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-2').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa2-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-3').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa3-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-4').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa4-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-5').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa6-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa5-poup').css('display','block');

	// 			});
	// 			$('.iconEmpresa-6').click(function(){
	// 				$('#empresa1-poup').css('display','none');
	// 				$('#empresa2-poup').css('display','none');
	// 				$('#empresa3-poup').css('display','none');
	// 				$('#empresa4-poup').css('display','none');
	// 				$('#empresa5-poup').css('display','none');
	// 				$('.content-standar-empresas').css('display','none');

	// 				$('#empresa6-poup').css('display','block');

	// 			});
	// 		}
	// 	}
		
	// });

	// if($(window).innerWidth() < 992){
		// var tempContent = $('.container-block-empresas').html();

		// $('.container-block-empresas').remove();

		// $('.col-about-icons').after('<div class="row container-block-empresas">'+tempContent+'</div>');
		
		// Funcion para mostrar u ocultar el contenido de cada una de las empresas
		// $('.iconEmpresa-1').click(function(){
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa1-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-2').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa2-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-3').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa3-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-4').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa4-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-5').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa5-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-6').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa6-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
	// }else{
		// var tempContent = $('.container-block').html();

		// $('.container-block').remove();

		// $('.container-about').append('<div class="row container-block">'+tempContent+'</div>');
	
		// Funcion para mostrar u ocultar el contenido de cada una de las empresas
		// $('.iconEmpresa-1').click(function(){
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa1-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight - 60 }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-2').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa2-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight - 60 }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-3').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa3-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight - 60}, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-4').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa4-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight - 60 }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-5').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa6-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa5-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight - 60 }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
		// $('.iconEmpresa-6').click(function(){
		// 	$('#empresa1-poup').css('display','none');
		// 	$('#empresa2-poup').css('display','none');
		// 	$('#empresa3-poup').css('display','none');
		// 	$('#empresa4-poup').css('display','none');
		// 	$('#empresa5-poup').css('display','none');
		// 	$('.content-standar-empresas').css('display','none');

		// 	$('#empresa6-poup').css('display','block');

		// 	var navHeight = $(".navbar").height();

		// 	if($(".navbar-header").height()>0)
		// 	{
		// 		navHeight = $(".navbar-header").height();
		// 	}

		// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		// 	&& location.hostname == this.hostname) {
		// 		var $target = $(this.hash);
		// 		$target = $target.length && $target
		// 		|| $('[name=' + this.hash.slice(1) + ']');
		// 		if ($target.length) {
		// 			var targetOffset = $target.offset().top;
		// 			$('html,body')
		// 			.animate({ scrollTop: targetOffset - navHeight - 60 }, 800); //set scroll speed here
		// 			return false;
		// 		}
		// 	}

		// });
	// }

}); 

// funcion para quitar y poner las calses de las animaciones de las empresas dependiendo del tamaÃ±o de pantalla
function removeAnimClass(){
	// $('.content-logo-empresas').removeClass('planet');
	// $('.block-logo-empresa').each(function(){
	// 	var obj = $(this);

	// 	obj.removeClass('sun');
	// });
}
function addAnimClass(){
	// if(!$('.content-logo-empresas').hasClass('planet')){
	// 	$('.content-logo-empresas').addClass('planet');
	// }
	// $('.block-logo-empresa').each(function(){
	// 	var obj = $(this);

	// 	if(!obj.hasClass('sun')){
	// 		obj.addClass('sun');
	// 	}

	// });
}

// Funcion para poner automaticamente el alto igual que el ancho de las capas absolutas de servicios
function autoHeight(){
	$('.absolute-layer-services > div').each(function(){
		var obj = $(this);
		var currentWidth = obj.width();

		obj.height(currentWidth);
	});
	
	// var currentWidthEmpresas = $('.logo-empresas .content-logo-empresas').width();
	// $('.logo-empresas .content-logo-empresas').height(currentWidthEmpresas);
}



//  Motio
// function iniciaHomeMotio()
// {
// 	//SliderHome
// 	var $example = $('.sp-motio');
// 	var frame = $example.find('.frame')[0];
// 	var offset = $example.offset();
// 	var motio = new Motio(frame, {
// 		fps: 40,
// 		speedX: -40
// 	});

// 	motio.play();

// 	// Play/Pause when mouse enters/leaves the frame
// 	$example.on('mouseenter mouseleave', function (event) {
// 		if (event.type === 'mouseenter') {
// 			motio.play();
// 		} else {
// 			motio.pause();
// 			//motio.play();
// 		}
// 	});

// 	// Update the animation speed & direction based on a cursor position
// 	$example.on('mousemove', function (event) {
// 		motio.set('speedX', event.pageX - offset.left - motio.width / 2);
// 		motio.set('speedY', event.pageY - offset.top - motio.height / 2);
// 	});

// }

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

// //  SliderValores
// function iniciaSliderValores()
// {
// 	$( '#sliderValores' ).sliderPro({
// 		width: '100%',
// 		height: 350,
// 		arrows: false,
// 		buttons: false,
// 		waitForLayers: true,
// 		autoplay: false,
// 		touchSwipe: false,
// 		fade: true,
// 		fadeDuration: 2000,
// 		slideAnimationDuration: 300,
// 		slideDistance: 0,
// 		loop: true,
// 		autoScaleLayers: false
// 	});
// }

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

// function iniciaPopus() {

// 	// Inline popups
// 	$('.col-block-servicio, .col-block-empresa').magnificPopup({
// 	  delegate: 'a',
// 	  removalDelay: 500, //delay removal by X to allow out-animation
// 	  callbacks: {
// 		beforeOpen: function() {
// 		   this.st.mainClass = this.st.el.attr('data-effect');
// 		}
// 	  },
// 	  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
// 	});

// }


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

// funcion para navegacion en mobile de las empresas
// function prevEmp(pos){
// 	if(pos == 1){
// 		$('#empresa2-poup').css('display','none');
// 		$('#empresa3-poup').css('display','none');
// 		$('#empresa4-poup').css('display','none');
// 		$('#empresa5-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa1-poup').css('display','block');


// 	}else if (pos == 2){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa3-poup').css('display','none');
// 		$('#empresa4-poup').css('display','none');
// 		$('#empresa5-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa2-poup').css('display','block');

// 	}else if (pos == 3){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa2-poup').css('display','none');
// 		$('#empresa4-poup').css('display','none');
// 		$('#empresa5-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa3-poup').css('display','block');

// 	}else if (pos == 4){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa2-poup').css('display','none');
// 		$('#empresa3-poup').css('display','none');
// 		$('#empresa5-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa4-poup').css('display','block');

// 	}else if (pos == 5){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa2-poup').css('display','none');
// 		$('#empresa3-poup').css('display','none');
// 		$('#empresa4-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa5-poup').css('display','block');

// 	}
// }
// function nextEmp(pos){
// 	if(pos == 2){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa3-poup').css('display','none');
// 		$('#empresa4-poup').css('display','none');
// 		$('#empresa5-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa2-poup').css('display','block');

// 	}else if (pos == 3){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa2-poup').css('display','none');
// 		$('#empresa4-poup').css('display','none');
// 		$('#empresa5-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa3-poup').css('display','block');

// 	}else if (pos == 4){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa2-poup').css('display','none');
// 		$('#empresa3-poup').css('display','none');
// 		$('#empresa5-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa4-poup').css('display','block');

// 	}else if (pos == 5){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa2-poup').css('display','none');
// 		$('#empresa3-poup').css('display','none');
// 		$('#empresa4-poup').css('display','none');
// 		$('#empresa6-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa5-poup').css('display','block');

// 	}else if (pos == 6){
// 		$('#empresa1-poup').css('display','none');
// 		$('#empresa2-poup').css('display','none');
// 		$('#empresa3-poup').css('display','none');
// 		$('#empresa4-poup').css('display','none');
// 		$('#empresa5-poup').css('display','none');
// 		$('.content-standar-empresas').css('display','none');

// 		$('#empresa6-poup').css('display','block');

// 	}
// }

// funcion para navegacion en mobile de las empresas Sun 
// function prevEmpSun(pos){
// 	if(pos == 1){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-innevis').addClass('selected');

// 		$('#empresa101').fadeIn();

// 	}else if (pos == 2){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-legal').addClass('selected');

// 		$('#empresa102').fadeIn();

// 	}else if (pos == 3){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-tbh').addClass('selected');

// 		$('#empresa103').fadeIn();

// 	}else if (pos == 4){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-gedisa').addClass('selected');

// 		$('#empresa104').fadeIn();

// 	}else if (pos == 5){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-ead').addClass('selected');

// 		$('#empresa105').fadeIn();

// 	}else if (pos == 6){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-transformacion').addClass('selected');

// 		$('#empresa106').fadeIn();

// 	}else if (pos == 7){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-kruger').addClass('selected');

// 		$('#empresa107').fadeIn();

// 	}
// }
// function nextEmpSun(pos){
// 	if(pos == 2){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-legal').addClass('selected');

// 		$('#empresa102').fadeIn();
// 	}else if (pos == 3){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-tbh').addClass('selected');

// 		$('#empresa103').fadeIn();
// 	}else if (pos == 4){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-gedisa').addClass('selected');

// 		$('#empresa104').fadeIn();
// 	}else if (pos == 5){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-ead').addClass('selected');

// 		$('#empresa105').fadeIn();
// 	}else if (pos == 6){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-transformacion').addClass('selected');

// 		$('#empresa106').fadeIn();
// 	}else if (pos == 7){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-kruger').addClass('selected');

// 		$('#empresa107').fadeIn();
// 	}else if (pos == 8){
// 		$('.content-text-empresa').each(function(){
// 			$(this).fadeOut();
// 		});

// 		$('.block-logo-empresa').each(function(){
// 			$(this).removeClass('selected');
// 		});

// 		$('.logo-itn').addClass('selected');

// 		$('#empresa108').fadeIn();
// 	}
// }

// Funcion para cambiar el zindex del video cuando cargue
function changeZindex(){
	$('#sliderHome .sp-slides.sp-motio').css('zIndex','2');
}

function isReadyVideo(){
	
	var video = document.getElementById('video_background');

	if (video != null) {
		setTimeout(function(){
			if(video.readyState === 4){
				changeZindex();
			}else{
				isReadyVideo();	
			}
		},1000);
	}	
}