let frutas = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let addMais = 'sim';
while (addMais !== 'não') {

    addMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'.");

    while (addMais !== 'sim' && addMais !== 'não') {
        alert('Comando não reconhecido!');
        addMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'.");
    }
    if (addMais === 'não') {
        break;
    }

comida = prompt('Qual comida você deseja inserir?');
categoria = prompt("Qual a categoria dessa comida ? 'frutas', 'doces' ou 'congelados'? ");

if (categoria === 'frutas') {
    frutas.push(comida);
} else if (categoria === 'doces') {
    doces.push(comida);
} else if (categoria === 'congelados') {
    congelados.push(comida);
} else {
    alert('Essa categoria não foi definida.');
}
}

alert(`Lista de Compras:\n Frutas: ${frutas}\n Doces: ${doces}\n Congelados: ${congelados}`);