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



    // Si la finestra canvia de resolució canvia el marge del botò de cada joc
    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() <= 1340) {
            $("button").css({ 'margin-left': '10px' });
        } else {
            $("button").css({ 'margin-left': '60%' });
        }
    });


});