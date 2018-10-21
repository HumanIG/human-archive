// Global Variable Definitions
var width = $(window).width();
var height = $(window).height();

function copyHeight(){
	var $expereal_copy = $('#expereal-column-copy');
	var screenshot_height = $('.expereal-screenshots img').height();
	$expereal_copy.css('height', screenshot_height);
}

$(window).load(function() {
	copyHeight();
});

$(document).ready(function() {
	window.mobilecheck = function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check; 
	}

	if(window.mobilecheck() === false) {
		$("#expereal-phone-bg").imagesLoaded(function() {
			placeBackground();
			placeDial();

			$('#bg-container, #sprite').animate({
				opacity: 1
			}, 1000);
		});
		
		var $expereal_bg_dots = $('#expereal-bg-dots');
		var $expereal_bg_fade = $('#expereal-bg-fade');
		var $header = $('#header');
		var $main_container = $('#main-container');

		function fadeOutDots() {
			$expereal_bg_dots.fadeOut(500);
			$expereal_bg_fade.fadeOut(500);
		};

		function fadeInDots() {
			$expereal_bg_dots.fadeIn(500);
			$expereal_bg_fade.fadeIn(500);
		};

		window.onresize = function() {
			width = $(window).width();
			height = $(window).height();
			placeBackground();
			placeDial();
			copyHeight();
		};

		$(window).scroll(function() {
			var top_scroll = $(window).scrollTop();
			var $spritesheet = $('#spritesheet'); 
			var st = $(window).scrollTop();
			var opac = (1 - (st-200)/300);

			// Moves expereal iphone spritesheet based on scroll position
			if($(window).scrollTop() <= 40) {
				$spritesheet.css('margin-left', '0%');
			} else if($(window).scrollTop() >= 40 && $(window).scrollTop() < 60) {
				$spritesheet.css('margin-left', '-100%');
			} else if($(window).scrollTop() >= 60 && $(window).scrollTop() < 80) {
				$spritesheet.css('margin-left', '-200%');
			} else if($(window).scrollTop() >= 80 && $(window).scrollTop() < 100) {
				$spritesheet.css('margin-left', '-300%');
			} else if($(window).scrollTop() >= 100 && $(window).scrollTop() < 120) {
				$spritesheet.css('margin-left', '-400%');
			} else if($(window).scrollTop() >= 120 && $(window).scrollTop() < 140) {
				$spritesheet.css('margin-left', '-500%');
			} else if($(window).scrollTop() >= 140 && $(window).scrollTop() < 160) {
				$spritesheet.css('margin-left', '-600%');
			} else if($(window).scrollTop() >= 160 && $(window).scrollTop() < 180) {
				$spritesheet.css('margin-left', '-700%');
			} else if($(window).scrollTop() >= 180 && $(window).scrollTop() < 200) {
				$spritesheet.css('margin-left', '-800%');
			} else if($(window).scrollTop() >= 200) {
				$spritesheet.css('margin-left', '-900%');
			} 

			// Parallax effect on dots in background
			$expereal_bg_dots.css({
				top: (Math.abs(top_scroll) * 0.7) + 'px'
			});
			if(top_scroll > 200) {
				$expereal_bg_dots.css({
					"opacity": opac
				});
				$expereal_bg_fade.css({
					"opacity": opac
				});
			}
			if(top_scroll < 200) {
				$expereal_bg_dots.css({
					"opacity": 1
				});
				$expereal_bg_fade.css({
					"opacity": 1
				});
			}
		});
	}
	copyHeight();
});


// Places the iphone background where it needs to be
function placeBackground() {
	var $iphone_img = $('#iphone-image');
	var $exp_bg = $('#bg-container');

	// Where the iphone's starting position is
	var initial_left = $iphone_img.offset().left
	var initial_top = $iphone_img.offset().top

	// These values were found through testing on the vector iphone image.
	var left_ratio = 0.10532058823529396;
	var top_ratio = 0.15410630841121492;
	var width_ratio = 0.7851470588235295;
	var height_ratio = 0.7048598130841122;

	// Height and width of iphone image
	var obj_height = $iphone_img.height();
	var obj_width = $iphone_img.width();

	// Where we need to move the background to fit in iphone
	var target_left = (initial_left + (left_ratio * obj_width));
	var target_top = (initial_top + (top_ratio * obj_height));
	var target_width = obj_width * width_ratio;
	var target_height = obj_height * height_ratio;

	// Changes to the background position accordingly.
	$exp_bg.css({
		left: target_left + 'px',
		top: target_top + 'px',
		width: target_width + 'px',
		height: target_height + 'px',
		display: 'block'
	});
}

// Places the spritesheet of the expereal blob where it needs to be
function placeDial() {
	var $iphone_img = $('#iphone-image');
	var $sprite = $('#sprite');

	// Where the iphone's starting position is
	var initial_left = $iphone_img.offset().left
	var initial_top = $iphone_img.offset().top

	// These values were found through testing on the vector iphone image.
	var left_ratio = 0.13452058823529396;
	var width_ratio = 0.7301470588235295;
	var top_ratio = 0.28598130841121494;
	var height_ratio = 0.37579439252336447;

	// Height and width of iphone image
	var height = $iphone_img.height();
	var width = $iphone_img.width();

	// Where we need to move the spritesheet to fit in iphone
	var target_left = (initial_left + (left_ratio * width));
	var target_top = (initial_top + (top_ratio * height));
	var target_width = width * width_ratio;
	var target_height = height * height_ratio;

	// Changes to the spritesheet position accordingly.
	$sprite.css({
		left: target_left + 'px',
		top: target_top + 'px',
		width: target_width + 'px',
		height: target_height + 'px',
		display: "block",
	});
}
