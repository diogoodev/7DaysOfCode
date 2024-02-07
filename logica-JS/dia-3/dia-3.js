let framework = 0;
let fullstack = 0;
let escolha = 0;
let pergunta = 0;
const carreira = prompt("Qual area de desenvolvimento você pretende seguir? Digite [1] para Front-End e [2] para Back-End")
if(carreira === 1){
  alert("Excelente escolha vamos ver em que você irá se especializar")
  framework = prompt("Digite [1]se você quiser aprender React e [2]se você quiser ou aprender Vue")
  if(framework === 1){
    alert("React é uma excelente escolha!")
    fullstack = prompt(' Perfeito! Agora você deve digitar [1] se quiser seguir se especializando na área escolhida ou digite [2] se quiser seguir se desenvolvendo para se tornar Fullstack')
  }
  else if(framework === 2){
    alert("Vue é uma escolha maravilhosa!")
    fullstack = prompt(' Perfeito! Agora você deve digitar [1] se quiser seguir se especializando na área escolhida ou digite [2] se quiser seguir se desenvolvendo para se tornar Fullstack')
  }
  escolha = prompt('Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?')

  pergunta = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')

  while (pergunta != 'ok') {
    pergunta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite ok para sair')
    alert('Excelente escolha')
  }
}
else if(carreira === 2){
  alert("Excelente escolha vamos ver em que você irá se especializar")
  const framework = prompt("Digite [1] se você quiser aprender C# e [2] se você quiser aprender Java")
  if(framework === 1){
    alert("C#  é uma excelente linguagem parabéns escolha!")
  }
  if(framework === 2){
    alert("Java é uma escolha maravilhosa!")
  }
  

  if(fullstack === 1 ){
    alert('Parabéns você ira se tornar um especialista na linguagem escolhida escolhido')
  } 
  if(fullstack === 2){
    alert('Parabéns você ira se tornar um especialista Fullstack')
  }
  escolha = prompt('Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?')

  pergunta = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')

  while (pergunta != 'ok') {
    pergunta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite ok para sair')
    alert('Excelente escolha')
  }
}



