const fs = require('fs'); 

setTimeout(() => console.log('Hello '), 1000); // diz olá em um segundo 

// setTimeout eh uma função do lado do cliente e podemos usar no node sem problema algum

// ------------------

/*
O node tem suas globais, todas (pelo menos que eu sei) estão dentro de process

com as variáveis disponíceis dentro de process conseguimos trabalhar nao só do lado server mas com, sockets, baixo nível, scripts e etc
*/

console.log(process.version); // retorna a versão do node 
console.log(process.argv);  //[ '/home/jander/.nvm/versions/node/v12.10.0/bin/node','/home/jander/estudos/objectsJS/node/node_cd07f8e44d70d.tmp']
console.log(process.pid) // retorna o PID do processo  
console.log() 

