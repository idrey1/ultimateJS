const ahora = new Date();
//console.log(ahora);

const fecha = new Date('December 11 1986 14:15 GMT-300'); //Mes día año (estadounidense)
//console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14+15, 15);
//console.log(fecha3);

console.log('datestring: ',fecha3.toDateString());
console.log('ISOstring: ',fecha3.toISOString());
console.log('timestring: ',fecha3.toTimeString());

console.log(fecha3.getDate());

fecha3.setFullYear(1978);
console.log(fecha3);