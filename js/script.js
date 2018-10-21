// Global Variable Definitions
var width = $(window).width();
var height = $(window).height();
var intervalID;
var lastKeyDown = new Date();
var time_limit = 1800;
var nav_interaction = false;
var hasCollided = false;

// Shift full service interactive copy accordingly
function humanLogo(width) {
	if (width > 1280) {
		$('.line1').css({
			paddingLeft: '210px'
		});
	} else {
		$('.line1').css({
			paddingLeft: '162px'
		});
	}
}

setTimeout(function() {
	console.log('Background: ' + $('#panel4').css('background'));
	console.log('Background Position: ' + $('#panel4').css('background-position'));
}, 5000);

window.onresize = function() {
	width = $(window).width();
	height = $(window).height();
};

// Document ready function (window onload)
$(document).ready(function() {
	var $wrapper = $('#wrapper');
	var $horizontal_bar = $('#horizontal-bar');
	var $vertical_bar = $('#vertical-bar');
	var $current_slide = $('#current-slide');
	var $nav_bar = $('#nav-bar');
	var $header = $('#header');
	var $nav_menu = $('#nav-menu');
	var $top_patty = $('#top-patty');
	var $meat = $('#meat');
	var $bottom_patty = $('#bottom-patty');
	var $nav_arrow = $('.arrow-red').add('#arrow-black');
	var $vertical_panel1 = $('#vertical-panel1');
	// var $bg_vid = $('#bg-vid');
	// var $bg_image = $('#bg-image');
	var lastClick = new Date();
	var listenersOn = false;
	var mobileJSAdded = false;

  // Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';

	// Changes rem font value
	if(isFirefox === true) {
		$('.logo-copy').css({
			marginTop: '3.36rem'
		});
	}

	window.mobilecheck = function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check; 
	}

	// stop down arrow pulse on hover
	// $nav_arrow.on('mouseenter', function(){
	// 	stopPulse();
	// });

	// Checks to see if device being used is mobile/tablet or desktop
	function detectCorrectEvents() {
		if(window.mobilecheck() === false && listenersOn === false) {
			listenersOn = true;
			mobileJSAdded = false;
			var $wrapper = $('#wrapper');
			var $horizontal_bar = $('#horizontal-bar');
			var $vertical_bar = $('#vertical-bar');
			var $current_slide = $('#current-slide');
			var $nav_bar = $('#nav-bar');
			var $header = $('#header');
			var $nav_menu = $('#nav-menu');
			var $top_patty = $('#top-patty');
			var $meat = $('#meat');
			var $bottom_patty = $('#bottom-patty');
			var $nav_arrow = $('.arrow-red').add('#arrow-black');
			var $vertical_panel1 = $('#vertical-panel1');
			// var $bg_vid = $('#bg-vid');
			// var $bg_image = $('#bg-image');
			var lastClick = new Date();

			// Down arrow on landing page
			navHoverRed();
			navArrowExit();
			setArrowRed();

			// Function to animate initial copy
			initialCopyTransition();

			// Function to start the horizontal carousel
			startHorizCarousel();

			// Fade in first panel on initial load
			setTimeout(function() {
				$('#panel1').animate({
					opacity: '1'
				}, 800);
				$('#panel1-bg').animate({
					opacity: '1'
				}, 800);
				// if($(window).width() > 766) {
				// 	$bg_vid.animate({
				// 		opacity: '1'
				// 	}, 800);
				// } else {
				// 	$bg_image.animate({
				// 		opacity: '1'
				// 	}, 800);
				// }
			}, 200);

			// Add logo breakline if large screen
			// checkLogoBreak();

			$(window).resize(function() {
				checkLogoBreak();
				// checkVideoPlay();
			});

			// Set up hover effect with delay on horizontal slider
			$horizontal_bar.hoverIntent(function() {
				$horizontal_bar.animate({
					height: '20px'
				}, 300);
				stopHorizCarousel();
			}, function() {
				$horizontal_bar.animate({
					height: '10px'
				}, 300);
			});

			// Set up hover effect with delay on vertical slider
			$vertical_bar.hoverIntent(function() {
				$vertical_bar.animate({
					width: '20px'
				}, 300);
				stopHorizCarousel();
			}, function() {
				$vertical_bar.animate({
					width: '10px'
				}, 300);
			});

			// Swipe gesture navigation for index page
			$('body').swipe({
				swipe: function(event, direction, distance, duration, fingerCount) {
					var first_child = $('#wrapper').children(':first').attr('id');
					if(new Date() - lastKeyDown > time_limit) {
						stopHorizCarousel();
						// Note that directions are opposite due sliding finger left shifts to right panel
						if(direction === 'left' && first_child === 'vertical-panel1') {
							lastKeyDown = new Date();
							rightShift();
						} else if(direction === 'right' && first_child === 'vertical-panel1') {
							lastKeyDown = new Date();
							leftShift();
						} else if(direction === 'up') {
							lastKeyDown = new Date();
							nav_interaction = true;
							stopPulseInterval();
							downShift();
						} else if(direction === 'down') {
							lastKeyDown = new Date();
							nav_interaction = true;
							stopPulseInterval();
							upShift();
						}
					}
				},
				threshold: 75
			});

			// Scroll navigation for index page
			$('html, body').on('mousewheel', { mousewheel: { delay: 500 } }, function(e) {
				var first_child = $('#wrapper').children(':first').attr('id');
				if(new Date() - lastKeyDown > time_limit) {
					stopHorizCarousel();
					if(e.deltaX > 10 && first_child === 'vertical-panel1') {
						lastKeyDown = new Date();
						rightShift()
					} else if(e.deltaX < -10 && first_child === 'vertical-panel1') {
						lastKeyDown = new Date();
						leftShift();
					} else if(e.deltaY > 10) {
						lastKeyDown = new Date();
						nav_interaction = true;
						stopPulseInterval();
						upShift();
					} else if(e.deltaY < -10) {
						lastKeyDown = new Date();
						nav_interaction = true;
						stopPulseInterval();
						downShift();
					}
				}
				e.preventDefault();
			});

			// Arrow key navigation for index page
			$(document).on('keydown', function(e) {
				var first_child = $('#wrapper').children(':first').attr('id');

				// Check if any other animations are occurring
				if(new Date() - lastKeyDown > time_limit) {
					stopHorizCarousel();
					// Left arrow
					if(e.keyCode === 37 && first_child === 'vertical-panel1') {
						lastKeyDown = new Date();
						leftShift();
					} else if (e.keyCode === 39 && first_child === 'vertical-panel1') {
						lastKeyDown = new Date();
						rightShift();
					} else if(e.keyCode === 38) {
						lastKeyDown = new Date();
						nav_interaction = true;
						stopPulseInterval();
						upShift();
					} else if(e.keyCode === 40) {
						lastKeyDown = new Date();
						nav_interaction = true;
						stopPulseInterval();
						downShift();
					}
				}
			});
			
			// Sets up click event for nav arrow
			$nav_arrow.on('click', function() {
				if(new Date() - lastKeyDown > time_limit) {
					lastKeyDown = new Date();
					nav_interaction = true;
					stopPulseInterval();
					downShift();
				}
			});

			humanLogo(width);
			

			$(window).resize(function() {
				humanLogo(width);
			});
		} else if(window.mobilecheck() === true && mobileJSAdded === false) {
			listenersOn = false;
			mobileJSAdded = true;
			$('.slide').css('height', ($(window).height() * 0.85) + 'px');
			$('#panel1').css('height', $(window).height() + 'px');
			$('#panel2').css('height', $(window).height() * 0.95 + 'px');
			$('#vertical-panel2').after('<hr class="display-break">');
			$('.line1').html('we are').css('margin-left', '0');

			$(window).resize(function() {
				$('.slide').css('height', ($(window).height() * 0.85) + 'px');
				$('#panel1').css('height', $(window).height() + 'px');
				$('.line1').html('we are').css('margin-left', '0');
			});
		}
	}

	$(window).resize(function() {
		if ($wrapper.children(':first').attr('id') == 'vertical-panel3' && hasCollided === false) {
			logoFarm('resize');
		}
	});

	// Serves correct javascript for whether or not on mobile/tablet devices
	detectCorrectEvents();
});
// End of document ready function

// Checks if linebreak is necessary in logos display
function checkLogoBreak() {
	if($(window).width() >= 1200) {
		$('#only-if-large').show();
	} else {
		$('#only-if-large').hide();
	}
}

// Check to see if video should play or replaced with image
// function checkVideoPlay() {
// 	if($(window).width() <= 766) {
// 		document.getElementById('bg-vid').pause();
// 		$('#bg-vid').css('opacity', '0');
// 		$('#bg-image').css('opacity', '1');
// 	} else {
// 		document.getElementById('bg-vid').play();
// 		$('#bg-vid').css('opacity', '1');
// 		$('#bg-image').css('opacity', '0');
// 	}
// }

// Start horizontal carousel function
function startHorizCarousel() {
	horizontal_carousel = setInterval(intervalCarousel, 5000);
}

function intervalCarousel() {
	if(new Date - lastKeyDown > time_limit) {
		lastKeyDown = new Date();
		var next_id;
		var next_bg;
		var current_bg;
		var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
			return $(this).css('opacity') > 0;
		}).attr('id');
		$current_slide = $('#current-slide');

		if(current_panel_id === 'panel1') {
			current_bg = 'panel1-bg';
			next_bg = 'panel2-bg';
			next_id = 'panel2';
		} else if (current_panel_id === 'panel2') {
			current_bg = 'panel2-bg';
			next_bg = 'panel3-bg';
			next_id = 'panel3';
		} else if (current_panel_id === 'panel3') {
			current_bg = 'panel3-bg';
			next_bg = 'panel4-bg';
			next_id = 'panel4';
		} else {
			current_bg = 'panel4-bg';
			next_bg = 'panel1-bg';
			next_id = 'panel1';
		}
		triggerHorizontalShift(current_panel_id, current_bg, next_id, next_bg);
		slideTransition();
	}
}

// Stop horizontal carousel function
function stopHorizCarousel() {
	clearInterval(horizontal_carousel);
}

// Controls the copy on horizontal panels when going left to right
function copyTransition(panel_to) {
	var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
		return $(this).css('opacity') > 0;
	}).attr('id');

	setTimeout(function() {
		$('#' + current_panel_id + '-copy').css({
			opacity: '0',
			marginLeft: '10%'
		});
	}, 700);
	setTimeout(function() {
		$('#' + panel_to + '-copy').animate({
			opacity: '1',
			marginLeft: '0%'
		}, 600);
	}, 300);
}

function copyTransition2(panel_to) {
	var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
		return $(this).css('opacity') > 0;
	}).attr('id');

	setTimeout(function() {
		$('#' + current_panel_id + '-copy').css({
			opacity: '0',
			marginLeft: '10%'
		});
	}, 700);
	$('#' + panel_to + '-copy').css('margin-left', '-10%')
	setTimeout(function() {
		$('#' + panel_to + '-copy').animate({
			opacity: '1',
			marginLeft: '0%'
		}, 600);
	}, 300);
}

// Controls the copy when going right to left 
function reverseCopyTransition() {
	var next_id;
	var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
		return $(this).css('opacity') > 0;
	}).attr('id');
	if(current_panel_id === 'panel1') {
		next_id = 'panel3';
	} else if (current_panel_id === 'panel2') {
		next_id = 'panel1';
	} else {
		next_id = 'panel2';
	}

	setTimeout(function() {
		$('#' + current_panel_id + '-copy').css({
			opacity: '0',
			marginLeft: '10%'
		});
	}, 700);
	setTimeout(function() {
		$('#' + next_id + '-copy').animate({
			opacity: '1',
			marginLeft: '0%'
		}, 600);
	}, 300);
}

// For the initial copy loading animation
function initialCopyTransition() {
	$('#panel1-copy').animate({
		opacity: '1',
		marginLeft: '0%'
	}, 600);
	$('#panel2-copy').css({
		marginLeft: '10%'
	});
	$('#panel3-copy').css({
		marginLeft: '10%'
	});
	$('#panel4-copy').css({
		marginLeft: '10%'
	});
}

// For the vertical panel transitions (up and down)
function wrapperTransition() {
	var $wrapper = $('#wrapper');
	$wrapper.animate({
		marginTop: -height
	}, 800, function() {
		$wrapper.append($wrapper.children(':first'));
		$wrapper.css({
			marginTop: 0
		});
		if($wrapper.children(':first').attr('id') !== 'vertical-panel1') {
			stopHorizCarousel();
		} else {
			startHorizCarousel();
		}
	});
}


// Slide transition functions
// For vertical-panel1 (left and right shifts)
function triggerHorizontalShift(current_panel_id, current_bg, next_id, next_bg) {
	$('#' + current_panel_id + ', #' + current_bg).animate({
		marginLeft: '-10%',
		opacity: '0'
	}, 800, function() {
		$(this).css({
			marginLeft: '0'
		});
	});
	setTimeout(function() {
		$('#' + next_id + ', #' + next_bg).animate({
			opacity: '1'
		}, 800);
	}, 300);
	copyTransition(next_id);
}

// For Vertical Shifts (up and down shifts)
function triggerVerticalShift() {

}
 
// Left transition
function leftShift() {
	var next_id;
	var next_bg;
	var current_bg;
	var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
		return $(this).css('opacity') > 0;
	}).attr('id');
	$current_slide = $('#current-slide');

	if(current_panel_id === 'panel1') {
		current_bg = 'panel1-bg';
		next_bg = 'panel4-bg';
		next_id = 'panel4';
	} else if (current_panel_id === 'panel2') {
		current_bg = 'panel2-bg';
		next_bg = 'panel1-bg';
		next_id = 'panel1';
	} else if (current_panel_id === 'panel3') {
		current_bg = 'panel3-bg';
		next_bg = 'panel2-bg';
		next_id = 'panel2';
	} else {
		current_bg = 'panel4-bg';
		next_bg = 'panel3-bg';
		next_id = 'panel3';
	}

	$('#' + current_panel_id + ', #' + current_bg).animate({
		marginLeft: '10%',
		opacity: '0'
	}, 800, function() {
		$(this).css({
			marginLeft: '0'
		});
	});
	setTimeout(function() {
		$('#' + next_id + ', #' + next_bg).animate({
			opacity: '1'
		}, 800);
	}, 300);
	copyTransition2(next_id);
	reverseSlideTransition();
}

// Right transition
function rightShift() {
	var next_id;
	var next_bg;
	var current_bg;
	var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
		return $(this).css('opacity') > 0;
	}).attr('id');
	$current_slide = $('#current-slide');

	if(current_panel_id === 'panel1') {
		current_bg = 'panel1-bg';
		next_bg = 'panel2-bg';
		next_id = 'panel2';
	} else if (current_panel_id === 'panel2') {
		current_bg = 'panel2-bg';
		next_bg = 'panel3-bg';
		next_id = 'panel3';
	} else if (current_panel_id === 'panel3') {
		current_bg = 'panel3-bg';
		next_bg = 'panel4-bg';
		next_id = 'panel4';
	} else {
		current_bg = 'panel4-bg';
		next_bg = 'panel1-bg';
		next_id = 'panel1';
	}

	$('#' + current_panel_id + ', #' + current_bg).animate({
		marginLeft: '-10%',
		opacity: '0'
	}, 800, function() {
		$(this).css({
			marginLeft: '0'
		});
	});
	setTimeout(function() {
		$('#' + next_id + ', #' + next_bg).animate({
			opacity: '1'
		}, 800);
	}, 300);
	copyTransition(next_id);
	slideTransition();
}

// Up transition
function upShift() {
	var lastClick = new Date();
	var $wrapper = $('#wrapper');
	var $horizontal_bar = $('#horizontal-bar');
	var $vertical_bar = $('#vertical-bar');
	var $vertical_panel1 = $('#vertical-panel1');
	var $panel1 = $('#panel1');
	var $panel1_bg = $('#panel1-bg');
	var $panel2 = $('#panel2');
	var $panel2_bg = $('#panel2-bg');
	var $panel3 = $('#panel3');
	var $panel3_bg = $('#panel3-bg');
	var $panel4 = $('#panel4');
	var $panel4_bg = $('#panel4-bg');
	var id = $wrapper.children(':first').attr('id');

	if(id === 'vertical-panel1') {
		logoFarm('up');
		var panel_id = $('#vertical-panel1').find('.slide').filter(function() {
			return $(this).css('opacity') > 0;
		}).attr('id');
		$horizontal_bar.fadeOut(800);
		$vertical_bar.fadeIn(800);
		$('#' + panel_id + '-bg').animate({
			top: '100%'
		}, 800);
		setTimeout(function() {
			$('#' + panel_id + '-copy').css({
				marginLeft: '10%',
				opacity: 0
			});
		}, 800);
		stopHorizCarousel();
	} else if(id === 'vertical-panel2') {
		var panel_id = $('#vertical-panel1').find('.slide').filter(function() {
			return $(this).css('opacity') > 0;
		}).attr('id');

		$('#' + panel_id + '-bg').css({
			top: '-100%'
		});
		$('#' + panel_id + '-bg').animate({
			top: '0%'
		}, 800);
		setTimeout(function() {
			$('#' + panel_id + '-copy').animate({
				opacity: 1,
				marginLeft: '0%'
			}, 600);
		}, 400);
		$horizontal_bar.fadeIn(800);
		$vertical_bar.fadeOut(800);
		startHorizCarousel();
	} else if(id === 'vertical-panel3') {
		setTimeout(function() {
			hasCollided = false;
			$('.logo-farm').css('display', 'block');
			$('.logo-list').css('display', 'none');
		}, 800);
	}
	$wrapper.prepend($wrapper.children(':last'));
	$wrapper.css({
		marginTop: -height
	});
	$wrapper.animate({
		marginTop: 0
	}, 800);
	reverseVertSlideTransition();
}

// Down transition
function downShift() {
	var $wrapper = $('#wrapper');
	var $horizontal_bar = $('#horizontal-bar');
	var $vertical_bar = $('#vertical-bar');
	var $vertical_panel1 = $('#vertical-panel1');
	var $panel1 = $('#panel1');
	var $panel1_bg = $('#panel1-bg');
	var $panel2 = $('#panel2');
	var $panel2_bg = $('#panel2-bg');
	var $panel3 = $('#panel3');
	var $panel3_bg = $('#panel3-bg');
	var $panel4 = $('#panel4');
	var $panel4_bg = $('#panel4-bg');
	var id = $wrapper.children(':first').attr('id');

	if(id === 'vertical-panel1') {
		var panel_id = $('#vertical-panel1').find('.slide').filter(function() {
			return $(this).css('opacity') > 0;
		}).attr('id');
		$horizontal_bar.fadeOut(800);
		$vertical_bar.fadeIn(800);

		$('#' + panel_id + '-bg').animate({
			top: '-100%'
		}, 800);
		setTimeout(function() {
			$('#' + panel_id + '-copy').css({
				marginLeft: '10%',
				opacity: 0
			});
		}, 800);
		stopHorizCarousel();
	} else if(id === 'vertical-panel2') {
		logoFarm('down');
	} else if(id === 'vertical-panel3') {
		setTimeout(function() {
			hasCollided = false;
			$('.logo-farm').css('display', 'block');
			$('.logo-list').css('display', 'none');
		}, 800);
		var panel_id = $('#vertical-panel1').find('.slide').filter(function() {
			return $(this).css('opacity') > 0;
		}).attr('id');
			$('#' + panel_id + '-bg').css({
				top: '100%'
			});
			$('#' + panel_id + '-bg').animate({
				top: '0%'
			}, 800);
			setTimeout(function() {
				$('#' + panel_id + '-copy').animate({
					opacity: 1,
					marginLeft: '0%'
				}, 600);
			}, 400);
		$horizontal_bar.fadeIn(800);
		$vertical_bar.fadeOut(800);
	}
	vertSlideTransition();
	wrapperTransition();
}

function logoFarm(when) {
	if (when == 'resize') {
		var arrowTop = $('#arrow-black').offset().top;
	} else if (when == 'up') {
		var arrowTop = $('#arrow-black, .arrow-red').offset().top + $(window).height() * 2;
	} else {
		var arrowTop = $('#arrow-black').offset().top + $(window).height();
	}
	var logoHeight = $($('.logos')[0]).height();

	for (var i = 11; i >= 0; i--) {
		// console.log('arrow offset: ' + arrowTop);
		// console.log('logo #:'+i+' offset + height: ' + ($($('.logos')[i]).offset().top + logoHeight));
		if (arrowTop <= ($($('.logos')[i]).offset().top + logoHeight)) {
			hideFarm();
			return;
		}
	}
	showFarm();

	// if(isColliding === true && collided === false) {
	// 	collided = true;
	// 	console.log('trigger');
	// 	// show logo list
	// 	$('.logo-farm').css('display', 'none');
	// 	$('.logo-list').css('display', 'inline');
	// } else if(isColliding === false && collided === true) {
	// 	collided = false;
	// 	// show logo farm
	// 	$('.logo-farm').css('display', 'block');
	// 	$('.logo-list').css('display', 'none');
	// }
}

function hideFarm() {
	if(hasCollided === false) {
		$('.logo-farm').css('display', 'none');
		$('.logo-list').css('display', 'inline');
	}
	hasCollided =  true;
}

function showFarm() {
	if(hasCollided === true) {
		$('.logo-farm').css('display', 'block');
		$('.logo-list').css('display', 'none');
	}
	hasCollided = false;
}



// =================================================== //
// ******************** version A ******************** //
// =================================================== //

// function startPulse() {
// 	intervalID = setInterval(navArrowPulse, 1100);
// }

// function stopPulseInterval() {
// 	clearInterval(intervalID);
// }

// function navArrowPulse() {
// 	var $arrow_img = $('#arrow-img');
	
// 	$arrow_img.attr('src', 'img/red-circle.png');
// 	$arrow_img.fadeIn(200);
// 	$arrow_img.fadeOut(300);
// 	$arrow_img.animate({opacity: 1}, 300, function() {
// 		$arrow_img.attr('src', 'img/red-circle-lg.png');
// 	});
// 	$arrow_img.fadeOut(300);
// }

// function setArrowRed() {
// 	var $nav_arrow = $('#nav-arrow1').add('#arrow-black');
// 	var $arrow_img = $('#arrow-img');
	
//  setTimeout(function(){
//  	$arrow_img.delay(300).fadeOut(1050);
// 		$nav_arrow.css('background', 'url(img/red-circle.png)');
//  		startPulse();
// 	}, 16000);
// }


// =================================================== //
// ******************** version B ******************** //
// =================================================== //

// function stopPulse() {
// 	var $arrow_img = $('#arrow-img');
// 	var $nav_arrow = $('#nav-arrow1').add('#arrow-black');
// 	// stopPulseInterval();
// 	$nav_arrow.delay(400).css('background', 'url(img/arrow.png)');
// }

// function setArrowRed() {
// 	var $nav_arrow = $('#nav-arrow1').add('#arrow-black');

// 	setTimeout(function(){
// 		$nav_arrow.delay(400).css('background', 'url(img/red-circle.png)');
// 	}, 16000);
// }

// =================================================== //
// ******************** version C ******************** //
// =================================================== //

// function setArrowRed() {
// 	var $arrow = $('.arrow-red');
// 	setTimeout(function() {
// 		$arrow.addClass('hovered');
// 		$arrow.delay(1000).queue(function(){
// 			$(this).removeClass('hovered').clearQueue();
// 			return startPulse();
// 		});
// 	}, 1600);	
// }

// function navArrowPulse() {
// 	var $arrow = $('.arrow-red');
// 	$arrow.delay(200).queue(function(){
// 		$(this).addClass('hovered').clearQueue();
// 		$arrow.delay(1400).queue(function(){
// 			$(this).removeClass('hovered').clearQueue();
// 		});	
// 	});	
// }

// function startPulse() {
// 	setTimeout(function(){
// 		navArrowPulse();
// 		return intervalID = setInterval(navArrowPulse, 2200);
// 	}, 600);
// }

// function stopPulseInterval() {
// 	var $arrow = $('.arrow-red');
// 	clearInterval(intervalID);
// 	$arrow.stop().removeClass('hovered');
// }

// function navArrowHover() {
// 	var $arrow = $('.arrow-red');

// 	$arrow.on('mouseenter', function() {
// 		$arrow.stop().addClass('hovered');
// 		clearInterval(intervalID);
// 	});
// }

// function navArrowExit() {
// 	var $arrow = $('.arrow-red');

// 	$arrow.on('mouseout', function() {
// 		clearInterval(intervalID);
// 		$arrow.stop().removeClass('hovered');
// 	});
// }

// =================================================== //
// ******************** version D ******************** //
// =================================================== //

function setArrowRed() {
	var $arrow = $('.arrow-red');
	var $arrow_black = $('#arrow-black');

	setTimeout(function(){
		if (nav_interaction == false) {
			$arrow_black.fadeOut(500);
			$arrow.fadeIn();
		}
	}, 16000);

	setTimeout(function() {
		if (nav_interaction == false) {
			$arrow.addClass('hovered');
			$arrow.queue(function(){
				$(this).removeClass('hovered').clearQueue();
			});
			return startPulse();
		}
	}, 17000);
}

function startPulse() {
	navArrowPulse_1();
	return intervalID = setInterval(navArrowPulse, 2300);
}

function navArrowPulse_1() {
	var $arrow = $('.arrow-red');

	$arrow.delay(400).queue(function(){
		$(this).addClass('hovered').clearQueue();
		$arrow.delay(950).queue(function(){
			$(this).removeClass('hovered').clearQueue();
		});	
	});	
}

function navArrowPulse() {
	var $arrow = $('.arrow-red');

	$arrow.delay(400).queue(function(){
		$(this).addClass('hovered').clearQueue();
		$arrow.delay(950).queue(function(){
			$(this).removeClass('hovered').clearQueue();
		});	
	});	
}

function stopPulseInterval() {
	var $arrow = $('.arrow-red');
	var $arrow_black = $('#arrow-black');

	clearInterval(intervalID);
	setTimeout(function(){
		$arrow_black.fadeIn();
		$arrow.fadeOut();
	}, 300);
}

function navArrowExit() {
	var $arrow = $('.arrow-red');
	var $arrow_black = $('#arrow-black');

	$arrow.on('mouseleave', function() {
		clearInterval(intervalID);
		$arrow.fadeOut();
		$arrow_black.fadeIn();
	});
}

function navHoverRed() {
	var $arrow = $('.arrow-red');
	var $arrow_black = $('#arrow-black');
	var $nav_arrow = $('.arrow-red').add('#arrow-black');

	$nav_arrow.on('mouseenter', function(){
		clearInterval(intervalID);
		$arrow_black.fadeOut();
		$arrow.fadeIn();
		$arrow.css('background-image', 'url(img/arrow/outline-red.png)');
	});
}
