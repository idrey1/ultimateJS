// const numeros = [1, 2, 3, 4];
// const suma = numeros.reduce((acc, elem)=>{
//     return acc + elem;
// },0);

// console.log(suma);
// const anidado = [[1,2],3,[4,5]];
// const plano = anidado
//     .reduce((acum, elem)=>acum.concat(elem),[]);

// console.log(plano);
const usuarios = [
    {edad:17, nombre: 'Nico'},
    {edad:13, nombre: 'Chanchito'},
    {edad:25, nombre: 'Felipe'},
    {edad:32, nombre: 'Fernanda'},
];

const indexado = usuarios.reduce((acum, elem) =>({
    ...acum,
    [elem.nombre]: elem,
}),{});

console.log(indexado);