/*
Quando os dados estão prontos dentro do Node ele meio que "dispara um evento neste momento"

Presumindo que s seja um fluxo que pode ser lido, obtido em algum lugar, como poderíamos obter 
objetos (stream) fluxo para arquivos se soquetes de rede a segu
*/

s.on('data', f); //quando todos os argumentos estiverem disponíveis, passa-os como argumento para f();
s.on('end', f); // Evento end ativado em EOF quando nao vão chegar mais dados 
s.on('error', f); // Se algo der errado, passa a exceção pra f()
s.readable; 
s.pause(); 
s.resume(); 
/*
Vedadeiro se é que ainda está aberto fluxo que pode ser lido

Pausa em eventos 'data'. Para controlar o fluxo de uploads , por exemplo

Retorna novamente
*/