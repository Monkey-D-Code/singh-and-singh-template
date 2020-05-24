// DISPLAYING PRELOADER WHILE LOADING
const preloader = document.querySelector(".pre-loader");
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        setInterval(()=>{
            document.body.style.overflow = "auto";
            preloader.style.display = "none";
        }, 2000)
        
    }else{
        document.body.style.overflow = "hidden";
        preloader.style.display = "block";
    }
};