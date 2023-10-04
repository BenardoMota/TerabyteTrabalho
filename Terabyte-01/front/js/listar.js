let url = "http://localhost:8080/";

function getDadosJson() {
    fetch(url)
        .then(resposta => resposta.json())
        .then(produtos => listarProdutos(produtos))
        .catch(erro => console.log("Ocorreu um erro: " + erro));
}


function listarProdutos(produtos) {
    produtos.forEach(p => {
        if (p.tipo === 1) {
            document.getElementById("mais-vendidos").appendChild(inserirProduto(p));
        } else if (p.tipo === 2) {

            document.getElementById("lancamentos").appendChild(inserirProduto(p));
        }
    })
}

function inserirProduto(p) {
    var divProduto = document.createElement("div");
    divProduto.classList.add("div-produto");

    var img = document.createElement("img");
    img.src = 'data:img.jpg;base64,' + p.img;
    img.alt = p.img;
    divProduto.appendChild(img);

    var textDesc = document.createElement("p");
    textDesc.classList.add("p-descri-produto");
    textDesc.innerText = p.description;
    divProduto.appendChild(textDesc);

    var valor = document.createElement("p");
    valor.classList.add("p-valor");
    valor.innerHTML = '<s>De: R$' + (p.preco).toFixed(2) + '</s> por';
    divProduto.appendChild(valor);

    var avista = document.createElement("p");
    avista.classList.add("p-a-vista");
    avista.innerHTML = 'R$ ' + ((p.preco) * 0.50).toFixed(2) + '<span class="span-a-vista">à vista</span>';
    divProduto.appendChild(avista);

    var parcelado = document.createElement("p");
    parcelado.classList.add("p-parcelado");
    parcelado.innerHTML = '12x de R$ ' + (p.preco / 12).toFixed(2) + 'sem juros';
    divProduto.appendChild(parcelado);

    return divProduto;
}

getDadosJson();