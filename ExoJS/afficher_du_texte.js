

var nom = window.prompt("Entrez votre nom"); // Fenêtres pour entrer le nom/prenom
var prenom = window.prompt("Entrez votre prénom");
    
if(window.confirm("Etes vous un homme ?") == true){ // Fenêtre avec Ok(homme) et Annuler(Femme)
    alert(`Bonjour Monsieur ${nom} ${prenom} \n\nBienvenue sur notre site web`);
}
else{
    alert(`Bonjour Madame ${nom} ${prenom} \n\nBienvenue sur notre site web`);
}
