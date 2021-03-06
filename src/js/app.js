$(document).ready(function () {
    $('.carousel').slick({
        arrows: false,
        autoplay: true,
        fade: false,
        autoplaySpeed: 3000,
        speed: 500,
    });
});

$('.explore__slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,

    prevArrow: ".explore__arrow__prev",
    nextArrow: ".explore__arrow__next",

    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});



$('.instruction__container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,

    prevArrow: ".instruction__arrow__prev",
    nextArrow: ".instruction__arrow__next",

    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
]
});