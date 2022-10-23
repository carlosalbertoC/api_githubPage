const buscador = document.querySelector("#buscador");
const button = document.querySelector("#button_buscador")

const url = "https://api.github.com/users/";

let nombre;
let user;
let datosExp = "fsdf";

async function buscarProgramador(user) {
    const data = await fetch(user);
                            console.log(data);
    const datos = await data.json();
                            // console.log("DATOS",datos);
    datosExp = datos;
            console.log("DATOSdentroAsync",datosExp);
    return datosExp
    
}

// datosExp = buscarProgramador(user);
//                             console.log(datosExp);

button.addEventListener("click", function () {
    nombre = buscador.value;
    user = url + nombre;
                            console.log("USER",user);

    buscarProgramador(user);
                            console.log("DATOS:",user);
    
})


