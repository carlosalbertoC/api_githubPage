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
                            console.log(data);
    const datos = await data.json();
                            // console.log("DATOS",datos);
    datosExp = datos;

                            console.log("DATOSdentroAsync",datosExp);
    return datosExp;
    
    
}


// datosExp = buscarProgramador(user);
//                             console.log(datosExp);

button.addEventListener("click", async function () {
    nombre = buscador.value;
    user = url + nombre;
                            console.log("USER",user);

    let dataProfile = await buscarProgramador(user);
                            console.log("DATOS:",dataProfile);
                            console.log("DATOS:",dataProfile.avatar_url);
    

        //return ["photo","name","description","linkGitHub"];
    let profile = new Card(dataProfile.avatar_url, dataProfile.login, dataProfile.bio, dataProfile.html_url);
                            console.log(profile.linkGitHub);


    myCard.innerHTML += profile.render();
    // profile.render();

    
})


