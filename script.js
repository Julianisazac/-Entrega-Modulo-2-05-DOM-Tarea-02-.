
let cantidad = Number (prompt ("¿Cuantas imagenes vas agregar?"));
//let ponerImagen = prompt("Poner la url de la imagen que deseas poner");
//const imagen =document.querySelector('img');

//imagen.setAttribute("src", ponerImagen)


//const body = document.querySelector('body');

//console.log(body);

//body.setAttribute("style", "background-color: #333, font-size: 5rem");

//body.setAttribute("class", "verde");

for (let i = 1; i <= cantidad; i++){
    let ponerImagen = prompt("Poner la url de la imagen que deseas poner");

 lista(ponerImagen);

//console.log(body);

//body.setAttribute("class", "verde");

}

function lista(url, container){
    const contenedor = document.getElementById('container');
    let imagen = document.createElement('img');
    imagen.setAttribute("src", url);
    console.log(contenedor)

contenedor.appendChild(imagen);
}

