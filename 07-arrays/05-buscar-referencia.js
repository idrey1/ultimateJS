const usuarios = [
    {id: 1, name: 'Chanchito'},
    {id: 2, name: 'Feliz'},
];

const resultado = usuarios.findIndex(usuario =>
    usuario.name === 'Chanchito');

console.log(resultado);