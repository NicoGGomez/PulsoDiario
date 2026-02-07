const btnMenuHamb = document.getElementById('btnMenuHamb')
const menuHamb = document.getElementById('menuHamburguesaCe')

btnMenuHamb.addEventListener('click', () => {
    if (menuHamb.style.display === "flex") {
    menuHamb.classList.toggle('activo')
    } else {
    menuHamb.classList.toggle('activo')
    }
})