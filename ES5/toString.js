/*
o método toString é um método da classe Number. Ele aceita um argumento 
que será a base do sistema numérico para o qual será convertido. 
Quando não passamos nenhum argumeto, automaticamente ele converte para a base decimal
*/

let n = 308912; // número decimal
const binaryString = n.toString(2); // 1001011011010110000
const hexaDecimalString = n.toString(16);  // o mesmo número em base exadecimal 4b6b0 
