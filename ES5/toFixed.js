/*
Converte o número em string com um número de digitos após a casa decimal especificados 
*/

const n = 23;
const newN = n.toFixed(12); // 23.000000000000
console.log(newN); 
console.log(typeof newN); 
