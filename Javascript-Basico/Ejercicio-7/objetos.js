 /* 
Crea un archivo llamado objetos.js que contenga las siguientes líneas
*/

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const usuario = {
    nombre: "Steven",
    apellido: "Allus",
    edad: 29,
    altura: 182,
    isDeveloper: true,
}

//- Una variable que obtenga tu edad a partir del objeto anterior

const usuarioEdad = usuario.edad;

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los 
//datos personales de tus dos mejores amig@s

const amigos = [
    usuario, 
    amigo1 = {
        nombre: "amigo",
        apellido: "1",
        edad: 27,
        altura: 172,
        isDeveloper: false,
    },
    amigo2 = {
        nombre: "amiga",
        apellido: "2",
        edad: 25,
        altura: 152,
        isDeveloper: false,
    }
]

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor 

amigos.sort((a,b) => a.edad - b.edad)
console.log(amigos.amigo1)
