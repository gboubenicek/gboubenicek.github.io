
async function consulta_persona () {
let persona = await fetch('https://randomuser.me/api/?gender=male')
.then((response) => response.json())
.then(datos => datos)

document.getElementById("Nombre").innerHTML = persona.results[0].name.title + " " + persona.results[0].name.first + " " + persona.results[0].name.last
document.getElementById("Edad").innerHTML = "Edad: ".bold()+ "31"
document.getElementById("Direccion").innerHTML = "Direccion: ".bold() + persona.results[0].location.street.name + " " + persona.results[0].location.street.number + 
", " + persona.results[0].location.city + ", " + persona.results[0].location.state + ", " + persona.results[0].location.country
document.getElementById("CodigoPostal").innerHTML = "Codigo Postal: ".bold() + persona.results[0].location.postcode
document.getElementById("Email").innerHTML = "Email: ".bold() + persona.results[0].email;
document.getElementById("Telefono").innerHTML = "Telefono: ".bold() + persona.results[0].cell;
}

let boton_inf = document.getElementById('boton_inf');
let ocultar_inf = document.getElementById('ocultar_inf');
boton_inf.addEventListener ('click', MostrarInf);

function MostrarInf () {
    document.getElementById('ocultar_inf').style.display = 'block';
    document.getElementById('ocultar_exp').style.display = 'none';
    document.getElementById('ocultar_hab').style.display = 'none';
    document.getElementById('ocultar_con').style.display = 'none';
}

let boton_exp = document.getElementById('boton_exp');
let ocultar_exp = document.getElementById('ocultar_exp');
boton_exp.addEventListener ('click', MostrarExp);

function MostrarExp () {
    document.getElementById('ocultar_inf').style.display = 'none';
    document.getElementById('ocultar_exp').style.display = 'block';
    document.getElementById('ocultar_hab').style.display = 'none';
    document.getElementById('ocultar_con').style.display = 'none';
}

let boton_hab = document.getElementById('boton_hab');
let ocultar_hab = document.getElementById('ocultar_hab');
boton_hab.addEventListener ('click', MostrarHab);

function MostrarHab () {
    document.getElementById('ocultar_inf').style.display = 'none';
    document.getElementById('ocultar_exp').style.display = 'none';
    document.getElementById('ocultar_hab').style.display = 'block';
    document.getElementById('ocultar_con').style.display = 'none';
}

let boton_con = document.getElementById('boton_con');
let ocultar_con = document.getElementById('ocultar_con');
boton_con.addEventListener ('click', MostrarCon);

function MostrarCon () {
    document.getElementById('ocultar_inf').style.display = 'none';
    document.getElementById('ocultar_exp').style.display = 'none';
    document.getElementById('ocultar_hab').style.display = 'none';
    document.getElementById('ocultar_con').style.display = 'block';
}

consulta_persona ()