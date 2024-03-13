import { menu_header } from "./header_component.js";
import { perfil } from "./perfil_component.js";

let div_root = document.querySelector(".root");

let bloque_principal = `
    <div class="parte_superior">${menu_header}</div>
    <div class="barra_lateral">${perfil}</div>
    <div class="paginas"></div>
    <div class="soporte"></div>
`;

div_root.innerHTML = bloque_principal;