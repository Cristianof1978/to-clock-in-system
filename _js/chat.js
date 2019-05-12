$(function () {

    /**
     * função que limpa o textarea ao enviar uma mensagem
     */
    function limparTextarea(){
        $(".box-send").val("");
    }

    /**
     * função que realiza o autoscroll ao enviar uma mensagem
     */
    function autoScroll() {
        let cl = $('.chatlogs');
        cl.prop("scrollTop", cl.prop("scrollHeight"));
    }

    /**
     * função que manipula o DOM e insere mensagem no chat
     */
    function enviarMensagem() {
        let mensagem = $(".box-send").val();
        $(".chatlogs").append("<div class=\"chat self\">\n" +
                                    "<div class=\"user-photo\"><img src=\"../_img/user_icon.png\"></div>\n" +
                                    "<div class=\"box-message\">\n" +
                                        "<span class=\"chat-user\">Carlos da Silva</span>\n" +
                                        "<p class=\"chat-message\">" + mensagem + "</p>\n" +
                                    "</div>\n" +
                              "</div>");
    }

    /**
     * função de "click" que envia mensagem ao clicar no botão de envio
     */
    $(".send-msg").on("click", function () {
        enviarMensagem();
        limparTextarea();
        autoScroll();
    });

    /**
     * função de "keypress" que envia mensagem ao pressionar a tecla enter
     */
    $(".box-send").on("keypress", function(e){
        if (e.keyCode === 13) {
            e.preventDefault();
            enviarMensagem();
            limparTextarea();
            autoScroll();
        }
    });

});