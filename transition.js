document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-1').addEventListener('click', function () {
        document.body.classList.add('transitioning');
        setTimeout(function () {
            window.location.href = 'nueva_pagina.html'; // Cambia esto por la URL de tu nueva página
        }, 1500); // Ajusta el tiempo de la animación y la transición
    });
});

