// Exercice 1 :
var x = window.prompt("Entrez x");
var y = window.prompt("Entrez y");

function produit(x, y){

    return x * y;
}

document.getElementById("produit").innerHTML = "Le produit de " + x + " x " + y + " est : " + produit(x,y);


function afficheImg(src, alt, title){

    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.title = title;

    document.getElementById("image").appendChild(img);
}

afficheImg("papillon.jpg", "papillon", "papillon");


// Exercice 2 : String Token
var str1;
var str2;
var n;

function strtok(str1, str2, n){

    str1 = prompt("Entrez vos mots séparés par ;");
    str2 = str1.split(str2);           // str2 va couper str1 avec (str2) qui sera désigné en paramètres de la fonction
    n = prompt("Le mot désiré est à quelle position ?")
    document.getElementById("split").innerHTML = str2[n-1];  // Sans le "-1" il commence à compter à partir de 0
}

strtok(str1, ";", n);