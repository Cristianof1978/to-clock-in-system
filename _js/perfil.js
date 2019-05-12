$(function () {

    /**
     * jq que esconde o botão de salvar as atualizações do perfil
     */
    $(".btnSalvarAlteracoesPerfil").hide();

    /**
     * função que deixa editável os campos do formulário
     */
    function editarCampos() {
        $("input").prop("disabled", false);
    }

    /**
     * função de clique que realiza o aparecimento do botão de salvar as atualizações
     */
    $(".btnEditarPerfil").click(function () {
        $(".btnSalvarAlteracoesPerfil").show();
        editarCampos();
    });

    /**
     *VALIDAÇÃO DE SENHAS **************************
     */
    let password = document.getElementById("pass");
    let confPassword = document.getElementById("confirmPass");

    /**
     * função que valida senhas iguais
     */
    function validatePassword() {
        if (password.value !== confPassword.value) {
            confPassword.setCustomValidity("Senhas Diferentes!");
        } else {
            confPassword.setCustomValidity("");
        }
    }

    password.onchange = validatePassword;
    confPassword.onkeyup = validatePassword;
    /**
     * FIM DA VALIDAÇÃO DE SENHAS **********************
     */

});