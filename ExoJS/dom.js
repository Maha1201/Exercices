let i = 0;
let element = 0;
let tableau;


function SaisieTab(){
    element = prompt("Entrez une valeur du tableau, 0 pour arrêter");
    tableau = new Array(i);

    while(element != parseInt(0)){

        tableau [i] = element;
        tableau [i++];
        element = prompt("Entrez un élément du tableau, 0 pour arrêter");
}

    document.getElementById("tableauPhrase").innerHTML = ("<br> Les valeurs contenues dans le tableau sont les suivantes : " + tableau);
    console.log(tableau);

    document.getElementById("tableauTaille").innerHTML = ("<br> Il y a " + tableau.length + " valeurs dans ce tableau");
}

function Calculs(){

    let somme = 0;
    for(i=0; i<tableau.length; i++){
        somme += parseInt(tableau[i]);
    }
    
    let moyenne = 0;
    moyenne = somme / tableau.length;

    document.getElementById("tableauCalculs").innerHTML = ("<br> La somme de toutes les valeurs saisies est de : " + somme + 
    "<br> La moyenne du tableau est de : " + moyenne);
}


SaisieTab();
Calculs();