// ************************ SIDE MENU *********************************
const sideMenuTimeline = gsap.timeline({paused : true});
sideMenuTimeline.to(".navigation-2 .side-menu",{
    right : "-1px",
    duration : 0.05,
    ease : "ease",
}).from(".navigation-2 .side-menu ul li" , {
    opacity : 0,
    x : "250px",
    duration : 0.06,
    stagger : 0.04,
})
// *********************************************************************

// ****************** NAVIGATION MENU **********************************
gsap.from(".navigation-2 .search-bar .brand img" , {
    duration : 2,
    width : "50px",
    ease : "elastic"
});
gsap.from(".navigation-2 .search-bar .search" , {
    duration : 1,
    y : "-100px",
    opacity : 0,
    ease : "ease",
    delay : 1,
});

// ***********************************************************************

// ********************* HOME PAGE *************************************

// SLIDER
var no_of_slides = document.querySelectorAll(".hero-slider .slide-container .slide").length;
var slideTimeline = gsap.timeline({delay  :1 ,repeat : -1 , yoyo : true});
var slide_width = document.querySelector(".hero-slider").clientWidth;

if(no_of_slides){
    slideTimeline.to(".hero-slider .slide-container" , {
        x : `-${slide_width * (no_of_slides - 1)}px` , 
        duration : (no_of_slides * 3),
        ease : "none",
    });

}

// WHAT WE DO
const whatWeDo = document.querySelector(".our-services");
const whatWeDoTimeline = gsap.timeline({paused : true});
if(whatWeDo){
    whatWeDoTimeline.from(".our-services .lead-img",{
        opacity : 0,
        duration : 0.6,
        ease : "ease",
    }).from(".our-services .list .service",{
        scale : 0,
        duration : 0.3,
        stagger : 0.2
    },"-=0.3")
}

// TOP RATED PRODUCTS
const topRatedProducts = document.querySelector(".top-rated-products");
const topRatedProductsTimeline = gsap.timeline({paused : true});
if(topRatedProducts){
    topRatedProductsTimeline.from(".top-rated-products svg",{
        scaleX : 0,
        transformOrigin : "top left",
        duration : 0.8,
        ease : Power1.ease,
    }).from(".top-rated-products .heading",{
        scale : 0,
        duration : 0.6,
        ease : "elastic",
    },"-=0.6").from(".top-rated-products .product-list .single-product",{
        scale : 0,
        duration : 0.4,
        ease : Power2.ease,
        stagger : 0.2
    },"-=0.1")
}


// **********************************************************************