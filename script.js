document.addEventListener('DOMContentLoaded', () => {
    const botonIrPrimeraPantalla = document.getElementById('play-button');
    const botonIrSegundaPantalla = document.getElementById('otra-button');
    const botonVolver = document.getElementById('boton-volver');
    const botonSi = document.getElementById('boton-si');
    const h2FirstChoice = document.getElementById('h2-first-choice');
    const imgHalo1 = document.getElementById('img-halo-1');
    const imgHalo2 = document.getElementById('img-halo-2');
    const botonRechazar = document.getElementById('rechazar-boton');
    const botonAceptar = document.getElementById('aceptar-boton'); 

    if (botonIrSegundaPantalla) {
        botonIrSegundaPantalla.addEventListener('click', () => {
            window.location.href = 'second-choice.html';
        });
    }

    if (botonVolver) {
        botonVolver.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (botonIrPrimeraPantalla) {
        botonIrPrimeraPantalla.addEventListener('click', () => {
            window.location.href = 'first-choice.html';
        });
    }

    if (botonRechazar) {
        botonRechazar.addEventListener('click', () => {
            window.location.href = 'rechazar.html';
        });
    }
    if (botonSi && h2FirstChoice && imgHalo1 && imgHalo2) {
        botonSi.addEventListener('click', () => {
            h2FirstChoice.classList.remove('hidden');
            imgHalo2.classList.remove('hidden');
            botonSi.classList.add('hidden');
            setTimeout(() => {
                window.location.href = 'third-choice.html';
            }, 2000); 
        });
    }

    if (botonAceptar) {
        botonAceptar.addEventListener('click', () => { 
            window.location.href = 'minigame.html'; 
        });
    }
});
