'use strict'

const boton = document.querySelectorAll('.personajes__info__tabs__botones--boton');
const tab   = document.querySelectorAll('.personajes__info__tabs__pestanias--pestania');

boton.forEach( (cadaBoton, index) => {
    boton[index].addEventListener('click', () => {
        boton.forEach( (cadaBoton, index) => {
            boton[index].classList.remove('button_active');
            tab[index].classList.remove('tab_active');
        });

        boton[index].classList.add('button_active');
        tab[index].classList.add('tab_active');
    });
});