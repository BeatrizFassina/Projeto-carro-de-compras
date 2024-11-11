let valorTotal;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    
    if (!produto || produto.trim() ===""){
        alert("Por favor selecione um produto.");
        return
    }

    if (isNaN(quantidade) || quantidade <= 0){
        alert("Por favor coloque uma quantidade válida.");
        return
    }
    
    let nomeProduto = produto.split('-')[0];
    let valorIndividual = produto.split('R$')[1];
    let precoSubtotal = quantidade * valorIndividual;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoSubtotal}</span>
    </section>`;

    valorTotal = valorTotal + precoSubtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;

    document.getElementById('quantidade').value = '';    
}

function limpar() {
valorTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

}