//factorial-break.js 
//Calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var fact = 1;
var i = 1;
var num = 1;

while (true){
    fact = fact * i;
	i++;
    if (i>10) { 
        break;
    }
}

console.log(fact);
