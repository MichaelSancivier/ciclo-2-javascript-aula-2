// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
//const idade = 25;
//const idade = 30;

//console.log(idade); 
//Gera uma mensagem:  Não é possível declarar novamente a variável de escopo de bloco 'idade'.


////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo


{
    //let x = 10;
    //console.log(x); 
}
//console.log(x);

//Se esta dentro do escopo ele devolve 10, se esta fora do escopo ele devolve undefined.


///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

//console.log(x);
//console.log(y);

//console.log(x) Indica que X no esta definida
//console.log(y) resultado = 20


///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
//var a = 5;
//console.log(b);
//let b = 10;


//O console.log(a) devolve undefined
//console.log(b) devolve Cannot access 'b' before initialization -  Não é possível acessar 'b' antes da inicialização.

/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

//var x = 5;
//var x = 10;
//console.log(x); 

//let y = 15;
//let y = 20; 
//console.log(y); 

//Segue o erro: Identifier 'y' has already been declared - O identificador 'y' já foi declarado


//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'eduardo';

//sua lógica para pegar a primeira letra 
const letraInicial = (nomeCompleto[0]);
console.log(letraInicial);



// Obrigado atividade muito boa 👏🏻



