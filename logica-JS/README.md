# Day 01 of 07

Ao lidar com Javascript, é comum enfrentar problemas relacionados aos tipos de variáveis ao comparar seus valores. Eu já enfrentei esse desafio muitas vezes!

Em linguagens de programação compiladas, como Java e C#, esses problemas são detectados durante a compilação, proporcionando ao desenvolvedor um aviso claro do erro.

No entanto, em Javascript, esses erros podem passar despercebidos, já que o código não passa por um processo de compilação. Em outras palavras, os erros só se manifestam durante a execução do código.

A parte mais confusa para quem está iniciando a jornada na lógica de programação com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo de maneira implícita (automática), afetando variáveis que eram Strings, Numbers, Objects, etc.

Isso resulta em comportamentos estranhos, como nos exemplos abaixo, todos retornando `true`:

```javascript
console.log(false == '0');
console.log(null == undefined);
console.log(" \t\r\n" == 0);
console.log(' ' == 0);
```

Isso pode parecer não fazer muito sentido.

(Você pode testar tudo isso no seu navegador, clicando com o botão direito, escolhendo a opção "Inspecionar" e indo para a aba "Console". Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam `true`).

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

```javascript
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm === Number(stringUm)) {
  console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não têm o mesmo valor');
}

if (numeroTrinta === Number(stringTrinta)) {
  console.log('As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo');
}

if (numeroDez === Number(stringDez)) {
  console.log('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroDez e stringDez não têm o mesmo valor');
}
```
