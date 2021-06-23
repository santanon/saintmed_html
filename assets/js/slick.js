$(function() {
    if ($('#list_announcement').length) {

        var time = 8;
        var $bar,
            $slick,
            isPause,
            tick,
            percentTime;
        $slider = $('#list_announcement');

        if ($slider.length) {
            var currentSlide;
            var sliderCurrent;
            var sliderCurrent = document.createElement('div');
            sliderCurrent.classList.add('slider_current');

            var slidesCount;
            var sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slider_counter');
            
            var updateSliderCounter = function(slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;

                slidesCurrent = slick.slideCurrent;
                $(sliderCurrent).html(currentSlide.toString().padStart(2, '0'))
                
                slidesCount = slick.slideCount;
                $(sliderCounter).html(slidesCount.toString().padStart(2, '0'))
            };

            $slider.on('init', function(event, slick) {
                $slider.append(sliderCurrent);
                $slider.append(sliderCounter);
                updateSliderCounter(slick);
            });

            $slider.on('afterChange', function(event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });
        }

        $slider.slick({
            dots: false,
            infinite: true,
            arrows: true,
            draggable: true,
            touchMove: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        $bar = $('.slick-progress .progress');

        $('.slick-container').on({
            mouseenter: function() {
                isPause = true;
            },
            mouseleave: function() {
                isPause = false;
            }
        });

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            isPause = false;
            tick = setInterval(interval, 10);
        }
        
        function interval() {
            if(isPause === false) {
            percentTime += 1 / (time+0.1);
            $bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
                {
                $slider.slick('slickNext');
                    startProgressbar();
                }
            }
        }
        
        function resetProgressbar() {
            $bar.css({
                width: 0+'%' 
            });
            clearTimeout(tick);
        }
        startProgressbar();

        $('.slick-arrow').click(function () {
            startProgressbar()
        });

    }
});