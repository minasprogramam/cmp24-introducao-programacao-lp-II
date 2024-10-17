
// Instruções:

// Faça um programa que receba um código de status de pedido 
// (ex.: "PENDENTE", "EM_ANDAMENTO", "ENVIADO", "ENTREGUE", e "CANCELADO") como entrada. 

// Utilize switch case para verificar o código de status e imprimir a mensagem correspondente 
// (ex.: "Seu pedido está em andamento", "Seu pedido foi entregue"). 

// Se o código de status não corresponder a nenhum dos casos previstos, 
// imprima uma mensagem indicando que o status do pedido é inválido.

let statusDoPedido = "CANCELADO"

switch (statusDoPedido) {
    case "PENDENTE":
        console.log("Notificação: O pagamento da sua compra se encontra pendente, gata")
        break
    case "EM_ANDAMENTO":
        console.log("Notificação: Pagamento aprovado! Sua entrega está em processamento")
        break
    case "ENVIADO":
        console.log("Notificação: Sua compra foi enviada")
        break
    case "CANCELADO":
        console.log("Notificação: Seu pedido ta canceladissssiiimoo")
        break
    case "ENTREGUE":
        console.log("Notificação: Seu pedido foi entregue")
        break
    default:
        console.log("Notificação: O status do seu pedido é inválido ou ainda não foi mapeado pela nossa equipe")
}
