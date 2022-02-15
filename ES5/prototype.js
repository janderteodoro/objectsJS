/*
Quando criamos um objeto, até mesmo de forma literal, na verdade estamos herdando tudo de um protótipo: Objetct.prototype. 

Podemos utilizar Objetc.create para criar um novo objeto e passar como argumento os protótipos ( no formato de objeto ) 
Podemos tambem passar um segundo parêmtro não obrigatório, que fala sobre as propriedades desse Objeto. 

Pode-se passar null, em Object.Create(), mas o objeto não herdará absolutamente nada, nes mesmo métodos como "toString".
*/


let a = Object.create({ x : 1, y : 380 }); // {} / a.x = 1 / a.y = 380

let b = Object.create(null); // [Object: null prototype] {}


// caso queremos criar um objeto vazio como: {}, ou new Object()
let c = Object.create(Object.prototype); // {}


//---------------------------------------------------------------

// inherit()

function inherit(p) { 
    if ( p === null ) throw TypeError; // p nao pode ser null 
    if (Object.create) return Object.create(p); // se Object.create está definida, basta usar.
    
    let t = typeof p;

    if ( t !== "object" && t !== "function" ) throw TypeError;  // caso contrário, fazemos uma verificação de tipo em p 
    
    function f(); 
    f.prototype = p; 
    
    return new f();
}