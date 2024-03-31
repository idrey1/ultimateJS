function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave...')
        },
    };
}

let user = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Felipe', 'felipe@holamundo.io');
console.log(user, user2);

