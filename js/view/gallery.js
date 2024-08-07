$(function() {
    $('.slick-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.slick-slider img').on({
        mouseenter: function() {
            $(this).addClass('hover-effect');
        },
        mouseleave: function() {
            $(this).removeClass('hover-effect');
        }
    });
    
});