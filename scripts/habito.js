const params = new URLSearchParams(window.location.search);

const nombre = params.get('nombre');
const progreso = params.get('progreso');

document.getElementById('tituloHabito').textContent = nombre;
document.getElementById('tipoProgreso').textContent = `Progreso: ${progreso}`;
document.title = `PulsoDiario - ${nombre}`;