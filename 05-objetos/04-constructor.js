// {id: 1, recuperar clave: function(){}}
function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){
        console.log('Recuperando clave...');
    }
}

let usuario = new Usuario();
console.log(usuario);