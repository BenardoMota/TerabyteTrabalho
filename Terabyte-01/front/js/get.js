fetch('http://localhost:8080/')
.then(resposta => resposta.json())
.then(produtos => preecherTabela(produtos))
.catch(erro => console.log("Ocorreu um erro") + erro);