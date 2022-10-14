let i;
let tableau = new Array(i);

function SaisieTab(){
    let remplir = prompt("Entrez une valeur du tableau, 0 pour arrêter");
    while(remplir != parseInt(0)){
        let remplir = prompt("Entrez la valeur " + (i+1) + " du tableau, 0 pour arrêter");
        tableau [i] = [remplir];
    }
    document.getElementById("tableauPhrase").innerHTML = ("<br> Les valeurs contenues dans le tableau sont les suivantes : " + tableau);
}

SaisieTab();