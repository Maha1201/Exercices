
function jeVerifie(){

    document.getElementById("envoyer").addEventListener("click", () => { // Champs société
        let societe = document.getElementById("societe").value;

        if(societe == ""){
            alert("Entrez le nom de votre société");
        }

        });

    document.getElementById("envoyer").addEventListener("click", () => { // Champs personne à contacter
        let personneAContacter = document.getElementById("personneAContacter").value;
    
        if(personneAContacter == ""){
            alert("Entrez le nom de la personne à contacter");
        }
    
        });

    document.getElementById("envoyer").addEventListener("click", () => { // Champs ville
        let ville = document.getElementById("ville").value;
    
        if(ville == ""){
            alert("Entrez le nom de la ville");
        }
    
        });

    document.getElementById("envoyer").addEventListener("click", () => { // Champs Email
        let email = document.getElementById("email").value;
    
        if(email != "@"){
            alert("Entrez un E-mail valide");
        }
    
        });

    document.getElementById("envoyer").addEventListener("click", () => { // Champs ode postal
        let cp = new RegExp("^[0-9]{5}$");
        let codePostal = cp.test(document.getElementById("codePostal").value);
        
        if(codePostal != true){
            alert("Entrez un code postal valide (5 chiffres)");
        }
        
        });
}

// function jesaispasencore(){
        
//     let choix = document.getElementById("choix");
//     let valeur = choix.options[choix.selectedIndex];

//     document.getElementById("projet").value = valeur.text
// }

document.addEventListener("change", () => { // Pour faire apparaître le choix dans la zone de texte
    let choix = document.getElementById("choix");
    let valeur = choix.options[choix.selectedIndex];

    document.getElementById("projet").value = valeur.text;

});


// jesaispasencore();
jeVerifie();