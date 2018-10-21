//$(document).ready(function() {
//	var $infographic = $('#infographic');
//	var $infographic_indent = $('.infographic-indent');
//	var $listen = $('#listen');
//	var $plan = $('#plan');
//	var $create = $('#create');
//	var $build = $('#build');
//	var $promote = $('#promote');
//	var $categories = $('#listen, #plan, #create, #build, #promote');
//	var $creativity_title = $('#creativity-title');
//
//	function bootstrap() {
//		if (width < 1220) {
//			$infographic.css({'width': '100%', 'height' : 'auto', 'marginTop' : '6%', 'paddingLeft' : '0'});
//			$('#listen, .infographic-indent').css('width', 'auto');
//			$categories.addClass('col-xs-3 col-sm-3 col-md-3');
//			$categories.css('margin', '0 50px 20px 0');
//			$creativity_title.css('marginTop', '4%');
//		} else {
//			$infographic.css({'width': '1100px', 'height' : '500px', 'marginTop' : '2%', 'paddingLeft' : '15px'});
//			$infographic_indent.css('width', '150px');
//			$categories.removeClass('col-xs-3 col-sm-3 col-md-3');
//			$listen.css('margin', '0');
//			$plan.css('margin', '0 0 0 45px');
//			$create.css('margin', '0 0 0 75px');
//			$build.css('margin', '0 0 0 80px');
//			$promote.css('margin', '0 0 0 75px');
//			$creativity_title.css('marginTop', '2%');
//		}
//	}
//
//	$(window).resize(function() {
//		width = $(window).width();
//
//		bootstrap();
//	});
//
//	bootstrap();
//});