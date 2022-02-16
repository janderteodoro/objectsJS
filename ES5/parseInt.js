/*
é uma função global e não métodos de classes

Analisa apenas números inteiros dentro de um string. meio que faz a conversão do número que está 
dentro da string, tirando todos os espaços antes e depois se necessário 
*/

const num = ' 23     '; 
const num2 = parseInt(num); // 23 (sem espaços) e do tipo number
console.log(typeof num2); // number 
