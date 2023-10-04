function selecionar(btn) {
    btn.addEventListener('click', function () {
        var linha = this.closest("tr");
        inputId.value = linha.querySelector(".col-id").innerText;
        inputDesc.value = linha.querySelector(".col-desc").innerText;
        inputPreco.value = linha.querySelector(".col-preco").innerText;

        if(linha.querySelector(".col-tipo").innerText === "Mais Vendidos"){
            inputMais.checked = true;
        }else if(linha.querySelector(".col-tipo").innerText === "Lançamentos"){
            inputLan.checked = true;
        }

        btnHidden();
        hidden = false;
    })
}