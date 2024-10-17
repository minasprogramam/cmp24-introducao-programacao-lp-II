let categoriaCliente = 'bronze'
let valorCompra = 10000
let desconto

switch (categoriaCliente) {
    case 'bronze':
        desconto = 0.05
        break
    case 'prata':
        desconto = 0.1
        break
    case 'premium': 
        desconto = 0.15
        break
    case 'super premium minas special':
        desconto = 0.5
        break
    default:
        desconto = 0
}

let valorFinal = ( valorCompra - (valorCompra * desconto))
console.log(`Com o desconto, o valor final da sua compra é de ${valorFinal}`)

console.log("Com o desconto, o valor final da sua compra é de " + valorFinal)