
// Slider For Home Hero
let swiperHero = new Swiper('#slider-home-hero', {
    slidesPerView : 1,
    loop : false,
    centeredSlides : false,
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar : {
        el : '.swiper-scrollbar',
    },
    allowTouchMove : true,
});

// Slider For Products
let swiperProducts = new Swiper('#slider-products',{
    breakpoints : {
        576: {
            slidesPerView : 1,
        },
        768: {
            slidesPerView : 2.5,
        },
        992: {
            slidesPerView : 3.5,
        },
    },
    spaceBetween: 20,
    loop : false,
    centeredSlides : false,
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }, 
    scrollbar : {
        el : '.swiper-scrollbar',
    },
    allowTouchMove : true,
});