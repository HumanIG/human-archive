$(document).ready(function() {
	var $panel1 = $('#panel1');
	var $panel1_bg = $('#panel1-bg');
	var $panel2 = $('#panel2');
	var $panel2_bg = $('#panel2-bg');
	var $panel3 = $('#panel3');
	var $panel3_bg = $('#panel3-bg');
	var $panel4 = $('#panel4');
	var $panel4_bg = $('#panel4-bg');

	// Set up click events on horizontal bar
	// First bar
	$('#horiz1').on('click', function() {
		if(new Date() - lastKeyDown > time_limit) {
			lastKeyDown = new Date();
			var $current_slide = $('#current-slide');
			var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
				return $(this).css('opacity') > 0;
			}).attr('id');
			// document.getElementById('bg-vid').play();

			if(current_panel_id !== 'panel1') {
				if(current_panel_id === 'panel2') {
					triggerHorizontalShift('panel2', 'panel2-bg', 'panel1', 'panel1-bg');
					$temp_slide = $current_slide.clone().css({
						position: 'absolute',
						left: '-25%'
					});
					$temp_slide.appendTo('#horizontal-bar');
					$current_slide.animate({
						left: '+=75%'
					}, 800, function() {
						$(this).css('left', '0%');
						// document.getElementById('bg-vid').play();
					});
					setTimeout(function() {
						$temp_slide.animate({
							left: '0%'
						}, 400, function() {
							$(this).remove();
						});
					}, 400);
				} else if(current_panel_id === 'panel3') {
					triggerHorizontalShift('panel3', 'panel3-bg', 'panel1', 'panel1-bg');
					$temp_slide = $current_slide.clone().css({
						position: 'absolute',
						left: '-25%'
					});
					$temp_slide.appendTo('#horizontal-bar');
					$current_slide.animate({
						left: '+=50%'
					}, 800, function() {
						$(this).css('left', '0%');
						// document.getElementById('bg-vid').play();
					});
					setTimeout(function() {
						$temp_slide.animate({
							left: '0%'
						}, 400, function() {
							$(this).remove();
						});
					}, 400);
					
				} else {
					triggerHorizontalShift('panel4', 'panel4-bg', 'panel1', 'panel1-bg');
					createTempSlide();
				}
				copyTransition('panel1');
			}
		}
	});

	// Second Bar
	$('#horiz2').on('click', function() {
		if(new Date() - lastKeyDown > time_limit) {
			lastKeyDown = new Date();
			var $current_slide = $('#current-slide');
			var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
				return $(this).css('opacity') > 0;
			}).attr('id');
			// document.getElementById('bg-vid').pause();

			if(current_panel_id !== 'panel2') {
				if(current_panel_id === 'panel1') {
					triggerHorizontalShift('panel1', 'panel1-bg', 'panel2', 'panel2-bg');
					$current_slide.animate({
						left: '+=25%'
					}, 800);
				} else if(current_panel_id === 'panel3') {
					triggerHorizontalShift('panel3', 'panel3-bg', 'panel2', 'panel2-bg');
					$temp_slide = $current_slide.clone().css({
						position: 'absolute',
						left: '-25%'
					});
					$temp_slide.appendTo('#horizontal-bar');
					$current_slide.animate({
						left: '+=50%'
					}, 400, function() {
						setTimeout(function() {
							$current_slide.css('left', '25%');
						}, 400);
					});
					$temp_slide.animate({
						left: '25%'
					}, 800, function() {
						$(this).remove();
					});
				} else if(current_panel_id === 'panel4') {
					triggerHorizontalShift('panel4', 'panel4-bg', 'panel2', 'panel2-bg');
					$temp_slide = $current_slide.clone().css({
						position: 'absolute',
						left: '-25%'
					});
					$temp_slide.appendTo('#horizontal-bar');
					$current_slide.animate({
						left: '+=25%'
					}, 400, function() {
						setTimeout(function() {
							$current_slide.css('left', '25%');
						}, 400);
					});
					$temp_slide.animate({
						left: '25%'
					}, 800, function() {
						$(this).remove();
					});
				}
				copyTransition('panel2');
			}
		}
	});

	// Third bar
	$('#horiz3').on('click', function() {
		if(new Date() - lastKeyDown > time_limit) {
			lastKeyDown = new Date();
			var $current_slide = $('#current-slide');
			var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
				return $(this).css('opacity') > 0;
			}).attr('id');
			// document.getElementById('bg-vid').pause();
			
			if(current_panel_id !== 'panel3') {
				if(current_panel_id === 'panel1') {
					triggerHorizontalShift('panel1', 'panel1-bg', 'panel3', 'panel3-bg');
					$current_slide.animate({
						left: '+=50%'
					}, 800);
				} else if(current_panel_id === 'panel2') {
					triggerHorizontalShift('panel2', 'panel2-bg', 'panel3', 'panel3-bg');
					$current_slide.animate({
						left: '+=25%'
					}, 800);
				} else if(current_panel_id === 'panel4') {
					triggerHorizontalShift('panel2', 'panel2-bg', 'panel3', 'panel3-bg');
					$temp_slide = $current_slide.clone().css({
						position: 'absolute',
						left: '-25%'
					});
					$temp_slide.appendTo('#horizontal-bar');
					$current_slide.animate({
						left: '+=25%'
					}, 400, function() {
						setTimeout(function() {
							$current_slide.css('left', '25%');
						}, 400);
					});
					$temp_slide.animate({
						left: '25%'
					}, 800, function() {
						$(this).remove();
					});
				} 
				copyTransition('panel3');
			}
		}
	});

	// Fourth bar
	$('#horiz3').on('click', function() {
		if(new Date() - lastKeyDown > time_limit) {
			lastKeyDown = new Date();
			var $current_slide = $('#current-slide');
			var current_panel_id = $('#vertical-panel1').find('.slide').filter(function() {
				return $(this).css('opacity') > 0;
			}).attr('id');
			// document.getElementById('bg-vid').pause();
			
			if(current_panel_id !== 'panel4') {
				if(current_panel_id === 'panel1') {
					triggerHorizontalShift('panel1', 'panel1-bg', 'panel4', 'panel4-bg');
					$current_slide.animate({
						left: '+=75%'
					}, 800);
				} else if(current_panel_id === 'panel2') {
					triggerHorizontalShift('panel2', 'panel2-bg', 'panel4', 'panel4-bg');
					$current_slide.animate({
						left: '+=50%'
					}, 800);
				} else if(current_panel_id === 'panel3') {
					triggerHorizontalShift('panel2', 'panel2-bg', 'panel4', 'panel4-bg');
					$current_slide.animate({
						left: '+=25%'
					}, 800);
				} 
				copyTransition('panel4');
			}
		}
	});
});

// Controls the horizontal slider transition during timed carousel
function slideTransition() {
	var $current_slide = $('#current-slide');
	var width = $('body').width();
	if(parseInt($current_slide.css('left')) < ((3/4) * width - 5)) {
		$current_slide.animate({
			left: '+=25%'
		}, 800);
	} else {
		createTempSlide();
	}
}

// Controls the horizontal slider transition during left arrow key
function reverseSlideTransition() {
	var $current_slide = $('#current-slide');
	var width = $('body').width();
	if(parseInt($current_slide.css('left')) > ((1/4) * $(window).width() - 5)) {
		$current_slide.animate({
			left: '-=25%'
		}, 800);
	} else {
		createReverseTempSlide();
	}
}

// Creates the temp slide for horizontal transitions from Panel 3 to Panel 1
function createTempSlide() {
	var $current_slide = $('#current-slide');
	$temp_slide = $current_slide.clone().css({
			position: 'absolute',
			left: '-25%'
	});
	$temp_slide.appendTo('#horizontal-bar');
	$current_slide.animate({
		left: '+=25%'
	}, 800, function(){
		$(this).css('left', '0%');
		// document.getElementById('bg-vid').play();
	});
	$temp_slide.animate({
		left: '0%'
	}, 800, function() {
		$(this) .remove();
	});
}

// Creates the temp slide for horizontal transitions from Panel 1 to Panel 3
function createReverseTempSlide() {
	var $current_slide = $('#current-slide');
	$temp_slide = $current_slide.clone().css({
			position: 'absolute',
			left: '100%'
	});
	$temp_slide.appendTo('#horizontal-bar');
	$current_slide.animate({
		left: '-=25%'
	}, 800, function() {
		$(this).css('left', '75%');
	});
	$temp_slide.animate({
		left: '75%'
	}, 800, function() {
		$(this).remove();
	});
}

