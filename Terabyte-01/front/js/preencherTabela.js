function preecherTabela(produtos){
        produtos.forEach(produto => {
        inserirProduto(produto)
        });
    };

    function inserirProduto(produto){
    var novaLinha = document.createElement('tr');
    var colId = document.createElement('td');
    var colImg = document.createElement('td');
    var colDesc = document.createElement('td');
    var colPreco = document.createElement('td');
    var colTipo = document.createElement("td");
    var colSelect = document.createElement('td');

    colId.innerText = produto.id;
    colId.classList.add("col-id");

    var img = document.createElement('img')
    img.src = "data:img/jpg;base64," + produto.img;
    // img.alt = produto.img;
    colImg.classList.add("col-img");
    colImg.appendChild(img);

    colDesc.classList.add("col-desc");
    colDesc.innerText = produto.description;

    colPreco.classList.add("col-preco");
    colPreco.innerText= produto.preco;

    colTipo.classList.add("col-tipo");
    if(produto.tipo === 1){
        colTipo.innerText = "Mais Vendidos";
    }else if (produto.tipo === 2){
        colTipo.innerText = "Lançamentos";
    }
    
    var btnSelect = document.createElement('button');
    btnSelect.classList.add("btn", "btn-success");
    btnSelect.innerText = "selecionar"
    colSelect.appendChild(btnSelect);

    selecionar(btnSelect);

    novaLinha.appendChild(colId);
    novaLinha.appendChild(colImg);
    novaLinha.appendChild(colDesc);
    novaLinha.appendChild(colPreco);
    novaLinha.appendChild(colTipo);
    novaLinha.appendChild(colSelect);

    document.querySelector('tbody').appendChild(novaLinha);

}

