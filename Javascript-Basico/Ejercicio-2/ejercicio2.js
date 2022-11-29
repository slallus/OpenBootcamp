//Ejercicio 2

/* 
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) 
*/



const listaEjer = [
    "Steven",
    29,
    true,
    new Date (1993, 30, 06),
    libroFavorito = {
        titulo: "Principles",
        autor: "Ray Dalio",
        fecha: new Date(2015, 2, 1),
        url: "https://www.principles.com/",
    }
]

console.log(listaEjer);
