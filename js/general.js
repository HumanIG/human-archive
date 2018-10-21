// Global Variable Definitions
var width = $(window).width();
var height = $(window).height();

$(window).resize(function() {
	width = $(window).width();
	height = $(window).height();
});

$(document).ready(function() {
	var $body = $('body');
	var $nav_bar = $('#nav-bar');
	var $header = $('#header');
	var $logo_link = $('#logo-link');
	var $logo = $('.icon-human_logo_2');
	var $nav_menu = $('#nav-menu');
	var $nav_slide = $('#nav-slide');
	var $top_patty = $('#top-patty');
	var $meat = $('#meat');
	var $bottom_patty = $('#bottom-patty');
	var $header_bg = $('#header-bg');
	var $nav_arrow1 = $('#nav-arrow1');
	var $laptop_img = $('#laptop-img');
	var $iphone = $('#iphone');
	var $horizontal_bar = $('#horizontal-bar');
	var $vertical_bar = $('#vertical-bar');
	var $in_laptop = $('#in-laptop');
	var $diamond_overlay = $('#diamond-overlay');
	var $sprite = $('#sprite');
	var $bg_container = $('#bg-container');
	var start_header_slide = 50;
	var $main_container = $('#main-container');
	var $panel1 = $('#panel1-copy');
	var $panel2 = $('#panel2-copy');
	var $panel3 = $('#panel3-copy');
	var $overlay = $('#overlay');
	var $casestudy_bg = $('#case-study-bg');
	var $expereal_bg = $('.expereal-bg');
	var $gogo_bg = $('#gogo-bg-big').add('#gogo-bg-upper').add('.gogo-cloud');


	window.mobilecheck = function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check; 
	}

	// Check which browser is being use
  // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
  var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  // Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';
	// At least Safari 3+: "[object HTMLElementConstructor]"
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	// Chrome 1+
	var isChrome = !!window.chrome && !isOpera;
	// At least IE6
	var isIE = /*@cc_on!@*/false || !!document.documentMode;

	// Changes em font value
	if(isFirefox === true) {
		$('html').css({
			fontSize: '100%'
		});
	}

	setTimeout(function() {
		if($(window).width() > 2000) {
			addNavArrows('arrow', 'arrow_red');
		} else if($(window).width() > 1024) {
			if($('#bonobos-stamp').length !== 0) {
				addNavArrows('arrow-white', 'arrow_red');	
			} else if($('#related-id').length !== 0) {
				addNavArrows('arrow2', 'arrow_red');
			} else {
				addNavArrows('arrow', 'arrow_red');
			}
		} else if($(window).width() > 700) {
			if($('#bonobos-stamp').length !== 0) {
				addNavArrows('arrow-alone-white', 'arrow_red_alone');
			} else if($('#related-id').length !== 0) {
				addNavArrows('arrow-alone-outline', 'arrow_red_alone');
			} else {
				addNavArrows('arrow-alone', 'arrow_red_alone');
			}
		} else {
			if($('#bonobos-stamp').length !== 0) {
				addNavArrows('arrow-alone-outline', 'arrow_red_alone');
			} else {
				addNavArrows('arrow-alone', 'arrow_red_alone');
			}
		}
	}, 100);

	// Place left and right arrows halfway through laptop
	function addNavArrows(type, hover_type) {
		$('.left-arrow, .right-arrow').attr('src', 'img/'+type+'.png');

		$('.left-arrow, .right-arrow').on('mouseenter', function() {
			$(this).attr('src', 'img/'+hover_type+'.png');
		});

		$('.left-arrow, .right-arrow').on('mouseleave', function() {
			$('.left-arrow, .right-arrow').attr('src', 'img/'+type+'.png');
		});

		$('.left-arrow, .right-arrow').fadeIn(100);
	}

	// Reset category variable on nav click
	$('#logo-link').on('click', function() {
	  $.ajax({
	    url: './sorting.php',
	    type: 'POST',
	    dataType: 'json',
	    data: {category: 'all'}
	  });
	});

	// Checks which nav to apply on load and resize
	checkNav();
	headerMargin();
	// Hide background on large screen size
	hideBackground();

	$(window).resize(function() {
		width = $(window).width();
		height = $(window).height();
		
		checkNav();
		headerMargin();
		fadeBackground();

		setTimeout(function() {
			if($(window).width() > 2000) {
				addNavArrows('arrow', 'arrow_red');
			} else if($(window).width() > 1024) {
				if($('#bonobos-stamp').length !== 0) {
					addNavArrows('arrow-white', 'arrow_red');	
				} else if($('#related-id').length !== 0) {
					addNavArrows('arrow2', 'arrow_red');
				} else {
					addNavArrows('arrow', 'arrow_red');
				}
			} else if($(window).width() > 700) {
				if($('#bonobos-stamp').length !== 0) {
					addNavArrows('arrow-alone-outline', 'arrow_red_alone');
				} else if($('#related-id').length !== 0) {
					addNavArrows('arrow-alone-outline', 'arrow_red_alone');
				} else {
					addNavArrows('arrow-alone', 'arrow_red_alone');
				}
			} else {
				if($('#bonobos-stamp').length !== 0) {
					addNavArrows('arrow-alone-outline', 'arrow_red_alone');
				} else {
					addNavArrows('arrow-alone', 'arrow_red_alone');
				}
			}
		}, 100);
	});

	function headerMargin() {
		if ($main_container.length > 0 && width > 1920) {
			var margin = $main_container.offset().left;
			$header.css('left', margin);
		} else {
			headerMargin2();
		}
	}

	function headerMargin2() {
		var width = $(window).width();
		var panel = $($('#wrapper').find('.vertical-slide:visible')[0]).attr('id');
		$('body').css('marginLeft', 'auto');

		if (panel == 'vertical-panel2' || panel == 'vertical-panel3') {
			if (panel == 'vertical-panel2') {
				var margin = $('#vertical-panel2').offset().left;
				$header.css({'left' : margin, 'marginLeft' : '0', 'paddingLeft' : '15px'});
			} else if (panel == 'vertical-panel3') {
				var margin = $('#vertical-panel3').offset().left;
				$header.css({'left' : margin, 'marginLeft' : '0', 'paddingLeft' : '15px'});
			}
		} else if (width > 1920 && width < 2270) {
			if ($('#panel1-copy').css('opacity') == 1 && panel == 'vertical-panel1') {
				var margin = $panel1.offset().left;
				$header.css({'left' : 'inherit', 'marginLeft' : '7.5%', 'paddingLeft' : '15px'});
			} else if ($('#panel2-copy').css('opacity') !== '0') {
				var margin = $panel2.offset().left;
				$header.css({'left' : margin, 'marginLeft' : '0'});
			} else if ($('#panel3-copy').css('opacity') !== '0') {
				var margin = $panel3.offset().left;
				$header.css({'left' : margin, 'marginLeft' : '0'});
			} else if (width > 1920 && width <= 2000) {
				$header.css({'left' : 'inherit', 'marginLeft' : '7.5%'});
			} else if (width > 2000 && width <= 2110) {
				$header.css({'left' : 'inherit', 'marginLeft' : '7.1%'});
			} else if (width > 2110 && width <= 2150) {
				$header.css({'left' : 'inherit', 'marginLeft' : '7.0%'});
			} else if (width > 2150 && width <= 2180) {
				$header.css({'left' : 'inherit', 'marginLeft' : '6.8%'});
			} else if (width > 2180 && width <= 2270) {
				$header.css({'left' : 'inherit', 'marginLeft' : '6.6%'});
			}	else if (width > 2270 && width <= 2350) {
				$header.css({'left' : 'inherit', 'marginLeft' : '6.5%'});
			} else if (width > 2350 && width <= 2450) {
				$header.css({'left' : 'inherit', 'marginLeft' : '6.2%'});
			} else if (width > 2450) {
				$header.css({'left' : 'inherit', 'marginLeft' : '6.0%'});
			} else {
				$header.css({'left' : 'inherit', 'marginLeft' : '7% !important'});
			}
		} else if (width >= 2270) {
			if ($('#panel1-copy').css('opacity') !== '0') {
				$header.css('opacity', '0');
				setTimeout(function() {
					var margin = $panel1.offset().left;
					$header.css({'opacity' : '1', 'left' : margin, 'marginLeft' : '0', 'paddingLeft' : '15px'});
				}, 500);
			} else if ($('#panel2-copy').css('opacity') !== '0') {
				$header.css('opacity', '0');
				setTimeout(function() {
					var margin = $panel2.offset().left;
					$header.css({'opacity' : '1', 'left' : margin, 'marginLeft' : '0', 'paddingLeft' : '15px'});
				}, 500);
			} else if ($('#panel3-copy').css('opacity') !== '0') {
				$header.css('opacity', '0');
				setTimeout(function() {
					var margin = $panel3.offset().left;
					$header.css({'opacity' : '1', 'left' : margin, 'marginLeft' : '0', 'paddingLeft' : '15px'});
				}, 500);
			} else {
				$header.css({'left' : 'inherit', 'marginLeft' : '6.0%', 'paddingLeft' : '15px'});
			}
		// window width less than and equal to 1920px
		} else {
			$header.css({'left' : '7.5%', 'marginLeft' : '0', 'paddingLeft' : '15px'});
		}
	}

	function navPulse() {
		$nav_arrow1.toggleClass('nav-arrow-pulse');
	}

	function hideBackground() {
		if ($(window).width() > 2000 || $(window).width() < 580) {
			$casestudy_bg.hide();
			$expereal_bg.hide();
			$gogo_bg.hide();
		}
	}

	function fadeBackground() {
		if ($(window).width() > 2000 || $(window).width() < 580) {
			$casestudy_bg.fadeOut(700);
			$expereal_bg.fadeOut(700);
			$gogo_bg.fadeOut(700);
		} else {
			$casestudy_bg.fadeIn(700);
			$expereal_bg.fadeIn(700);
			$gogo_bg.fadeIn(700);
		}
	}

	$(window).resize(function(){
		width = $(window).width();
		height = $(window).height();

		headerMargin();
	});

	// Window scroll event for header
	$(window).scroll(function() {
		if(window.mobilecheck() === false) {
			if($(window).scrollTop() <= start_header_slide) {
				$header_bg.css({
						top: -55 + ($(window).scrollTop() * (55 / start_header_slide)) + 'px'
				});
				$header.css({
					paddingTop: 60 - ($(window).scrollTop() * (25 / start_header_slide)) + 'px'
				});
				$logo.addClass('big');
				$logo.removeClass('small');
				// Different font colors on Bonobos and Hudson pages
				if($('#bonobos-stamp').length !== 0) {
					$('.black-line').css('background-color', '#FFFFFF');
					$('.nav-link, .nav-link:visited').css('color', '#FFFFFF');
				}
				$nav_bar.css({
					paddingTop: 20 - ($(window).scrollTop() * (15 / start_header_slide)) + 'px'
				});
				$nav_menu.css({
					marginTop: 18 - ($(window).scrollTop() * (18 / start_header_slide)) + 'px'
				});
			} else {
				$header_bg.css({
					top: 0 + 'px'
				});
				$header.css({
					paddingTop: '35px'
				});
				$logo.addClass('small');
				$logo.removeClass('big');
				// Different font colors on Bonobos and Hudson pages
				if($('#bonobos-stamp').length !== 0) {
					$('.black-line').css('background-color', '#342B29');
					$('.nav-link, .nav-link:visited').css('color', '#342B29');
				}
				$nav_bar.css({
					paddingTop: '5px'
				});
				$nav_menu.css({
					marginTop: '0px'
				});
			}

			if($(window).scrollTop() == 0) {
				$header_bg.animate({
					top: '-55px'
				});
			}
		}
	});


	// Set up hover/click effects on hamburger menu for desktops
	function desktopNavMenu() {
		// Normalize the DOM
		$nav_menu.unbind();
		$nav_menu.removeClass('slider-out');
		
		// Shifts the slide menu 
		$nav_slide.addClass('slider-out');
		$nav_slide.removeClass('slider-in');

		// Shifts the hamburger nav
		$nav_menu.addClass('nav-menu-out');
		$nav_menu.removeClass('nav-menu-in');

		headerMargin();

		if($laptop_img.length !== 0) {
			$in_laptop.stop().animate({
				marginLeft: '0%'
			}, 300, function() {
				placeLaptopSite();
			});
		}

		if($iphone.length !== 0) {
			$sprite.stop().animate({
				marginLeft: '0%'
			}, 300, function() {
				placeDial();
			});
			$bg_container.stop().animate({
				marginLeft: '0%'
			}, 300, function() {
				placeBackground();
			});
		}

		if($diamond_overlay.length !== 0) {
			$diamond_overlay.stop(true, false).animate({
				marginLeft: '0%'
			}, 300, function() {
				placeLaptopSite();
			});
		}

		if($vertical_bar.length !== 0) {
			$vertical_bar.stop().animate({
				marginLeft: '0%'
			}, 300);
			$horizontal_bar.stop().animate({
				marginLeft: '0%'
			}, 300);
		}

		$top_patty.removeClass('clickedColor');
		$meat.removeClass('clickedColor');
		$bottom_patty.removeClass('clickedColor');

		// Add soecific event listeners
		$nav_menu.on('mouseover', function() {
			if($nav_menu.hasClass('clicked') === false) {
				$top_patty.addClass('clickedTop');
				$meat.addClass('clickedMeat');
				$bottom_patty.addClass('clickedBottom');
				$nav_bar.stop().fadeIn(200);
			}
		});

		$header.on('mouseleave', function() {
			if($nav_menu.hasClass('clicked') === false) {
				$top_patty.removeClass('clickedTop');
				$meat.removeClass('clickedMeat');
				$bottom_patty.removeClass('clickedBottom');
				$nav_bar.stop().fadeOut(200);
			}
		});

		$nav_menu.on('click', function() {
		  $.ajax({
	      url: './request.php',
	      type: 'post'
	    }).done(function(data) {
	    	if($nav_menu.hasClass('clicked') === true) {
					$nav_menu.removeClass('clicked');
					$top_patty.removeClass('clickedTop');
					$meat.removeClass('clickedMeat');
					$bottom_patty.removeClass('clickedBottom');
					$nav_bar.stop().fadeOut(200);
				} else {
					$nav_menu.addClass('clicked');
					$top_patty.addClass('clickedTop');
					$meat.addClass('clickedMeat');
					$bottom_patty.addClass('clickedBottom');
					$nav_bar.stop().fadeIn(200);
				}
	    });
		});
	}

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	}

	function disable_scroll_mobile() {
		$(window).bind('touchmove', function(e){e.preventDefault()});
	}

	function enable_scroll_mobile() {
		$(window).unbind('touchmove');
	}


	// Set up hover/click effects on hamburger menu for smaller screens
	function slideNavMenu() {
		// Normalize the DOM
		$nav_menu.unbind();
		if($nav_menu.hasClass('clicked') === true) {
			$nav_menu.removeClass('clicked');
			$.ajax({
	      url: './request.php',
	      type: 'post'
	    });
		}
		$top_patty.removeClass('clickedTop');
		$meat.removeClass('clickedMeat');
		$bottom_patty.removeClass('clickedBottom');
		$nav_slide.show();
		$nav_bar.hide();

		// Add specific event listeners
		$nav_menu.on('mouseenter', function() {
			if($nav_menu.hasClass('clicked') === false) {
				$top_patty.addClass('clickedColor');
				$meat.addClass('clickedColor');
				$bottom_patty.addClass('clickedColor');
			}
		});

		$header.on('mouseleave', function() {
			if($nav_menu.hasClass('clicked') === false) {
				$top_patty.removeClass('clickedColor');
				$meat.removeClass('clickedColor');
				$bottom_patty.removeClass('clickedColor');
			}
		});

		$nav_menu.on('click', function(e) {
			e.preventDefault();

			if($nav_slide.hasClass('slider-in') === true) {
				navSlideOut();
			} else {
				navSlideIn();
				
				// setTimeout(function() {
				// 	$('body').on('click', ':not(#nav-slide, .slide-link, .nav-slide-link)', mask);
				// }, 500);
			}
		});
	}

	$overlay.on('click', function() {
		navSlideOut();
	});

	// Click event for when slider is out to retract slider on body click
	// function mask() {
	// 	navSlideOut();
	// 	$('body').off('click', ':not(#nav-slide, .slide-link, .nav-slide-link)', mask);
	// }

	// Triggers slide nav on screens smaller than 1200px
	function checkNav() {
		if(width > 1199) {
			desktopNavMenu();
		} else {
			slideNavMenu();
		}
	}

	// Function to slide back out
	function navSlideOut() {
		width = $(window).width();
		$horizontal_bar.stop();
		// Change hamburger nav color
		$nav_menu.removeClass('clicked');
		$top_patty.removeClass('clickedColor');
		$meat.removeClass('clickedColor');
		$bottom_patty.removeClass('clickedColor');

		// Remove overlay and allow scroll again
		$overlay.removeClass('overlay-opacity');
		$body.removeClass('stopScroll');

		// Shifts the slide menu 
		$nav_slide.addClass('slider-out');
		$nav_slide.removeClass('slider-in');

		// Shifts the hamburger nav
		$nav_menu.addClass('nav-menu-out');
		$nav_menu.removeClass('nav-menu-in');

		enable_scroll_mobile();

		// Additional animations needed for specific pages
		// if($laptop_img.length !== 0) {
		// 	$in_laptop.stop(true, false).animate({
		// 		marginLeft: '30%'
		// 	}, 300, function() {
		// 		$in_laptop.css('margin-left', '0%');
		// 		placeLaptopSite();
		// 	});
		// }

		// if($iphone.length !== 0) {
		// 	$sprite.stop(true, false).animate({
		// 		marginLeft: '30%'
		// 	}, 300, function() {
		// 		$sprite.css('margin-left', '0%');
		// 		placeDial();
		// 	});
		// 	$bg_container.stop(true, false).animate({
		// 		marginLeft: '30%'
		// 	}, 300, function() {
		// 		$bg_container.css('margin-left', '0%');
		// 		placeBackground();
		// 	});
		// }

		// if($diamond_overlay.length !== 0) {
		// 	$diamond_overlay.stop(true, false).animate({
		// 		marginLeft: '0%'
		// 	}, 300);
		// }

		// if($vertical_bar.length !== 0) {
		// 	$vertical_bar.stop().animate({
		// 		marginLeft: '0%'
		// 	}, 300);
		// 	$horizontal_bar.stop().animate({
		// 		marginLeft: '0%'
		// 	}, 300);
		// }
	}

	function navSlideIn() {
		var current = $(window).scrollTop();
		// Change hamburger nav color
		$nav_menu.addClass('clicked');
		$top_patty.addClass('clickedColor');
		$meat.addClass('clickedColor');
		$bottom_patty.addClass('clickedColor');

		// Add click off and stop scroll
		$overlay.addClass('overlay-opacity');
		$body.addClass('stopScroll');

		// Shifts the slide menu 
		$nav_slide.addClass('slider-in');
		$nav_slide.removeClass('slider-out');

		// Shifts the hamburger nav
		$nav_menu.addClass('nav-menu-in');
		$nav_menu.removeClass('nav-menu-out');

		window.scrollTo(0, current);
		disable_scroll_mobile();
		stopHorizCarousel();


		// if(window.mobilecheck() === false) {
		// 	$horizontal_bar.stop();
		// 	$nav_menu.stop().animate({
		// 		marginRight: '+54%'
		// 	}, 300);
		// 	// $('body').stop().animate({
		// 	// 	marginLeft: '-30%'
		// 	// }, 300);
		// 	$nav_slide.stop().animate({
		// 		left: '54%'
		// 	}, 300);
		// } else {
		// 	if($(window).width() > 1000) {
		// 		$horizontal_bar.stop();
		// 		$nav_menu.stop().animate({
		// 			marginRight: '+32%'
		// 		}, 300);
		// 		// $('body').stop().animate({
		// 		// 	marginLeft: '-30%'
		// 		// }, 300);
		// 		$nav_slide.stop().animate({
		// 			left: '70%'
		// 		}, 300);
		// 	} else {
		// 		$horizontal_bar.stop();
		// 		$nav_menu.stop().animate({
		// 			marginRight: '+44%'
		// 		}, 300);
		// 		// $('body').stop().animate({
		// 		// 	marginLeft: '-30%'
		// 		// }, 300);
		// 		$nav_slide.stop().animate({
		// 			left: '60%'
		// 		}, 300);
		// 	}
		// }

		// // Additional animations needed for specific pages
		// if($laptop_img.length !== 0) {
		// 	$in_laptop.stop(true, false).animate({
		// 		marginLeft: '-30%'
		// 	}, 300, function() {
		// 		$in_laptop.css('margin-left', '0%');
		// 		placeLaptopSite();
		// 	});
		// }

		// if($iphone.length !== 0) {
		// 	$sprite.stop(true, false).animate({
		// 		marginLeft: '-30%'
		// 	}, 300, function() {
		// 		$sprite.css('margin-left', '0%');
		// 		placeDial();
		// 	});
		// 	$bg_container.stop(true, false).animate({
		// 		marginLeft: '-30%'
		// 	}, 300, function() {
		// 		$bg_container.css('margin-left', '0%');
		// 		placeBackground();
		// 	});
		// }

		// if($diamond_overlay.length !== 0) {
		// 	$diamond_overlay.stop(true, false).animate({
		// 		marginLeft: '-30%'
		// 	}, 300);
		// }

		// if($vertical_bar.length !== 0) {
		// 	$vertical_bar.stop().animate({
		// 		marginLeft: '-30%'
		// 	}, 300);
		// 	$horizontal_bar.stop().animate({
		// 		marginLeft: '-30%'
		// 	}, 300);
		// }
	}
});

