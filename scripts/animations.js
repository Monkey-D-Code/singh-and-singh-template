// ************************ SIDE MENU *********************************
const sideMenuTimeline = gsap.timeline();
sideMenuTimeline.to(".navigation-2 .side-menu",{
    x : "0px",
})


// *********************************************************************

// ********************* HOME PAGE *************************************
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

var no_of_slides = document.querySelectorAll(".hero-slider .slide-container .slide").length;
var slideTimeline = gsap.timeline({delay  :1 ,repeat : -1 , yoyo : true});
var slide_width = document.querySelector(".hero-slider").clientWidth;

if(no_of_slides){
    slideTimeline.to(".hero-slider .slide-container" , {
        x : `-${slide_width * (no_of_slides - 1)}px` , 
        duration : (no_of_slides * 3),
        ease : "none",
    });
    
    slideTimeline.play();
}


// **********************************************************************