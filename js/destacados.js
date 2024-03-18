import { lista_webs } from "./data_web.js";

lista_webs.forEach((cada_web) => {
    let div_paginas = document.querySelector(".paginas");
    let div_web = document.createElement("div");
    div_web.classList.add("proyectos")
    div_web.innerHTML = `
        <a href="${cada_web.github_page}" class="contenedor">
            <img src="${cada_web.img}" alt="" class="img_proyectos"/ id="${cada_web.id}">
        </a>
            <h2 class="titulo">${cada_web.nombre}</h2>
            <p class="descripcion">${cada_web.descripcion}</p>
            <a href="${cada_web.link_repo}" class="github_a">
                <div class="github">
                    github
                </div>
            </a>
    `;

    div_paginas.appendChild(div_web)
});