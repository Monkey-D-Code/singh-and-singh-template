// DISPLAYING PRELOADER WHILE LOADING
const preloader = document.querySelector(".pre-loader");
document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
        setInterval(()=>{
            document.body.style.overflow = "auto";
            preloader.style.display = "none";
        }, 500)
        
    }else{
        document.body.style.overflow = "hidden";
        preloader.style.display = "block";
    }
};