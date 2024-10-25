// Passo 1: Criar o objeto com as propriedades iniciais
const historicoMusical = {
    nomeCliente: "Ana Souza",
    idadeCliente: 25,
    nomeMusica: "Blinding Lights",
    nomeArtista: "The Weeknd",
    quantidadeReproducoes: 5
};

console.log("Passo 1:", historicoMusical);

// Passo 2: Adicionar a propriedade 'generoMusical'
historicoMusical.generoMusical = "Pop";
console.log("Passo 2:", historicoMusical);
// ou 
const historicoMusical2 = {
    nomeCliente: "Ana Souza",
    idadeCliente: 25,
    nomeMusica: "Blinding Lights",
    nomeArtista: "The Weeknd",
    quantidadeReproducoes: 5,
    generoMusical: "Pop"
};

// Passo 3: Atualizar a quantidade de reproduções (incrementar em 1)
historicoMusical.quantidadeReproducoes += 1;
console.log("Passo 3:", historicoMusical);
// ou 
const historicoMusical3 = {
    nomeCliente: "Ana Souza",
    idadeCliente: 25,
    nomeMusica: "Blinding Lights",
    nomeArtista: "The Weeknd",
    quantidadeReproducoes: 6,
    generoMusical: "Pop"
};