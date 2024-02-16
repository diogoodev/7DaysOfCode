let lista = [];
let frutas =[];
let laticinios = [];
let congelados = [];
let doces = [];
let categoria = "";
let continuar = "";
const frutashtml = document.querySelector("#frutas")
const laticinioshtml = document.querySelector("#laticinios")
const congeladoshtml = document.querySelector("#congelados")
const doceshtml = document.querySelector("#doces")

continuar = prompt("Você deseja adicionar uma comida na sua lista de compras? responda com 'sim' ou 'não' ");
while (continuar != 'não'){

  comida = prompt("Qual comida você deseja inserir?");
  lista.push(comida);
  console.log(lista);

  categoria = prompt("Selecione, digitando o numero da categoria, em qual das categorias abaixo essa comida se encaixa?\n[1]Frutas\n[2]Laticínios\n[3]Congelados\n[4]Doces")

  if(categoria == 1){
    frutas.push(comida)
    console.log(frutas)
  }else if(categoria == 2){
    laticinios.push(comida)
    console.log(laticinios)
  }else  if(categoria == 3){
    congelados.push(comida)
    console.log(congelados)
  }else if(categoria == 4){
    doces.push(comida)
    console.log(doces)
  }else{
    alert("invalido")
  }
  continuar = prompt("Você deseja adicionar mais comida na sua lista de compras? responda com 'sim' ou 'não' ");
}

const listaFrutas = "Frutas: " + frutas.join(", "); 
frutashtml.innerText = listaFrutas;

const listaLaticinios = "Laticínios: " + laticinios.join(", "); 
laticinioshtml.innerText = listaLaticinios;

const listaCongelados = "Congelados: " + congelados.join(", "); 
congeladoshtml.innerText = listaCongelados;

const listaDoces = "Doces: " + doces.join(", "); 
doceshtml.innerText = listaDoces;

if(continuar == 'não'){
  console.log("Lista de compras")
      console.log("Frutas:", frutas.join())
      console.log("Laticínios: ", laticinios.join())
      console.log("Congelados:", congelados.join())
      console.log("Doces:", doces.join())
  }
