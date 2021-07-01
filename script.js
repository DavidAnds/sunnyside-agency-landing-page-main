const toggleBTN = document.querySelector('.btn-toggle')
const navLink = document.querySelector('.navbar ul')

toggleBTN.addEventListener('click', () => {
    navLink.classList.toggle('open')
})