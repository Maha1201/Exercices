    // Exercice 1 : Saisie
    var prenom = window.prompt("Entrez un prénom, ne rien mettre pour arrêter");
    var liste = 'Prenom : ';
    var compteur = 0;

    while(prenom !== ""){
        liste = liste + prenom;
        compteur = compteur + 1;
        var prenom = window.prompt("Entrez un prénom, ne rien mettre pour arrêter");
    }
    
    alert(liste + "Total de prénoms : " + compteur);


    // Exercice 2 : Entiers inférieurs à N
    var N = window.prompt("Entrez un nombre");

    while(N != 0){
        N = N - 1;
        alert(N);
    }


    //Exercice 3 : Moyenne
    var nb = window.prompt("Entrez des entiers, 0 pour arrêter");
    var total = 0;
    var somme = 0;
    var moyenne = 0;

    while(nb != 0){
        total = total + 1;
        somme = parseInt(somme) + parseInt(nb);
        moyenne = parseInt(somme) / parseInt(total);
        var nb = window.prompt("Entrez des entiers, 0 pour arrêter");
    }

    alert("La somme est " + somme + " et la moyenne est de : " + moyenne);


    // Exercice 4 : Multiples
    var N = window.prompt("Entrez N");
    var X = window.prompt("Entrez X");
    var resultat;

    for(i=1; i<=N; i++){
        resultat = i * X;
        alert(i + "x" + X + "=" + resultat);
    }


    // Exercice 5 : Nombre de voyelles
    var mot = window.prompt("Choisissez un mot");
    alert("Le nombre de voyelles est de : " + mot.match(/[aeiouy]/g).length);