"use strict";
// Se recogen todos los bloques del acordeon (título y descripcion)
const bloque = document.querySelectorAll(".final__acordeon__bloque");
// Se recogen todos los títulos dentro de cada bloque del acordeon
const h3 = document.querySelectorAll(".final__acordeon__bloque--titulo");
// Recorremos todos los titulos y le añadimos un eventListener para detectar los clics
h3.forEach((cadah3, index)=>{
    h3[index].addEventListener("click", ()=>{
        // Si recibe click uno de los titulos se le quita la clase a todos los bloques
        // que muestra la descripción del bloque correspondiente
        bloque.forEach((cadabloque, index)=>{
            bloque[index].classList.remove("bloque_activo");
        });
        // Se activa la clase que muestra la descripción del bloque seleccionado
        bloque[index].classList.add("bloque_activo");
    });
});
// Se recogen todos los audios del documento
const audios = document.querySelectorAll(".audioWeb");
// Se recorren todos los audios y se le añade un eventListener para cuando se le da play a alguno
audios.forEach((cadaaudio, index)=>{
    audios[index].addEventListener("play", ()=>{
        // Al darle play a alguno de los audios, para todos los audios de la web
        audios.forEach((audio)=>{
            if (audio !== audios[index] && !audio.paused) audio.pause();
        });
        // A su vez, le da play al audio seleccionado
        audios[index].play();
    });
});

//# sourceMappingURL=index.26df4f75.js.map
