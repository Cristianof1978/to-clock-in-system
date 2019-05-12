$(function () {

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

});