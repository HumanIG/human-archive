
$(document).ready(function() {
	var $wrapper = $('#wrapper');
	var $current_vert_slide = $('#current-vert-slide');

	// Set up click events on vertical bar
	// First bar
	$('#vert1').on('click', function() {
		if(new Date() - lastKeyDown > time_limit) {
			lastKeyDown = new Date();
			var $first_vert_child = $wrapper.children(':first');
			var current_panel_id = $first_vert_child.attr('id');

			if(current_panel_id !== 'vertical-panel1') {
				$('#vertical-bar').fadeOut(800);
				$('#horizontal-bar').fadeIn(800);

				var id = $('#vertical-panel1').find('.slide').filter(function() {
					return $(this).css('opacity') > 0;
				}).attr('id');

				// if(id === 'panel1') {
				// 	$('#video-container').css({
				// 		top: '100%'
				// 	});
				// 	$('#bg-vid').animate({
				// 		top: '0%'
				// 	}, 800);
				// 	$('#video-container').animate({
				// 			top: '0%'
				// 	}, 800);
				// 	$('#panel1-copy').css({
				// 		marginLeft: '10%'
				// 	});
				// 	setTimeout(function() {
				// 		$('#panel1-copy').animate({
				// 			opacity: 1,
				// 			marginLeft: '0%'
				// 		}, 700);
				// 	}, 800);
				// } else {
				$('#' + id + '-bg').css({
					top: '100%'
				});
				$('#' + id + '-bg').animate({
					top: '0%'
				}, 800);
				setTimeout(function() {
					if(id === 'panel1') {
						$('#' + id + '-copy').animate({
							opacity: 1,
							marginLeft: '0%'
						}, 700);
					} else {
						$('#' + id + '-copy').animate({
							opacity: 1,
							marginLeft: '0%'
						}, 700);
					}
				}, 800);
				// }
				
				$first_vert_child.after($('#vertical-panel1'));
				$wrapper.animate({
					marginTop: -height
				}, 800, function() {
					$wrapper.append($first_vert_child);
					$wrapper.css({
						marginTop: 0
					});
					if(id === 'panel1') {
						// document.getElementById('bg-vid').play();
					}
					startHorizCarousel();
				});
				if(current_panel_id === 'vertical-panel2') {
					$temp_vert_slide = $current_vert_slide.clone().css({
						top: '-33.333%'
					});
					$temp_vert_slide.appendTo('#vertical-bar');
					$current_vert_slide.animate({
						top: '+=66.666%'
					}, 800, function() {
						$(this).css('top', '0%');
						$('#vertical-panel1').after($('#vertical-panel2'));
					});
					setTimeout(function() {
						$temp_vert_slide.animate({
							top: '0%'
						}, 400, function() {
							$(this).remove();
						});
					}, 400);
				} else if(current_panel_id === 'vertical-panel3') {
					createTempVertSlide();
				}
			}
		}
	});

	// Second bar
	$('#vert2').on('click', function() {
		if(new Date() - lastKeyDown > time_limit) {
			lastKeyDown = new Date();
			var $first_vert_child = $wrapper.children(':first');
			var current_panel_id = $first_vert_child.attr('id');

			if(current_panel_id !== 'vertical-panel2') {
				$first_vert_child.after($('#vertical-panel2'));
				$wrapper.animate({
					marginTop: -height
				}, 800, function() {
					$wrapper.append($first_vert_child);
					$wrapper.css({
						marginTop: 0
					});
				});
				if(current_panel_id === 'vertical-panel1') {
					vertSlideTransition();
				} else if(current_panel_id === 'vertical-panel3') {
					$temp_vert_slide = $current_vert_slide.clone().css({
						top: '-33.333%'
					});
					$temp_vert_slide.appendTo('#vertical-bar');
					$current_vert_slide.animate({
						top: '+=33.333%'
					}, 400, function() {
						setTimeout(function() {
							$current_vert_slide.css('top', '33.333%');
						}, 400);
					});
					$temp_vert_slide.animate({
						top: '33.333%'
					}, 800, function() {
						$(this).remove();
						$('#vertical-panel3').after($('#vertical-panel1'));
					});
				}
			}
		}
	});

	// Third bar
	$('#vert3').on('click', function() {
		if(new Date() - lastKeyDown > time_limit) {
			lastKeyDown = new Date();
			var $first_vert_child = $wrapper.children(':first');
			var current_panel_id = $first_vert_child.attr('id');

			if(current_panel_id !== 'vertical-panel3') {
				$first_vert_child.after($('#vertical-panel3'));
				$wrapper.animate({
					marginTop: -height
				}, 800, function() {
					$wrapper.append($first_vert_child);
					$wrapper.css({
						marginTop: 0
					});
				});
				if(current_panel_id === 'vertical-panel1') {
					$current_vert_slide.animate({
						top: '+=66.666%'
					}, 800, function() {
						$('#vertical-panel3').after($('#vertical-panel1'));
					});
				} else if(current_panel_id === 'vertical-panel2') {
					vertSlideTransition();
				}
			}
		}
	});
});

function vertSlideTransition() {
	if(parseInt($('#current-vert-slide').css('top')) < ((2/3) * $(window).height() - 5)) {
		$('#current-vert-slide').animate({
			top: '+=33.333%'
		}, 800);
	} else {
		createTempVertSlide();
	}
}

function reverseVertSlideTransition() {
	if(parseInt($('#current-vert-slide').css('top')) > ((1/3) * $(window).height() - 5)) {
		$('#current-vert-slide').animate({
			top: '-=33.333%'
		}, 800);
	} else {
		createReverseTempVertSlide();
	}
}

function createTempVertSlide() {
	$temp_vert_slide = $('#current-vert-slide').clone().css({
			top: '-33.333%'
	});
	$temp_vert_slide.appendTo('#vertical-bar');
	$('#current-vert-slide').animate({
		top: '+=33.333%'
	}, 800, function() {
		$(this).css('top', '0%');
		// document.getElementById('bg-vid').play();
	});
	$temp_vert_slide.animate({
		top: '0%'
	}, 800, function() {
		$(this).remove();
	});
}

function createReverseTempVertSlide() {
	$temp_vert_slide = $('#current-vert-slide').clone().css({
			top: '100%'
	});
	$temp_vert_slide.appendTo('#vertical-bar');
	$('#current-vert-slide').animate({
		top: '-=33.333%'
	}, 800, function() {
		$(this).css('top', '66.666%');
	});
	$temp_vert_slide.animate({
		top: '66.666%'
	}, 800, function() {
		$(this).remove();
	});
}