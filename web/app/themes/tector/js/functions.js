function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    //remover parrafos vacios
    let parrafosVacios = document.querySelectorAll("p:empty");
    parrafosVacios.forEach(element => {
        element.remove();
    });

    //inicializacion
    const menuButton = document.querySelector(".menu-button");
    //const gridHome = document.querySelector(".grid-home");
    windowDisplay(isMobile());

    //verifica si es mobile
    function isMobile() {
        if(window.screen.width <= 768) {
            return true;
        }
        return false;
    }

    //se activa si cambia el ancho de la pantalla
    window.addEventListener('resize', function(event) {
        let resultado = isMobile();
        windowDisplay(resultado);
    }, true);

    // activa los addeventlisteners correspondientes a la pantalla
    function windowDisplay(resultado) {
        if (resultado) {
            //event listeners de mobile
            menuButton.addEventListener("click",menuMobile);
        } else {
            //event listeners de desktop
            window.addEventListener("scroll",wrapHeader);
        }
        //globales
    }

    //HEADER =========================================================================
    function wrapHeader() {
        let header = document.querySelector("header");
        let logo = header.querySelector(".has-image a img");
        if (document.documentElement.scrollTop >= 70) {
            header.classList.add("scroll-header");
        } else {
            header.classList.remove("scroll-header");
        }
    }

    function menuMobile() {
        let menuMob = document.querySelector(".menu-mobile");
        if(menuButton.classList.contains("menu-activo")) {
            menuButton.classList.remove("menu-activo");
            menuMob.style.left = "-520px";
            menuMob.style.opacity = "0";
        } else {
            menuButton.classList.add("menu-activo");
            menuMob.style.left = "0";
            menuMob.style.opacity = "1";
        }
    }
});