// sin usar ... ni Object.assign
let obj1 = {id: 1, name: 'Chanchito'};
function creaCopia(obj){
    let copia = {};
    for(let llave in obj){
        copia[llave] = obj[llave]
    }
    return copia;
}

let obj2 = creaCopia(obj1);
console.log({obj1, obj2});