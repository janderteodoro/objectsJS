/*
os Fluxos no Node podem ser trabalhaos basicamente com dados binários e textuais. Para usar texto
utilizamos strings comuns do JS normais, bytes por sua vez são manipulados usando-se um tipo específico 
do Node conhecido como Buffer. Os buffers do node são objetos parecidos com array, com um cumprimento 
fixo, com valores de 0 a 255. 

Podemos ler, gravar strings, fazer o fatiamento destes bytes com o Node.
*/

let bytes = new Buffer.alloc(256); // precisamos usar alloc, pois apenas Buffer foi decrepado 
for ( i=0; i<bytes.length; i++) bytes[i] = i;
 
let end = bytes.slice(240, 256); 
end[0] = 0;
bytes[240]; 
let more = new Buffer.alloc(8); 
