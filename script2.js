// Função para determinar o tipo de cliente
function tipoCliente(quantidadeCompras) {
    switch (true) {
        case (quantidadeCompras === 0):
            return "Novo Cliente";
        case (quantidadeCompras >= 1 && quantidadeCompras <= 5):
            return "Cliente Regular";
        case (quantidadeCompras >= 6 && quantidadeCompras <= 10):
            return "Cliente VIP";
        case (quantidadeCompras > 10):
            return "Cliente Super VIP";
        default:
            return "Tipo desconhecido";  // Se for um valor inválido
    }
}

// Função para calcular o desconto baseado no tipo de cliente
function calcularDescontoBaseadoNoTipoDoCliente(tipoDoCliente) {
    switch (tipoDoCliente) {
        case "Novo Cliente":
            return 5;  // 5% de desconto
        case "Cliente Regular":
            return 15; // 15% de desconto
        case "Cliente VIP":
            return 25; // 25% de desconto
        case "Cliente Super VIP":
            return 60; // 60% de desconto
        default:
            return 0;  // Sem desconto
    }
}

// Função para calcular o valor final com o desconto aplicado
function calcularValorFinal(valorDoPedido, quantidadeCompras) {

    // Aqui mudamos o nome da variável para tipoDoCliente
    let tipoDoCliente = tipoCliente(quantidadeCompras);
    let desconto = calcularDescontoBaseadoNoTipoDoCliente(tipoDoCliente);

    // Calcula o valor final aplicando o desconto
    let valorFinal = valorDoPedido - (valorDoPedido * (desconto / 100));

    return valorFinal;
}

// Teste: Calcular o valor final para um pedido de 500 com 0 compras
console.log(calcularValorFinal(500, 0));  // Saída: 475 (5% de desconto)
