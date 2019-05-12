$(function () {

    let menuEstendido = true;
    let relatorioEstendido = false;

    /**
     * função que estende o menu
     */
    function expandirMenu() {
        $("nav").animate({width: '20%'}, "fast");
        $(".content-right-section").animate({"width": '80%',
            "margin-left": '20%'}, "fast");
        $(".fa-angle-double-right").animate({"margin": '23% 20.3%'}, 'fast')
            .removeClass("fas fa-angle-double-right").addClass("fas fa-angle-double-left");
        $(".icon-box-flex").removeClass("icon-box-flex").addClass("icon-box").hide();
        $(".menu-box").show();
        menuEstendido = true;
    }

    /**
     * função que reduz o menu
     */
    function retrairMenu() {
        $("nav").animate({width: '5%'}, "fast");
        $(".content-right-section").animate({"width": '95%',
            "margin-left": '5%'}, "fast");
        $(".fa-angle-double-left").animate({"margin": '23% 5.3%'}, 'fast')
            .removeClass("fas fa-angle-double-left").addClass("fas fa-angle-double-right");
        $(".menu-box").hide();
        $(".icon-box").removeClass("icon-box").addClass("icon-box-flex").show();
        menuEstendido = false;
    }

    /**
     * função que estende o botão relatório
     */
    function estenderBtnRelatorio() {
        $(".relatorio").animate({"height": "60px"}, "fast");
        $(".relatorio-folhaPonto").css({"display": "block"});
        relatorioEstendido = true;
    }

    /**
     * função que reduz o botão relatório
     */
    function retrairBtnRelatorio() {
        $(".relatorio").animate({"height": "45px"}, "fast");
        $(".relatorio-folhaPonto").css({"display": "none"});
        relatorioEstendido = false;
    }

    /**
     * função de clique que chama as funções de estender e reduzir o menu
     */
    $(".fa-angle-double-left").on("click", function () {
        if (menuEstendido === true) {
            retrairMenu();
        } else {
            expandirMenu();
        }
    });

    /**
     * função de hover que chama as funções de estender e reduzir o botão relatório
     */
    $(".relatorio").hover(function () {
        if (relatorioEstendido === false) {
            estenderBtnRelatorio();
        } else {
            retrairBtnRelatorio();
        }
    });

});