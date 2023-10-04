function limparCampos() {
    inputId.value = "";
    inputImg.value = "";
    inputDesc.value = "";
    inputPreco.value = "";
}

let form = document.querySelector("form");

function btnHidden() {
    if (hidden) {
        btnAlterar.classList.toggle("visually-hidden");
        btnRemover.classList.toggle("visually-hidden");
        btnCancelar.classList.toggle("visually-hidden");
        btnCadastrar.classList.toggle("visually-hidden");
    }
}

function alerta() {
    if (inputImg.files.length === 0 || inputDesc.value.trim() === '' || inputPreco.value.trim() === '' || inputMais.checked === false && inputLan.checked === false) {
        alert("Todos os campos devem ser preenchidos!");
        return true;
    }
    return false; 
}
btnCancelar.addEventListener('click', function(){
    hidden = true;
    btnHidden();
});
