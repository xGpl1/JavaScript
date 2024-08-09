let frutas = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let addMais = 'sim';
while (addMais !== 'não') {
    if (frutas.length === 0 && doces.length === 0 && congelados.length === 0) {      
        addMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'.");
    } else {
        addMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não' ou 'remover'.");

    }

    while (addMais !== 'sim' && addMais !== 'não' && addMais !== 'remover') {
        alert('Comando não reconhecido!');
        addMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda com 'sim' ou 'não'.");
    }
    if (addMais === 'não') {
        break;
    }

    if(addMais === 'sim') {
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
    } else if (addMais === 'remover') {
        if(frutas.length === 0 && doces.length === 0 && congelados.length === 0) {
            alert(`A lista está vazia!`);
        } else {
            remover = prompt(`Lista de Compras:\n Frutas: ${frutas}\n Doces: ${doces}\n Congelados: ${congelados}\nQual produto você deseja remover?`);
            if(frutas.indexOf(remover) != -1) {
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(doces.indexOf(remover) != -1) {
                doces.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(congelados.indexOf(remover)!= -1) {
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possivel encotrar o item dentro da lista!`)
            }
        }
    }    
}

alert(`Lista de Compras:\n Frutas: ${frutas}\n Doces: ${doces}\n Congelados: ${congelados}`);