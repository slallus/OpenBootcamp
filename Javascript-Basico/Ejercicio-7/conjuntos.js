/* 
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
*/

//- Un nuevo Set con los nombres de tu familia

const familiaSet = new Set(["Elisabeth","Melissa","Pepe","Frank","Steven"])
console.log(familiaSet)

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

familiaSet.add("Steven")

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) 

familiaSet.add("Javascript")
