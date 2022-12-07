
// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const compra = ["Cafe", "Red Bull", "Monster", "Carne", "Fruta"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

compra.splice(5,0,"Aceite de Girasol")

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

compra.splice(5,1)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculas = [
    {titulo: 'El señor de los anillos',director: 'Peter Jackson',fecha: '01/01/2001'},
    {titulo: 'El padrino',director: 'Francis Ford Coppola',fecha: '01/01/1972'},
    {titulo: 'El imperio contraataca',director: 'Irvin Kershner',fecha: '01/01/1980'}
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculas2 = peliculas.splice(3,0,
    {titulo: "peli3", director: "dir3", fecha: '01/02/2015'},
    {titulo: "peli4", director: "dir4", fecha: '01/02/2011'},
);

const peliculas2010 = peliculas.filter(peliculas => peliculas.fecha > "01/01/2010")
console.log(peliculas2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculas.map(peliculas => peliculas.director)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = peliculas.map(peliculas => peliculas.titulo)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const directores_titulos = directores.concat(titulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) 

const directores_titulos2 = [...directores, ...titulos]
