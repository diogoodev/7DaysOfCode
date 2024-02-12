
let framework = 0;

const carreira = prompt("Qual area de desenvolvimento você pretende seguir? Digite [1] para Front-End e [2] para Back-End")
if(carreira == 1){
  alert("Excelente escolha vamos ver em que você irá se especializar")
  framework = prompt("Digite [1]se você quiser aprender React e [2]se você quiser aprender Vue")
}
if(framework == 1){
  alert("React é uma excelente escolha!")
  
}else if(framework == 2){
    alert("Vue é uma escolha maravilhosa!")
  }
if(carreira == 2){
  alert("Excelente escolha vamos ver em que você irá se especializar")
  framework = prompt("Digite [1] se você quiser aprender C# e [2] se você quiser aprender Java")

  if(framework == 1){
    alert("C#  é uma excelente linguagem parabéns escolha!")
  }
  if(framework == 2){
    alert("Java é uma escolha maravilhosa!")
  }
}

let fullstack = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack ? Digite [1] para Especialização e [2] para Fullstack")
 if(fullstack == 1 ){
    alert('Parabéns você ira se tornar um especialista na linguagem escolhida escolhido')
  } else if(fullstack == 2){
    alert('Parabéns você ira se tornar um especialista Fullstack')
  }


let escolha = prompt('Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?')

let pergunta = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')
alert('Excelente escolha')

while (pergunta != 'ok') {
  pergunta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite ok para sair')
    alert('Excelente escolha')
}


