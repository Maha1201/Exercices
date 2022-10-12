// Exercice 1 : 
let tableau = Array(parseInt(prompt("Choisissez la taille du tableau !")));
let text = "<ul>"; // Permet de créer une liste

for(i=0; i<tableau.length; i++){

    let remplir = prompt("Entrez la valeur " + i + " du tableau");
    tableau [i] = [remplir];
    text += "<li>" + tableau[i] + "</li>"; // Liste les valeurs i du tableau 
}
text +="</ul>"; // Fermer la liste

console.log("La taille du tableau est de : " + tableau.length); // Dans la console uniquement
console.table(tableau);

document.getElementById("tableauPhrase").innerHTML = ("Les valeurs contenues dans le tableau sont les suivantes : " + tableau);
document.getElementById("tableauID").innerHTML = text; // Affiche "text" donc le tableau créé dedans


// Exercice 2 :

function GetInteger(){
    let entier = prompt("Entrez un entier");
}

function InitTab(){
    let tableau2 = Array(parseInt(prompt("Choisissez la taille du tableau !")));
}

function SaisieTab(){
    for(i=0; i<tableau2.length; i++){
        let remplir2 = prompt("Entrez la valeur " + i + " du tableau");
        tableau2 [i] = [remplir2];
    }
}

function AfficheTab(){

}

function RechercheTab (){

}

function InfoTab (){

}

GetInteger();
InitTab();
SaisieTab();
AfficheTab();
RechercheTab();
InfoTab();
