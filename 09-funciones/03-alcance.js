let afuera = 'estoy afuera';

function alcance(){
    afuera = 'estoy dentro';
    function saludo(){}
    var vieja = 'ya no usar';
    let variable = 'Hola mundo';
    const constante = 'Hola mundo';
}

console.log(afuera);
alcance();
console.log(afuera);