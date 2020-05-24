// *********************** SIDE MENU INTERACTION **************************
var hamburger = document.querySelector(".navigation-2 .side-menu .hamburger");
if(hamburger){
    hamburger.addEventListener("click",()=>{
        if(sideMenuTimeline.progress() === 0){
            sideMenuTimeline.play();
        }else if(sideMenuTimeline.progress() ===  1){
            sideMenuTimeline.reverse();
        }
        
    })
}
// ****************************************************************************


// ******************************* HOME PAGE ***********************************
// WHAT WE DO
if(whatWeDo){
    const options = {
        rootMargin : screen.width > 768 ? "-250px" : "-120px",
    };
    const whatWeDoObserver = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting){
            whatWeDoTimeline.play();
        } else{
            whatWeDoTimeline.reverse();
        }
    } , options);   
    whatWeDoObserver.observe(whatWeDo);
}

// TOP RATED PRODUCTS
if(topRatedProducts){
    const options = {
        rootMargin : screen.width > 768 ? "-200px" : "-130px",
    };
    const topRatedProductsObserver = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting){
            topRatedProductsTimeline.play();
        } else{
            topRatedProductsTimeline.reverse();
        }
    } , options);   
    topRatedProductsObserver.observe(topRatedProducts);
}



// *******************************************************************************

// Medicine Quantity Change
var plus = document.querySelector(".medicine-details .product-information .quantity .plus");
var minus = document.querySelector(".medicine-details .product-information .quantity .minus");
var quantity = document.querySelector(".medicine-details .product-information .quantity input");

if(quantity && plus && minus){
    quantity.value = 1;


    plus.addEventListener('click',increase_quantity);
    minus.addEventListener('click',decrease_quantity);

    function increase_quantity(){
        quantity.value = parseInt(quantity.value) + 1;
    }
    function decrease_quantity(){
        if(parseInt(quantity.value) > 1) quantity.value = parseInt(quantity.value) - 1
    }
} 