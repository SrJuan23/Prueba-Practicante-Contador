let contador = 0;


const valorSpan = document.getElementById('valorContador');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');
const btnResetear = document.getElementById('btnResetear');


function actualizarDisplay() {
    valorSpan.textContent = contador;
}


btnIncrementar.addEventListener('click', () => {
    contador++;
    actualizarDisplay();
});

btnDecrementar.addEventListener('click', () => {
    contador--;
    actualizarDisplay();
});

btnResetear.addEventListener('click', () => {
    contador = 0;
    actualizarDisplay();
});

actualizarDisplay();