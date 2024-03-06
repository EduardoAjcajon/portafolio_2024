import { menu_header } from "./header_component.js";
import { perfil } from "./perfil_component.js";
let div_root = document.querySelector(".root");

let bloque_principal = `
    <div class="parte_superior">${menu_header}</div>
    <div class="barra_lateral">${perfil}</div>
    <div class="contenedor">
        <div class="proyectos cuadro1"></div>
        <div class="proyectos cuadro2"></div>
        <div class="proyectos cuadro3"></div>
        <div class="proyectos cuadro4"></div>
        <div class="linea"></div>
        <div class="habilidades cuadro5"></div>
        <div class="habilidades cuadro6"></div>
        <div class="habilidades cuadro7"></div>
        <div class="habilidades cuadro8"></div>

    </div>
`;

div_root.innerHTML = bloque_principal;