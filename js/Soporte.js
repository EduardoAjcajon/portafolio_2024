import { lista_soporte } from "./data_tecnico.js";
let div_soporte = document.querySelector(".soporte");

lista_soporte.forEach((cada_categoria) => {
    let div = document.createElement("div");
    div.classList.add("habilidades")
    
    div.innerHTML= `
        <img src="${cada_categoria.img}" alt="" class="img_categoria">
        <h2>${cada_categoria.nombre}</h2>
        <span>${cada_categoria.cantidad}</span>
        <div class="div_categoria"> </div>
        ${
            cada_categoria.modelos.forEach((cada_marca) => {
                let item = document.createElement("span");
                item.innerHTML = cada_marca;

            })
        }
    `;
    div_soporte.appendChild(div);
})