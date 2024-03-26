$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 790,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});