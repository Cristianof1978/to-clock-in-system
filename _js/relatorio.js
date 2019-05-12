$(function () {

    let selecionaTudo = false;
    let selecionado = false;

    /**
     * função de clique que seleciona todos os usuários
     */
    $("th.col-icon").on("click", function () {
        if (selecionaTudo === false) {
            $(this).empty().append("<i class=\"fas fa-check-circle\"></i>");
            $("td.col-icon").empty().append("<i class=\"fas fa-check-circle\"></i>");
            selecionaTudo = true;
        } else {
            $(this).empty().append("<i class=\"far fa-circle\"></i>");
            $("td.col-icon").empty().append("<i class=\"far fa-circle\"></i>");
            selecionaTudo = false;
        }
    });

    /**
     * função de clique que seleciona apenas um usuário
     */
    $("td.col-icon").on("click", function () {
        if (selecionado === false) {
            $(this).empty().append("<i class=\"fas fa-check-circle\"></i>");
            selecionado = true;
        } else {
            $(this).empty().append("<i class=\"far fa-circle\"></i>");
            selecionado = false;
        }
    });

});