const calendario = document.getElementById('calendario');
const mes = document.getElementById('mes')

const hoy = new Date();
const year = hoy.getFullYear();
const month = hoy.getMonth(); // 0-11

const primerDia = new Date(year, month, 1).getDay(); // 0-dom
const diasMes = new Date(year, month + 1, 0).getDate();
const estadoDias = {};

// ajustar para lunes primero
const offset = primerDia === 0 ? 6 : primerDia - 1;

// espacios vacíos
for (let i = 0; i < offset; i++) {
  const vacio = document.createElement('div');
  vacio.classList.add('dia', 'vacio');
  calendario.appendChild(vacio);
  mes.textContent = month
}

// días reales
for (let dia = 1; dia <= diasMes; dia++) {
  const div = document.createElement('div');
  div.classList.add('dia');
  div.textContent = dia;

  // hoy
  if (dia === hoy.getDate()) {
    estadoDias[dia] = true;
    div.classList.add('activo');
  } else {
    estadoDias[dia] = false;
  }

  div.addEventListener('click', () => {
    estadoDias[dia] = !estadoDias[dia];
    div.classList.toggle('activo');
    renderEje();
  });

  calendario.appendChild(div);
}

const canvas = document.getElementById('ejeProgreso');
const ctx = canvas.getContext('2d');

const padding = 30;
const ejeX0 = padding;
const ejeY0 = canvas.height - padding;

// ejes
ctx.beginPath();
ctx.moveTo(ejeX0, padding);
ctx.lineTo(ejeX0, ejeY0);
ctx.lineTo(canvas.width - padding, ejeY0);
ctx.stroke();

const escalaY = (canvas.height - padding * 2) / diasMes;
const escalaX = (canvas.width - padding * 2);

function renderEje() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ejes
  ctx.beginPath();
  ctx.moveTo(ejeX0, padding);
  ctx.lineTo(ejeX0, ejeY0);
  ctx.lineTo(canvas.width - padding, ejeY0);
  ctx.stroke();

  let prevX = null;
  let prevY = null;

for (let dia = 1; dia <= diasMes; dia++) {
  const x = estadoDias[dia]
    ? ejeX0 + escalaX
    : ejeX0;

  const y = ejeY0 - dia * escalaY;

  // dibujar línea
  let prevX = null;
  let prevY = null;
  acumulado = 0;

for (let dia = 1; dia <= diasMes; dia++) {
  if (estadoDias[dia]) acumulado++;

  const x = ejeX0 + (acumulado / diasMes) * escalaX;
  const y = ejeY0 - dia * escalaY;

  if (prevX !== null) {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#22c55e';
  ctx.fill();

  prevX = x;
  prevY = y;
}
}
}

