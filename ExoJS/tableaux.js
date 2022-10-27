// Exercice 1 : 
let tableau = new Array(parseInt(prompt("Choisissez la taille du tableau !")));
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
let entier;
let tableau2;
let y;

function GetInteger(){

    y = Number(prompt("Choisissez la taille du tableau !"));

    while(y != parseInt(y)){
        y = Number(prompt("Erreur ! Entrez uniquement un entier !!"));
    }
}

function InitTab(){
    
    GetInteger();
    tableau2 = new Array(y);
}

function SaisieTab(){
    InitTab();
    for(i=0; i<tableau2.length; i++){
        let remplir2 = prompt("Entrez la valeur " + (i+1) + " du tableau");
        tableau2 [i] = [remplir2];
    }
}

function AfficheTab(){
    SaisieTab();
    document.getElementById("tableauPhrase2").innerHTML = ("<br> Les valeurs contenues dans le tableau sont les suivantes : " + tableau2);
   
    var contenu = "<ul>";
    for(i=0; i<tableau2.length; i++){ // Boucle pour lister les éléments du tableau
        contenu += "<li>" + tableau2[i] + "</li>";
    }
    contenu += "</ul>";

    document.getElementById("tableauEnSoi").innerHTML = contenu;
}

function RechercheTab(){
    let rang = parseInt(prompt("Choisir rang du tableau"));
    document.getElementById("tableauPhrase2").innerHTML = ("<br> La valeur du tableau au rang " + rang + " est de : " + tableau2[(rang-1)]);
}

function InfoTab(){
    let somme = 0;
    for(i=0; i<tableau2.length; i++){
        somme += parseInt(tableau2[i]);
        document.getElementById("tableauPhrase2").innerHTML = ("<br> La somme de toutes les valeurs saisies est de : " + somme);
    }

    let moyenne = 0;
    moyenne = somme / tableau2.length;
    document.getElementById("tableauPhrase2").innerHTML = ("<br> La somme de toutes les valeurs saisies est de : " + somme + 
    "<br> La moyenne du tableau est de : " + moyenne);
}

// Exercice 3 : 
function Bubulle(){
    tableau2.sort(function(a, b){return a - b});
    document.getElementById("tableauPhrase2").innerHTML = ("<br> Le tableau est trié de cette manière : " + tableau2);
}