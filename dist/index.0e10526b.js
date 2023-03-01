"use strict";
// Se recogen todos los botones que señalan el título de cada pestaña
const boton = document.querySelectorAll(".personajes__info__tabs__botones--boton");
// Se recogen todas las pestañas con la información
const tab = document.querySelectorAll(".personajes__info__tabs__pestanias--pestania");
// Se recorren todos los botones y se le añade un eventListener para cuando reciban un clic
boton.forEach((cadaBoton, index)=>{
    boton[index].addEventListener("click", ()=>{
        // Cuando un boton recibe clic, se eliminan las clases que muestran la información de la pestaña seleccionada
        boton.forEach((cadaBoton, index)=>{
            boton[index].classList.remove("button_active");
            tab[index].classList.remove("tab_active");
        });
        // Se muestra la información de la pestaña seleccionada
        boton[index].classList.add("button_active");
        tab[index].classList.add("tab_active");
    });
});

//# sourceMappingURL=index.0e10526b.js.map
