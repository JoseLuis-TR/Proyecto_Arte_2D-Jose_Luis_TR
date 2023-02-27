"use strict";
const carrusel = document.querySelector(".seccion__carrusel__imagenes");
const indicador = document.querySelectorAll(".seccion__carrusel__indicadores--item");
indicador.forEach((item, index)=>{
    indicador[index].addEventListener("click", ()=>{
        let posicion = index;
        let operacion = posicion * -1 * (100 / 3);
        carrusel.style.transform = `translateX(${operacion}%)`;
        indicador.forEach((item, index)=>{
            indicador[index].classList.remove("punto-activo");
        });
        indicador[index].classList.add("punto-activo");
    });
});

//# sourceMappingURL=index.929121a8.js.map
