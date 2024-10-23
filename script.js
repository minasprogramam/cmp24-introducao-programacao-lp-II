// categorizar as avaliacoes
// exibir a mensagem da avaliacao

function categorizarAvaliacao(nota) {
    let nota;
    switch (nota) {
        case 1:
            return "Muito ruim"
        case 2:
            return "Ruim"
        case 3:
            return "Médio"
        case 4:
            return "Bom"
        case 5:
            return "Excelente"
        default:
            return "Nota inválida"
    }
}

function mostrarMensagemDaAvaliacao(nota) {
    let categoria = categorizarAvaliacao(nota);
    console.log(`Mensagem de avaliação do cliente: ${categoria}`)
}

mostrarMensagemDaAvaliacao(4)