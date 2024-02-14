/**
 * você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
 */

let lista = [];
let frutas =[];
let laticínios = [];
let congelados = [];
let doces = [];
let categoria = "";
let continuar = "";
const fruits = document.getElementById("frutas")

continuar = prompt("Você deseja adicionar uma comida na sua lista de compras? responda com 'sim' ou 'não' ");
while (continuar == "sim"){


/**
 * Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
 */

  comida = prompt("Qual comida você deseja inserir?");
  lista.push(comida);
  console.log(lista);


/**
 * Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante
 */
  categoria = prompt("Selecione, digitando o numero da categoria, em qual das categorias abaixo essa comida se encaixa?\n[1]Frutas\n[2]Laticínios\n[3]Congelados\n[4]Doces")

  if(categoria == 1){
    frutas.push(comida)
    console.log(frutas)
  }
  continuar = prompt("Você deseja adicionar mais comida na sua lista de compras? responda com 'sim' ou 'não' ");
}
/**
 * caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados
 */

if(continuar == 'não'){
  console.log("Lista de compras")
  for(i=0; i < frutas.length; i++){
    console.log("\n Frutas:", frutas[i] )
  }
}
/**
 * Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
 */