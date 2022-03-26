alert("Dobbiamo verificare se puoi accedere alla festa")

let nome=prompt("Inserisci il tuo nome");
console.log(nome);

// Lista nomi da confrontare //
let listaInvitati = ["matteo", "fabio","pietro", "anna"];
console.log(listaInvitati.length);

let nomeTrovato = false

// Ciclo for //
for(let i=0; i<listaInvitati.length; i= i+1){
    console.log(listaInvitati[i]);
    // Istruzioni da eseguire //
    if (listaInvitati[i]==nome){
        (nomeTrovato=true)
    }
}
    if (nomeTrovato==true){
        alert("Sei un invitato alla festa");
    }
    else {
        alert("Non sei un invitato alla festa");
    } 