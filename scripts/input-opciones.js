const select = document.querySelector('.select');
const input = select.querySelector('input');

select.addEventListener('click', () => {
  select.classList.toggle('active');
});

select.querySelectorAll('li').forEach(op => {
  op.addEventListener('click', () => {
    input.value = op.textContent;
    select.classList.remove('active');
  });
});