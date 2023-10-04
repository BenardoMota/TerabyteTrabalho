btnAlterar.addEventListener('click', function () {
    
        alterar();
        setTimeout(() => {
            location.reload();
        }, 100);
    
});

function alterar() {
    const dadosFormulario = new FormData(form);
    fetch("http://localhost:8080/", {

        method: "PUT",
        body: dadosFormulario
    })
        .then(resposta => resposta.json())
        .then(produto => inserirProduto(produto))
        .catch(erro => console.log("Ocorreu um erro ao Cadastrar o produto:" + erro));
}