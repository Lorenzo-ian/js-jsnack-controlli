/*In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.*/

//Creo le varie variabili.
var invitati, nome;
var messaggio = document.getElementById("mio_id");
//Creo la lista degli invitati.
invitati = [
    "marco",
    "paolo",
    "dario",
    "francesco"
];
//Chiedo all'utente il suo nome.
nome = prompt("Qual'e il tuo nome?")
//Controllo che il nome ci sia, se c'è messaggio positivo, se non c'è messaggio negativo.
for (var i = 0; i < invitati.length; i++) {
    
    if (invitati[i] == nome) {
        messaggio.innerHTML = nome + ", sei nella lista della festa!";
        break;
    } else {
        messaggio.innerHTML = nome + ", mi dispiace! non sei nella lista della festa!";
    }

}