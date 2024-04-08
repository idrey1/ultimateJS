const saludo = 'Hola Mundo!';
const despedida = new String('Chao mundo :(');

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf('Mu'));
console.log(saludo.includes('qewr'));
let nuevoSaludo = saludo.replace('Mundo','Nicolas');
console.log(nuevoSaludo,saludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo.substring(0,6));

const espacios = '  Hola    mundo!  ';
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());