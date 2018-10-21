//$(document).ready(function() {

//	$(window).bind("load", function() {
//		$(".logos").each(function() {
//			var imgPos = $(this).find('.logo-original');
//			var imgOffset = imgPos.position(); 
//			var brand = $(imgPos).data('brand');
//			var top = imgOffset.top;
//			var left = imgOffset.left;
//			var height = $(imgPos).height();
//			var width = $(imgPos).width();
//			$(this).append('<img src="img/logos/color/'+brand+'_logo.png" class="color-logo logo-'+brand+' '+brand+'_color">');
//			$('.'+brand+'_color').css({"width":width,"height":height,"position":"absolute","top":top,"left":left,"z-index":"0"});
//		});
//	});
//	$(window).bind("resize", function() {
//		$(".logos").each(function() {
//			var imgPos = $(this).find('.logo-original');
//			var imgOffset = imgPos.position(); 
//			var brand = $(imgPos).data('brand');
//			var top = imgOffset.top;
//			var left = imgOffset.left;
//			var height = $(imgPos).height();
//			var width = $(imgPos).width();
//			$('.'+brand+'_color').css({"width":width,"height":height,"position":"absolute","top":top,"left":left,"z-index":"0"});
//		});
//	});
	
//});