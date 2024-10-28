arreglo = [1, 2, 3];
let invertido = arreglo.reverse();
console.log('reverse():', invertido);

arreglo = [1, 2, 3, 4];
let porcionArreglo = arreglo.slice(1, 3);
console.log('slice():', porcionArreglo);

arreglo = [1, 2, 3];
let tienePar = arreglo.some(num => num % 2 === 0);
console.log('some():', tienePar);

arreglo = [3, 1, 2];
arreglo.sort();
console.log('sort():', arreglo);

arreglo = [1, 2, 3, 4];
arreglo.splice(1, 2, 'a', 'b');
console.log('splice():', arreglo);

arreglo = [1000, 2000, 3000];
let cadenaLocal = arreglo.toLocaleString('en-US');
console.log('toLocaleString():', cadenaLocal);

arreglo = [1, 2, 3];
let cadena = arreglo.toString();
console.log('toString():', cadena);

arreglo = [2, 3];
arreglo.unshift(1);
console.log('unshift():', arreglo);

arreglo = [1, 2, 3];
let iterador = arreglo.values();
let valores = [];
for (let valor of iterador) {
    valores.push(valor);
}
console.log('values():', valores);

let arreglo1 = [1, 2];
let arreglo2 = [3, 4];
let combinado = arreglo1.concat(arreglo2);
console.log('concat():', combinado);

arreglo = [2, 4, 6];
let todosPares = arreglo.every(num => num % 2 === 0);
console.log('every():', todosPares);

arreglo = [1, 2, 3];
arreglo.fill(0);
console.log('fill():', arreglo);

arreglo = [1, 2, 3, 4];
let numerosPares = arreglo.filter(num => num % 2 === 0);
console.log('filter():', numerosPares);

arreglo = [1, 2, 3];
let encontrado = arreglo.find(num => num > 1);
console.log('find():', encontrado);

arreglo = [1, 2, 3];
let indice = arreglo.findIndex(num => num > 1);
console.log('findIndex():', indice);

arreglo = [1, [2, [3, 4]]];
let arregloPlano = arreglo.flat(2);
console.log('flat():', arregloPlano);

arreglo = [1, 2, 3];
let arregloMapeado = arreglo.flatMap(x => [x * 2]);
console.log('flatMap():', arregloMapeado);

arreglo = [1, 2, 3];
let resultadoForEach = [];
arreglo.forEach(num => resultadoForEach.push(num));
console.log('forEach():', resultadoForEach);

arreglo = [1, 2, 3];
let incluyeDos = arreglo.includes(2);
console.log('includes():', incluyeDos);

arreglo = [1, 2, 3];
let indiceElemento = arreglo.indexOf(2);
console.log('indexOf():', indiceElemento);

arreglo = [1, 2, 3];
let unido = arreglo.join('-');
console.log('join():', unido);

arreglo = [1, 2, 3];
let duplicado = arreglo.map(num => num * 2);
console.log('map():', duplicado);

arreglo = [1, 2, 3];
let ultimoElemento = arreglo.pop();
console.log('pop(): Elemento eliminado:', ultimoElemento, 'Arreglo:', arreglo);

arreglo = [1, 2];
arreglo.push(3);
console.log('push():', arreglo);

arreglo = [1, 2, 3];
let suma = arreglo.reduce((acum, num) => acum + num, 0);
console.log('reduce():', suma);

arreglo = [1, 2, 3];
let sumaDerecha = arreglo.reduceRight((acum, num) => acum + num, 0);
console.log('reduceRight():', sumaDerecha);

arreglo = [1, 2, 3];
let elementoDesplazado = arreglo.shift();
console.log('shift(): Elemento eliminado:', elementoDesplazado, 'Arreglo:', arreglo);

arreglo = [2, 3];
arreglo.unshift(1);
console.log('unshift():', arreglo);

arreglo = [1, 2, 3];
let porcion = arreglo.slice(1, 2);
console.log('slice():', porcion);

arreglo = [1, 2, 3];
let algunPar = arreglo.some(num => num % 2 === 0);
console.log('some():', algunPar);

arreglo = [1, 2, 3];
arreglo.splice(1, 1, 'a');
console.log('splice():', arreglo);

arreglo = [1000, 2000];
let cadenaLocalString = arreglo.toLocaleString();
console.log('toLocaleString():', cadenaLocalString);

arreglo = [1, 2, 3];
let aCadena = arreglo.toString();
console.log('toString():', aCadena);

arreglo = [1, 2, 3];
let valoresIterador = arreglo.values();
let valoresIterados = [];
for (let val of valoresIterador) {
    valoresIterados.push(val);
}
console.log('values():', valoresIterados);
