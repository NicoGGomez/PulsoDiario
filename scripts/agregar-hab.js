let btnNuevo = document.getElementById('btn-nuevo-hab')
let menuNombre = document.getElementById('nombreHab')
let menuProgreso = document.getElementById('progresoHab')
let menuInicial = document.getElementById('agregarNuevoHab')

btnNuevo.addEventListener('click', () => {
    menuInicial.style.display = 'none'
    menuNombre.style.display = 'flex'
})

const formNombre = document.getElementById('miForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const datos = new FormData(form);
  const nombre = datos.get('nombreHabito');

  menuNombre.style.display = 'none'
  menuProgreso.style.display = 'flex'

  console.log(nombre);
});