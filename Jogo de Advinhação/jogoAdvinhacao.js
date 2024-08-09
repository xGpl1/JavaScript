const numeroAdv = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++) {
    chute = prompt('Tente adivinhar o número de 0 a 10:');
    if(chute == numeroAdv) {
        alert(`Parabéns, você acertou! O número era ${numeroAdv}.`);
        acertou = true;
        break;
    }
    alert("Errou!");
}

if(!acertou) {
    alert(`Infelizmente você não acertou. O número era ${numeroAdv}`);
}