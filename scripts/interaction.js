function toggleMenu(){
    var menu = document.querySelector(".navigation-2 .side-menu").classList.toggle("active");
}

// video contorls
// document.querySelector(".hero-area video").playbackRate = 0.6;



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


// cart popup open/close
var cart_button = document.querySelector(".navigation .options .cart-btn span");
var cart_popup = document.querySelector(".navigation .options .cart-btn .cart-popup");

cart_button.addEventListener('click',function(){
    cart_popup.classList.toggle("active");
})