// Exercice 1 : Parité

var nombre = window.prompt("Entrez un nombre");
var parite;

parite = nombre % 2 ; 

if(parite == 0){
    alert("Nombre pair !")
}
else{
    alert("Nombre impair :(")
}


// Exercice 2 : Age

var annee = window.prompt("Entrez votre année de naissance");
var age ;

age = 2022 - annee ;

if(age > 18){
    alert("Vous etes majeur")
}
else{
    alert("Vous etes mineur")
}


// Exercice 3 : Calculette

var nb1 = window.prompt("Entrez un premier nombre");
var nb2 = window.prompt("Entrez un deuxieme nombre");
var operateur = window.prompt("Entrez un opérateur");
var resultat;

for(;operateur !== "+" && operateur !== "-" && operateur !== "/" && operateur !== "*";){ // NE PAS METTRE DE ||
    alert("Entrez un opérateur valide : + , - , / , *");
    var operateur = window.prompt("Entrez un opérateur");
}

switch(operateur){

    case "+" :
        resultat = parseInt(nb1) + parseInt(nb2);
        break;

    case "-" :
        resultat = nb1 - nb2;
        break;

    case "/" :
        resultat = nb1 / nb2;
        break;

    case "*" :
        resultat = nb1 * nb2;
        break;
}

alert(resultat);