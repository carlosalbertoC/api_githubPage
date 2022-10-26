import { Card } from "./card.js";

const buscador = document.querySelector("#buscador");
const button = document.querySelector("#button_buscador")
const myCard = document.querySelector("my-card")

const url = "https://api.github.com/users/";

let nombre;
let user;
let datosExp;


async function buscarProgramador(usX) {
    const data = await fetch(usX);
    const datos = await data.json();
    datosExp = datos;

    return datosExp;
    
    
}


button.addEventListener("click", async function () {
    nombre = buscador.value;
    user = url + nombre;

    let dataProfile = await buscarProgramador(user);
    

        //return ["photo","name","description","linkGitHub"];
    let profile = new Card(dataProfile.avatar_url, dataProfile.login, dataProfile.bio, dataProfile.html_url);


    myCard.innerHTML += `${profile.render()}`;

    
})


