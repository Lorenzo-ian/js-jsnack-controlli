/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array */

//Creo le varie variabili
var numero, listarray;
//Creo array vuoto
listarray = []
//Chiedo all'utente 6 volte un numero se dispari il numero va nell'array

for (var i = 0; i < 6; i++) {
    numero = parseInt(prompt ("Dimmi un numero!"));
    
    if (Number.isNaN(numero)) {
        alert("Devi inserire solo numeri");
        i = i-1;
    } else if (numero %2 !== 0 ) {
        listarray.push(numero);
        console.log(numero);
    }
}

console.log(listarray)