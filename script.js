// declaramos a funcao
function calcularValorPedido(valorItens, taxaEntrega) {
    let valorTotal = valorItens + taxaEntrega
    // retorna o valor total que é a soma dos parametros
    return valorTotal
}

// chamei minha funcao e armazenei o retorno dentro de uma variavel
let valorTotalDoPedidoCalculado = calcularValorPedido(5000, 53894579827)

// imprimi o valor da variavel
console.log(`O valor total do pedido é de RS ${valorTotalDoPedidoCalculado}`)