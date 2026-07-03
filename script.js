// ===============================
// BLOG IGLESIAS DE TEZOYUCA
// script.js
// ===============================

// Aparición de elementos al hacer scroll
const elementos = document.querySelectorAll(".card, .historia, .galeria img");

const mostrar = () => {
    elementos.forEach((el) => {
        const posicion = el.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

elementos.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";
});

window.addEventListener("scroll", mostrar);
window.addEventListener("load", mostrar);

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const boton = document.createElement("button");

boton.innerHTML = "⬆";

boton.id = "topButton";

document.body.appendChild(boton);

boton.style.position = "fixed";
boton.style.bottom = "30px";
boton.style.right = "30px";
boton.style.width = "55px";
boton.style.height = "55px";
boton.style.border = "none";
boton.style.borderRadius = "50%";
boton.style.background = "#8b0000";
boton.style.color = "white";
boton.style.fontSize = "22px";
boton.style.cursor = "pointer";
boton.style.display = "none";
boton.style.boxShadow = "0 10px 20px rgba(0,0,0,.5)";
boton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        boton.style.display = "block";

    } else {

        boton.style.display = "none";

    }

});

boton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// EFECTO HOVER BOTÓN
// ===============================

boton.addEventListener("mouseover",()=>{

    boton.style.background="#c62828";

});

boton.addEventListener("mouseout",()=>{

    boton.style.background="#8b0000";

});

// ===============================
// LIGHTBOX GALERÍA
// ===============================

const imagenes = document.querySelectorAll(".galeria img");

const fondo = document.createElement("div");

fondo.style.position="fixed";
fondo.style.top="0";
fondo.style.left="0";
fondo.style.width="100%";
fondo.style.height="100%";
fondo.style.background="rgba(0,0,0,.9)";
fondo.style.display="none";
fondo.style.justifyContent="center";
fondo.style.alignItems="center";
fondo.style.zIndex="5000";

const foto = document.createElement("img");

foto.style.maxWidth="90%";
foto.style.maxHeight="90%";
foto.style.border="5px solid white";
foto.style.borderRadius="10px";

fondo.appendChild(foto);

document.body.appendChild(fondo);

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        foto.src=img.src;

        fondo.style.display="flex";

    });

});

fondo.addEventListener("click",()=>{

    fondo.style.display="none";

});

// ===============================
// MENÚ ACTIVO
// ===============================

const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

const secciones=document.querySelectorAll("section");

let actual="";

secciones.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-150;

const alto=sec.offsetHeight;

if(top>=offset && top<offset+alto){

actual=sec.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("activo");

if(link.getAttribute("href")==="#"+actual){

link.classList.add("activo");

}

});

});

// ===============================
// MENSAJE DE BIENVENIDA
// ===============================

window.onload=()=>{

setTimeout(()=>{

console.log("Bienvenido al Blog de Iglesias de Tezoyuca");

},500);

};
