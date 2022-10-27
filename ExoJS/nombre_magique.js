
let random = Math.floor(Math.random() * 51);
let nombre;
console.log(random);
console.log(nombre);

document.getElementById("textBox1").value = "";

function verif(){

    document.getElementById("button1").addEventListener("click", () => {
    let nombre = document.getElementById("textBox1").value;
        
    if(nombre > random){
        document.getElementById("label1").innerHTML = ("Trop grand !");
    }
    else if(nombre < random){
        document.getElementById("label1").innerHTML = ("Trop petit :(");
    }
    else if(nombre == random){
        document.getElementById("label1").innerHTML = ("Bravo !!");
    }
        
    });
}

verif();