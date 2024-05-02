let menu = document.querySelector('#menu-icono');
let navbar = document.querySelector('.navbar');

// menu activarlo 
menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
    // remove menu
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.texto', { delay: 200, origin: 'top' })
sr.reveal('.form-container form', { delay: 800, origin: 'left' })
sr.reveal('.acerca-container .acerca-img', { delay: 800, origin: 'left' })
sr.reveal('.titulo', { delay: 800, origin: 'top' })
sr.reveal('.conducir-container .caja', { delay: 600, origin: 'top' })
sr.reveal('.servicio-container .caja', { delay: 600, origin: 'top' })
sr.reveal('.acerca-container .acerca-texto', { delay: 600, origin: 'right' })
sr.reveal('.opiniones-container', { delay: 600, origin: 'top' })
sr.reveal('.boletin .caja', { delay: 400, origin: 'bottom' })