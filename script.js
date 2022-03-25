alert("Qui puoi definire un confronto tra due numeri");

let primoNumero = prompt ("Inserisci un numero");
console.log(primoNumero);

let secondoNumero = prompt ("Inserisci un altro numero");
console.log(secondoNumero);

alert("Calcolo del numero maggiore");

if (primoNumero> secondoNumero){
    alert (" Il numero maggiore è " + primoNumero )
}

else if (primoNumero< secondoNumero){
    alert (" Il numero maggiore è " + secondoNumero)
}
 
else {
     alert(" I numeri sono equivalenti ")
}

