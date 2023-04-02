function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    const gridHome = document.querySelector(".grid-home");

    //eventlisteners
    if (document.body.classList.contains('home')) {
        window.addEventListener("scroll",showGridHome);
    }
    

    function showGridHome() {
        if(elementInView(gridHome, 30)) {
            gridHome.classList.add("grid-home-scroll");
        }
    }
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
          elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
});