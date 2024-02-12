alert("Vamos jogar o jogo da advinha");
alert("Vou escolher um numero entre 0 e 10, tente acertar!");

const numero_aleatorio = Math.floor(Math.random() * (10 - 0 + 1));
console.log(numero_aleatorio);

let chute = prompt("Pronto, qual o valor que você deseja chutar?");

for(let j = 2; j >= 0; j--){
  if(j == 0){
    alert(`Suas tentativas esgotaram o número inicial era: ${numero_aleatorio}`)
    break;
  } else if( chute != numero_aleatorio){
    chute = prompt(`Oh não, você errou agora você só tem mais ${j} tentativas, insira um novo chute: `)
    console.log(j)
  }
  if(chute == numero_aleatorio){
    alert("Parabéns, você é bom acertou!")
    break;
  }
}

