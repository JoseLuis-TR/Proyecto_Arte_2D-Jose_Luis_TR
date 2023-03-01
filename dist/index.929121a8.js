"use strict";
// Se recoge el carrusel dentro del documento
const carrusel = document.querySelector(".escenarios__cuerpo__carrusel__imagenes");
// Se recogen los indicadores del carrusel (circulos debajo de este)
const indicador = document.querySelectorAll(".escenarios__cuerpo__carrusel__indicadores--item");
// Se recorren todos los indicadores y se le añade un eventListener para cuando reciban clic
indicador.forEach((item, index)=>{
    indicador[index].addEventListener("click", ()=>{
        // Se realiza un cálculo para revisar cuál es el elemento del carrusel que debe ser mostrado
        let posicion = index;
        let operacion = posicion * -1 * (100 / 3);
        // Se realiza un tranlaste al elemento que se quiere mostrar
        carrusel.style.transform = `translateX(${operacion}%)`;
        // Se quita la clase que da estilo de boton seleccionado a todos y se le añade al boton que ha sido seleccionado
        indicador.forEach((item, index)=>{
            indicador[index].classList.remove("punto-activo");
        });
        indicador[index].classList.add("punto-activo");
    });
});

//# sourceMappingURL=index.929121a8.js.map
