btnRemover.addEventListener('click', function () {
    remover();
    limparCampos();
    btnHidden();
    hidden = true;
});

function remover() {

    if (confirm("Tem certeza que deseja Remover o produto?")) {
        fetch("http://localhost:8080/" + inputId.value, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        removerProduto();
    }
    btnHidden();
    hidden = true;

};

function removerProduto() {
    var ids = document.querySelectorAll(".col-id");
    for (var i = 0; i < ids.length; i++) {
        if (inputId.value === ids[i].innerText) {
            var linha = ids[i].closest("tr");
            linha.remove();
        }
    }
}