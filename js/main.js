$(function ($) {
    "use strict";

    //veno-box js
    $('.venobox').venobox();

    var $window = $(window);
    var html_body = $('html, body')


    //for scroll bottom to top js here
    if ($('.totop').length) {
        var scrollTrigger = 150, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.totop').addClass('show');
                } else {
                    $('.totop').removeClass('show');
                }
            };

        backToTop();
        $window.on('scroll', function () {
            backToTop();
            if ($window.scrollTop()) {
                $("#mainHeader").addClass('stiky');
            } else {
                $("#mainHeader").removeClass('stiky');
            }
        });

        $('.totop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    // 数字自增动画
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

  // banner slider
  var $mainSlider = $('.silder');

  $mainSlider.owlCarousel({
  loop: true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  nav: true,
  dots:false,
  autoplay: true,
  autoplayTimeout: 3000,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 450,
  responsive: {
      0: {
          items: 1,
          nav:false
      },
      768: {
          items: 1,
          nav:false,
      },
      960: {
          items: 1,
          nav:false
      },
      1250: {
          items: 1
      },
      1920: {
          items: 1
      }
  }
});

    // testimonialSlider
    $('.testimonialSlider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
	// 新闻动态 tab也切换
	$('#newsDynamic div.tabs').find('a:eq(0)').addClass('current');
	
	$('div.tabs a').click(function (g) { 
		var tab = $('#newsDynamic .tabs'); 
		var	index = $(this).index();
		var tab_content = $('#newsDynamic .tab-content');
		tab.find('a').removeClass('current');
		$(this).addClass('current');
		
		tab_content.find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab_content.find('div.tabs_item:eq(' + index + ')').slideDown();
		
		g.preventDefault();
	});
	
	
	// 我们的服务 初始化 第一个 状态
	$('.accordionbox-item').eq(0).stop().animate({width: '5.66rem'}, 'slow');
	$('.accordionbox-item').hover(function() {
		// 获取索引
		var _index = $(this).index();
		$(this).stop().animate({width: '5.66rem'}, 'slow')
		$(this).siblings().stop().animate({width: '1.34rem'}, 'slow')
		// $(this).addClass('curr').stop().animate({width: '5.66rem'}, 'slow')
		// 	.siblings()
		// 	.stop()
		// 	.animate({
		// 		width: '1.34rem'
		// 	}, 'slow')
		// 	.removeClass('curr');
	}, function() {
		//移出
	
	})
	 //我们的团队
	$('#ourTeam-carousel').owlCarousel({
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots:false,
		autoplayTimeout: 3000,
		smartSpeed: 450,
		responsive: {
		    0: {
		        items: 2,
		        nav:false
		    },
		    768: {
		        items: 2,
		        nav:false,
		    },
		    960: {
		        items: 4,
		    },
		    1250: {
		        items: 4
		    },
		    1920: {
		        items: 4
		    }
		}
	});
	
	
	// 关于我们
	(function(){
		// nav tab
		// 初始化按钮样式
		$('.aboutUs-info-navbox').find('a:eq(0)').addClass('active');
		$('.aboutUs-info-navbox a').click(function(g){
			$('.aboutUs-info-navbox a').removeClass('active');
			$(this).addClass('active');
			
			var	index = $(this).index();
			$('.aboutUs-tab-centent .aboutUsTab_items').fadeOut();
			setTimeout(function(){
				$('.aboutUs-tab-centent .aboutUsTab_items').eq(index).fadeIn();
			},500)
			
			g.preventDefault();
		})
    })();
    // 加入我们手风琴模式
	(function(){
		// 初始化按钮样式
        $('#recruitment').find('.tabs_items:eq(0)').addClass('active');
        $('#recruitment').find('a.tabs_items-title:eq(0)').addClass('active');
        $('#recruitment').find('.tabs_items-title .r-1:eq(0)').html('-');
		$('#recruitment a.tabs_items-title').click(function(g){
            $('.aboutUs-info-navbox a').removeClass('active');
            $('#recruitment a.tabs_items-title').removeClass('active');
            $('#recruitment .tabs_items-title .r-1').html('+');
            $('#recruitment .tabs_items').removeClass('active');
			$(this).addClass('active');
            $(this).parent('.tabs_items').addClass('active');
            $(this).find('.r-1').html('-');
            
			g.preventDefault();
		})
	})();
	
}(jQuery));