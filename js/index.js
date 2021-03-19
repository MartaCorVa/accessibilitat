$(document).ready(function () {


    //-------------------------------------------------------------------------------
    // SCROLL
    //-------------------------------------------------------------------------------


    // Comprovar si som a 100px de la posició top per mostrar el botó
    // que du al top de la página
    $(window).scroll(function () {
        var controlArriba = $(".scroll-to-top");
        var desplazamientoActual = $(this).scrollTop();

        // Mostra el botó
        if (desplazamientoActual > 100 && controlArriba.css("display") == "none") {
            controlArriba.fadeIn(500);
        }

        // Amaga el botó
        if (desplazamientoActual < 100 && controlArriba.css("display") == "block") {
            controlArriba.fadeOut(500);
        }

    });

    // Ens du al top de la página
    $(".scroll-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });




    // Si la finestra canvia de resolució canvien les linies que separen els jocs
    // i la imatge del segon lloc es col·loca a una altra posició
    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() <= 1000) {
            $("#horizonImgUp").removeClass("ocult");
            $("#horizonImgDown").addClass("ocult");
        }
        if (win.width() >= 1000) {
            $("#horizonImgDown").removeClass("ocult");
            $("#horizonImgUp").addClass("ocult");
        }
        if (win.width() >= 583) {
            $("#linea2").removeClass("ocult");
            $("#linea1").removeClass("ocult");
        } else if (win.width() >= 404) {
            $("#linea1").removeClass("ocult");
            $("#linea2").addClass("ocult");
        } else if (win.width() <= 404) {
            $("#linea1").addClass("ocult");
            $("#linea2").removeClass("ocult");
        } 
         if (win.width() <= 365) {
            $("#linea2").addClass("ocult");
        }


    });


});