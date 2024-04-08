let objeto = {
    id: 1,
    name: 'chanchito',
    login: function(){},
    logout: function(){},
}

let propiedad = 'names';

function tieneProp(obj, propiedad){
    let props = Object.keys(obj); //Obtenemos las propiedades el objeto
    for( let prop of props){
        if(propiedad === prop){
            return true;
        }
    }
    return false;
}

console.log(tieneProp(objeto, propiedad));