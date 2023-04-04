function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    //inicializacion
    const menuButton = document.querySelector(".menu-button"),
          provincia = document.querySelector("#provincia"),
          localidad = document.querySelector("#localidad"),
          gMap = document.querySelector("#g-map");
    
    provincia.addEventListener('change', getLocalidad);
    localidad.addEventListener('change', moveMap);

    

    //se activa si cambia el ancho de la pantalla
    window.addEventListener('resize', function(event) {
        let resultado = isMobile();
        windowDisplay(resultado);
    }, true);

    windowDisplay(isMobile());

    //verifica si es mobile
    function isMobile() {
        if(window.screen.width <= 768) {
            return true;
        }
        return false;
    }

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


    //product carousel
    var carousel = tns({
        container: '.carousel',
        items: 1,
        slideBy: 1,
        autoplay: true,
        nav: false,
        mouseDrag: true,
        controls: false,
        autoplayButtonOutput: false,
        responsive: {
            640: {
              items: 2
            },
            992: {
              items: 3
            },
            1200: {
              items: 4
            }
        }
    });






    // Google Maps
    function getLocalidad() {
        let localidades = document.querySelectorAll("#localidad option:not(#default-option)");
        localidades.forEach(element => {
            if (element.className == provincia.value) {
                element.removeAttribute("disabled");
                element.style.display = "block";
            } else {
                element.setAttribute("disabled",true);
                element.style.display = "none";
            }
        });
    }
    function moveMap() {
        let lat = document.getElementById(localidad.value).getAttribute("data-lat"),
            lng = document.getElementById(localidad.value).getAttribute("data-lng");

        let latlng = new google.maps.LatLng(lat, lng);
        marker.setPosition(latlng);
        map.panTo(latlng);
    }

    var map = new google.maps.Map(document.getElementById("g-map"), {
        center: { lat: -31.406571717983283, lng: -64.1909054930338},
        zoom: 15,
    });

    var infowindow = new google.maps.InfoWindow({
        content: '<p class="info-window">Holcim</p>',
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-31.406571717983283,-64.1909054930338),
        map: map
    })  
    infowindow.open(map, marker);

});