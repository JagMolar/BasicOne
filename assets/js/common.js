jQuery(function($) {

	// Links Highlight Scrolling

	var offsetVal = 10;
	$('body').scrollspy({ target: '#mainNav', offset: offsetVal });

	window.onscroll=function(){
		if(offsetVal == 10)
		{
			offsetVal = 200
			var data = $('body').data('bs.scrollspy');
			data.options.offset = offsetVal;
			$('body').data('bs.scrollspy', data);
			$('body').scrollspy('refresh');
		}
	};

	// Links Scrolling

	$('#mainNav a').click(function () {
		
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
	$('#scroll-zone a').click(function () {
		
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
	$('.navbar-brand a').click(function () {
		
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
	
	

	//Set encode/decode cookies
	$.cookie.raw = true;

	

});

function destroyPreload(){	
	$('#preload-section').fadeOut('fast');
}


//Cerrar collapse navbar onClick
$('.nav a').on('click', function(){ 
	if($('.navbar-toggle').css('display') !='none'){
		$(".navbar-toggle").trigger( "click" );
	}
});