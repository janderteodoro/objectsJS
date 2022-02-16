/*
Vai fazer basicamente a mesma coisa do parseInt, mas ele também encontar números de ponto 
flutuantes. Ou seja se deseja encontrar um número inteiro dentro de uma string, utilize 
parteInt, se deseja encontrar um número decimal, utiliza parseFloat
*/

const num = ' 23.4   '; 
const num3 = parseFloat(num); // 23.4
console.log(typeof num3) // number 
