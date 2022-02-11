/*
A maneira mais fácil de criar um objeto js, e também a mais utilizada
*/

let empty = {};
let point = { x:0, y:0 }; 
let point2 = { x: point.x , y: point.y + 1 }; // valores mais complexos

let book  = {
    "main title": "JavaScript", 
    "sub-title": "The Definite Guide", 
    "for": "all audiences", 
    author: {
        firstname: "David", 
        surname: "Flanagan"
    }
}

/*
palavras compostar, precisam ser colocadas entre aspas

for é uma plavra reservada portanto precisamos usar aspas
*/