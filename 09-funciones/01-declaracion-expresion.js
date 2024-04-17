console.log(suma); // Hoisting -> izar o levantar
// Declaración de funciones: Function Declaration
// Función nombrada -> Named function
function suma(){
    console.log('sumando...')
}

// Función anónima -> Anonymous function
[].map(function(){
    console.log('fucnción anónima');
});

// Expresión de funciones -> function expression
// Expresion de función anónima
let resta = function(){ // Anonymous function expression
    console.log('restando');
}

const multiplica =  function multi(){ //Named function expression
    console.log('multiplicando');
}

const divide = ()=>{ // Anónima
    console.log('dividiendo');
}