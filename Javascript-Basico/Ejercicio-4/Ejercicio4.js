//Cadena de texto conn mi nombre

let nombre = "Mi nombre es Steven";

//Otra cadena de texto con mi apellido

let apellido = "Mi apellido es Allus";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = nombre.concat(". ", apellido);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase();

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase();

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let estudianteLength = estudiante.length;

//Una variable que contenga la primera letra del Nombre

let primeraLetraNombre = nombre.charAt(nombre.indexOf("Steven"));

//Otra variable que contenga la última letra del Apellido

let primeraLetraApellido = apellido.charAt(apellido.indexOf("Allus"));

//Una cadena de texto que elimine los espacios de la variable "estudiante"

let estudianSinEspacios = estudiante.replace(/\s/g, '');

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let estudianteBooleano = estudiante.includes(nombre);
