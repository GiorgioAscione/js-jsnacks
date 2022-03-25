alert("Qui puoi confrontare la lunghezza tra due parole");

let primaParola = prompt(" Inserisci una parola ");

let secondaParola = prompt(" Inserisci un altra parola ");

alert("Confronto tra le due lunghezze")

if (primaParola.length> secondaParola){
    alert(" La prima parola è più lunga della seconda ")
}

else if (primaParola< secondaParola){
    alert( "La seconda parola è più lunga della prima")
}

else {
    alert("Lunghezza equivalente")
}