/* 
Crea un archivo llamado fechas.js que contenga las siguientes líneas
*/

//- La fecha de hoy

const fechaHoy = new Date();

//- La fecha de tu nacimiento

const fechaNacimiento = new Date(1993,05,30) //30 de Junio 1993

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const comparativaFechas = fechaHoy > fechaNacimiento;

//- Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();
const mesNacimiento = fechaNacimiento.getMonth() + 1;
const añoNacimiento = fechaNacimiento.getFullYear();

console.log(diaNacimiento);
