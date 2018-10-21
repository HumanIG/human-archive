$(document).ready(function() {
  var $horizontal_bar = $('#horizontal-bar');
  var $work_list = $('#work-list');
  var $work_item = $('.work-item:visible');
  var work_item_width = $work_item.width();
  var $categories = $('#categories');
  var $categories_arrow = $('#categories-arrow');
  var $main_container = $('#main-container');

  var lastPressed = new Date();
  var fadedIn = false;
  var start_header_slide = 50;
  var window_width = $(window).width();
  var num_items = $('.work-item:visible').length;
  var begin = parseInt($($('.work-item:visible')[0]).position().left);
  var item_width = $($('.work-item:visible')[0]).width();
  var width = item_width * (num_items+1);
  var items_on_screen = 0;
  var ratio;
  var horiz_width;
  var position = 0;
  var num_slides;
  
  var select_box = false;
  var navOpen = false;
  var removedDiv = "";

  // Check if on mobile/tablet device
  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check; 
  }

  $('.first-slash').hide();
  checkFilter();

  function checkFilter() {
    if(window.mobilecheck() === true) {
      $work_list.wrap('<div id="wrappers"></div>');

      if($(window).width() < 650) {
        var select_list = '<select id="select-filter"><option value="featured" selected>featured</option><option value="web">web</option><option value="mobile">mobile</option><option value="branding">branding</option><option value="print">print</option><option value="motion">motion</option><option value="social">social</option><option value="all">all</option></select>'
        $('#categories').html(select_list);

        $('#select-filter').on('focusout', function() {
          var newSelection = $(this).find('option:selected').text();
          $('.selection-header').find('h4').text(newSelection);
          $('.case_study').css({"display":"none"});
          if(newSelection == "all") {
            $('.case_study').fadeIn(600);
            addScroll();
          } else {
            $('.case_study').each(function() {
              var categories = $(this).data("categories");
              var categoryArr = categories.split(',');
              length = categoryArr.length;
              for(i=0; i < length; i++){
                  if(categoryArr[i] == newSelection) {
                  $(this).fadeIn(600);
                  addScroll();
                }
              }
            });
          }

          // Change session variable that tracks current category through AJAX
          $.ajax({
            url: './sorting.php',
            type: 'POST',
            dataType: 'json',
            data: {category: newSelection}
          });
        });
      }
    } else if($(window).width() < 769) {
      select_box = true;
      var select_list = '<select id="select-filter"><option value="featured" selected>featured</option><option value="web">web</option><option value="mobile">mobile</option><option value="branding">branding</option><option value="print">print</option><option value="motion">motion</option><option value="social">social</option><option value="all">all</option></select>'
      $('#categories').html(select_list); 

      $('#select-filter').on('change', function() {
        var newSelection = $(this).find('option:selected').text();
        $('.selection-header').find('h4').text(newSelection);
        $('.case_study').css({"display":"none"});
        if(newSelection == "all") {
          $('.case_study').fadeIn(600);
          addScroll();
        } else {
          $('.case_study').each(function() {
            var categories = $(this).data("categories");
            var categoryArr = categories.split(',');
            length = categoryArr.length;
            for(i=0; i < length; i++){
                if(categoryArr[i] == newSelection) {
                $(this).fadeIn(600);
                addScroll();
              }
            }
          });
        }

        // Change session variable that tracks current category through AJAX
        $.ajax({
          url: './sorting.php',
          type: 'POST',
          dataType: 'json',
          data: {category: newSelection}
        });
      });
    }
  }

  // Set up hover effect with delay on horizontal slider
  $horizontal_bar.hoverIntent(function() {
    $horizontal_bar.animate({
      height: '20px'
    }, 300);
  }, function() {
    $horizontal_bar.animate({
      height: '10px'
    }, 300);
  });

  // Set up hover effect on work images
  $('.work-image').on('mouseenter', function() {
    $($(this).closest('.work-item')[0]).find('.work-title').css('color', '#EF6050');
  });

  $('.work-image').on('mouseleave', function() {
    $($(this).closest('.work-item')[0]).find('.work-title').css('color', '#333');
  });

  function horizontalScroll(work_item_width) {
    var num_items = $('.work-item:visible').length;
    window_width = $(window).width();
    item_width = work_item_width;
    width = item_width * (num_items+1);
    position = 0;
    // Set width of work-list based on number of items
    $work_list.css('width', width + 'px');

    // Find out how many elements are currently being shown on the page
    setTimeout(function() {
    // reset items_on_screeen to zero
      items_on_screen = 0;
      $.each($('.work-item:visible'), function(index, value) {
        if($(value).position().left < window_width) {
          items_on_screen++;
        } else {
          return;
        }
      });
    }, 200);

    setTimeout(function() {
      if (items_on_screen == 1) {
        num_slides = 1;
      } else {
        num_slides = Math.ceil(num_items / (items_on_screen - 1));
      }

      horiz_width = 100 / num_slides;
      $horizontal_bar.empty();
      $work_list.css('marginLeft', '0');

      for(var i = 0; i < num_slides; i++) {
        $horizontal_bar.append('<div class="horiz-slider" id="horiz' + i + '">');
      }
      $horizontal_bar.append('<div id="current-slide">');

      // Set width of horizontal slides based on number of items
      $('.horiz-slider').css('width', horiz_width + '%');
      $('#current-slide').css('width', horiz_width + '%');
    }, 300);
  }

  $horizontal_bar.on('click', '.horiz-slider', function() {
    var initial = parseInt($($('.work-item:visible')[0]).position().left);
    var num_slide = parseInt($(this).attr('id')[5]);
    position = num_slide;
    shiftSlide(initial, num_slide, items_on_screen, horiz_width);
  });

  // Set up swipe to navigate through works
  // $work_list.swipe({
  //   swipe: function(event, direction, distance, duration, fingerCount) {
  //     var initial = parseInt($($('.work-item:visible')[0]).position().left);
  //     if(direction === 'left' && position !== num_slides - 1) {
  //       var num_slide = position += 1;
  //       position = num_slide;
  //       shiftSlide(initial, num_slide, items_on_screen, horiz_width);
  //     } else if(direction === 'right' && position !== 0) {
  //       var num_slide = position -= 1;
  //       position = num_slide;
  //       shiftSlide(initial, num_slide, items_on_screen, horiz_width);
  //     } 
  //   },
  //   threshold: 75
  // });


  $(document).on('keydown', function(e) {
    if(new Date() - lastPressed > 800) {
      var initial = parseInt($($('.work-item:visible')[0]).position().left);
      // Left arrow
      if(e.keyCode === 37 && $('#current-slide').position().left !== 0) {
        lastPressed = new Date();
        position--;
        var num_slide = position;
        shiftSlide(initial, num_slide, items_on_screen, horiz_width);
      } 
      // Right arrow
      else if(e.keyCode === 39 && (position + 2) !== $horizontal_bar.children().length) {
        if(position !== num_slides - 1) {
          lastPressed = new Date();
          position++;
          var num_slide = position;
          shiftSlide(initial, num_slide, items_on_screen, horiz_width);
        }
      }
    }
  });

  function addScroll() {
    var container_size = $main_container.width();

    if($(window).width() < 1920) {
      imageResize();
     } else {
      $horizontal_bar.hide();
      $work_list.css('width', container_size + 'px');
      $work_item.css('width', '300px');
      $work_item.addClass('bottom-margin');
      $('html, body').css('overflow', 'visible');
    }
  }

  window.onresize = function() {    
    var container_size = $main_container.width();
    position = 0;
    checkFilter();

    // window goes small and horizontal bar is hidden -> show bar & image resize
    if($(window).width() < 1920 && ($('#horizontal-bar:hidden').length > 0)) {
      $horizontal_bar.show();
      $('html, body').css('overflow', 'hidden');
      imageResize();
    // if window goes small and horizontal bar is showing -> empty bar & image resize
    } else if($(window).width() < 1920 && ($('#horizontal-bar:hidden').length == 0)) {
      $horizontal_bar.empty();
      imageResize();
    // if window goes big and horizontal bar is showing -> image resize then empty bar
    } else if ($(window).width() >= 1920 && ($('#horizontal-bar:hidden').length == 0)) {
      imageResize();
      $horizontal_bar.empty();
      $horizontal_bar.hide();
      $work_list.css({'width': container_size + 'px', 'marginLeft' : 0});
      $work_item.addClass('bottom-margin');
      $('html, body').css('overflow', 'visible');
    // if window goes big and horizontal bar is hidden -> worklist width becomes containersize
    } else if ($(window).width() >= 1920 && ($('#horizontal-bar:hidden').length > 0)) {
      $work_list.css('width', container_size + 'px');
      $work_item.css('width', '300px');
    }
  };

  function imageResize() {
    var difference = parseInt(($horizontal_bar.offset().top) - ($categories.offset().top));
    var space = difference / 2;
    if(window.mobilecheck() === false){
      $work_item.css('width', space + 'px'); 
    } else if ($(window).width() > 480) {
      $work_item.css('width', space * 0.85 + 'px');
    } else {
      $work_item.css('width', space * 0.95 + 'px');
    }

    if($(window).height() <= 600 && window.mobilecheck() === false) {
      $work_item.css('width', space + 'px');
    } else if($(window).height() <= 600 && $(window).width() > 470 && $(window).width() < 500) {
      $work_item.css('width', space * 1.4 + 'px');
    } else if($(window).height() <= 600 && $(window).width() > 510 && $(window).width() < 580) {
      $work_item.css('width', space * 1.7 + 'px');
    }
    work_item_width = $work_item.width();
    horizontalScroll(work_item_width);
  }

  addScroll();

  //==== CATEGORIES FILTER ===//


  // hide the clickable sorting links
  $('.expanded').hide();
  // hide the featured tag at first
  $('.expanded span:first').hide();
  // hide last slash
  $('span.visible:last').hide();

  // open/close nav
  $('.selection-header').click(function(e) {
    e.preventDefault();
    $('span.visible').show()
    $('span.visible:last').hide();
    // don't remove the slash on the first click of the nav
    if(!removedDiv == "") {
      //$('.'+removedDiv).parent().find('.slash').addClass('visible').show();
    }
    // get width of currentState with the current subheader in place
    //headerWidth = $('.currentState').width();
    //$('.currentState').css({"width":headerWidth});
    //if nav is closed, expand it
    if(!navOpen) {
      $('.expanded').fadeIn('normal');
      $('.first-slash').fadeIn('slow');
      $('.selection-header').addClass('hover');
      navOpen = true;
    } 
    // if nav is closed, close it
    else {
      $('.expanded').fadeOut('normal');
       $('.first-slash').fadeOut('slow');
       $('.selection-header').removeClass('hover');
      navOpen = false;
    }
  });

  if(window.mobilecheck() === false) {
    // mouse over state 
    $('.selection-header')
    .mouseenter(function() {
      $('.expanded').fadeIn('normal');
      $('.icon').addClass('iconOpen');
      $('.line1').addClass('redColor');
      $('.line2').addClass('redColor');
      $('.first-slash').fadeIn('slow');
      //$('.line2').addClass('rotate2');
    })
    // mouse out state 
    $('#categories').mouseleave(function() {
      if(!navOpen) {
        $('.expanded').fadeOut('normal');
        $('.icon').removeClass('iconOpen');
        $('.line1').removeClass('redColor');
        $('.line2').removeClass('redColor');
        $('.first-slash').fadeOut('slow');
        //$('.line2').removeClass('rotate2');
      }
    });
  }

  // Default category to featured on work page load
  $.ajax({
    url: './sorting.php',
    type: 'POST',
    dataType: 'json',
    data: {category: 'featured'}
  });

  // select a link
  $('.selection').click(function(e) {
    e.preventDefault();
    currentDiv = $(this).attr('class').split(' ')[1];

    if(currentDiv == "all") {
      var slashes = [];
        $(".expanded").find(".slash").each(function (e) {
          slashes.push(e);
      });
      length = slashes.length;
      //previous = slashes[length].attr('class');
      //$('.'+slashes[length-1]).hide();
      previous = $('.'+slashes[length]).attr('class');
      console.log(previous);
      $('.slash-social').hide();
      
    } else {
      $('.slash-social').show();
    }
    
    //$('.expanded').fadeOut('normal', function() {
      //$('.currentState').css({"width":"auto"});
      $('.thumbnail-grid').fadeIn('slow');
      $('.'+currentDiv).parent().hide();
      //$('.'+currentDiv).parent().find('.slash').removeClass('visible');
      if(!removedDiv == "") {
        $('.'+removedDiv).parent().show();
      } else {
        $('.expanded span:first').show();
      }
      removedDiv = currentDiv;
      //navOpen = false;
    //});
    var newSelection = $(this).data("current");
    $('.selection-header').find('h4').text(newSelection);
    $('.case_study').css({"display":"none"});
    if(newSelection == "all") {
      $('.case_study').fadeIn(600);
      addScroll();
    } else {
      $('.case_study').each(function() {
        var categories = $(this).data("categories");
        var categoryArr = categories.split(',');
        length = categoryArr.length;
        for(i=0; i < length; i++){
            if(categoryArr[i] == newSelection) {
            $(this).fadeIn(600);
            addScroll();
          }
        }
      });
    }

    // Change session variable that tracks current category through AJAX
    $.ajax({
      url: './sorting.php',
      type: 'POST',
      dataType: 'json',
      data: {category: newSelection}
    });
  });
});

function shiftSlide(initial, num_slide, items_on_screen, horiz_width) {
  if(num_slide === 0) {
    $('#work-list').animate({
      marginLeft: 0 + 'px'
    }, 800);
    $('#current-slide').animate({
      left: '0%'
    }, 800);
  } else {
    var animation_target = initial - parseInt($($('.work-item:visible')[num_slide * (items_on_screen - 1)]).position().left) + 70;
    $('#work-list').animate({
      marginLeft: animation_target + 'px'
    }, 800);
    $('#current-slide').animate({
      left: (num_slide * horiz_width) + '%'
    }, 800);
  }
}