'use strict';

const carrusel = document.querySelector('.escenarios__cuerpo__carrusel__imagenes');
const indicador = document.querySelectorAll('.escenarios__cuerpo__carrusel__indicadores--item');
console.log(indicador);

indicador.forEach((item, index) => {
    indicador[index].addEventListener('click', () => {
        let posicion = index;
        let operacion = posicion * -1 * (100/3)

        carrusel.style.transform = `translateX(${operacion}%)`;

        indicador.forEach((item, index) => {
            indicador[index].classList.remove('punto-activo')
        });
        indicador[index].classList.add('punto-activo')
    });
});