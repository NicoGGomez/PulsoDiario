const btnNuevo = document.getElementById('btn-nuevo-hab');
const menuNombre = document.getElementById('nombreHab');
const menuProgreso = document.getElementById('progresoHab');
const menuInicial = document.getElementById('agregarNuevoHab');
const habitosAgregados = document.getElementById('habitosAgregados');
const estadHab = document.getElementById('ContEstadHab');

let nombreHabito = '';
let opcionProgreso = '';
let cantHab = 0

function agregarHabito(nombre, opcionProgreso) {
  const div = document.createElement('a');
  div.classList.add('nuevo-hab');
  div.textContent = `${nombre} - ${opcionProgreso}`;
  div.href = `${nombre}.html`;

  
  cantHab++
  estadHab.textContent = cantHab

  habitosAgregados.appendChild(div);
}

btnNuevo.addEventListener('click', () => {
  menuInicial.style.display = 'none';
  menuNombre.style.display = 'flex';
});

const formNombre = document.getElementById('formNombre');
formNombre.addEventListener('submit', (e) => {
  e.preventDefault();

  const datos = new FormData(formNombre);
  nombreHabito = datos.get('nombreHabito');

  menuNombre.style.display = 'none';
  menuProgreso.style.display = 'flex';
});

const formProgreso = document.getElementById('formProgreso');
const inputProgreso = document.getElementById('opcion-progreso');

formProgreso.addEventListener('submit', (e) => {
  e.preventDefault();

  opcionProgreso = inputProgreso.value;

  menuProgreso.style.display = 'none';
  menuInicial.style.display = 'flex';

  agregarHabito(nombreHabito, opcionProgreso);
});
