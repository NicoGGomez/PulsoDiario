const estadoDias = {}; // { 1: true, 2: false, ... }

const eje = document.getElementById('ejeProgreso');
const diasMess = new Date(2026, 1, 0).getDate(); // ejemplo febrero

function renderEje() {
  eje.innerHTML = '';

  for (let dia = 1; dia <= diasMess; dia++) {
    const fila = document.createElement('div');
    fila.classList.add('fila-dia');

    const label = document.createElement('span');
    label.textContent = dia;

    const punto = document.createElement('div');
    punto.classList.add('punto');

    if (estadoDias[dia]) {
      punto.classList.add('activo');
    }

    fila.append(label, punto);
    eje.appendChild(fila);
  }
}

renderEje();

div.addEventListener('click', () => {
  estadoDias[dia] = !estadoDias[dia];
  div.classList.toggle('activo');
  renderEje();
});

