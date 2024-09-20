// Exibe uma mensagem no console
console.log("Bom dia!");

// Declaração de variáveis:
// 'var', 'let' e 'const' são maneiras de declarar variáveis em JavaScript.
// 'let' e 'const' são mais modernas e seguras de usar que 'var'.

// Array (lista de itens) chamado 'mercado'
let mercado = [
  "Picanha", // Índice 0
  "Carvão", // Índice 1
  "Farofa", // Índice 2
  "Vinagrete", // Índice 3
  "Pão de alho", // Índice 4
  "Maionese", // Índice 5
];

// Mostra no console uma frase dizendo que não vai levar o último item
console.log("Não vou levar o " + mercado[5]);

// Métodos de array:
// length = mostra o número de itens no array
console.log("Comprimento " + mercado.length);

// push = adiciona um item no final do array
mercado.push("Coca Cola");
console.log(mercado); // Exibe o array atualizado

// Outro array chamado 'compras'
let compras = [
  "Macbook",
  "iPhone",
  "iWatch",
  "iPad",
  "Almoço",
  "Perfume",
];

// unshift = adiciona um item no começo do array
compras.unshift("Colar de Rubi");
console.log(compras); // Exibe o array com o novo item no começo

// pop = remove o último item do array
compras.pop();
console.log(compras); // Exibe o array após remover o último item

// shift = remove o primeiro item do array
compras.shift();
console.log(compras); // Exibe o array após remover o primeiro item
