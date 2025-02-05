document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `;

    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const links = nav.querySelectorAll('a'); // Seleciona todos os links do menu

    if (!header || !nav) return;

    nav.style.display = 'none';
    header.insertBefore(menuToggle, nav);

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = nav.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Altera a cor dos links para branco quando o menu estiver aberto
        if (isOpen) {
            links.forEach(link => link.style.color = 'white'); // Altera para branco
        } else {
            links.forEach(link => link.style.color = ''); // Reseta a cor
        }

        // Usa visibilidade em vez de display para manter transições suaves
        nav.style.display = isOpen ? 'flex' : 'none';
    });

    // Fechar o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            nav.style.display = 'none';

            // Reseta a cor dos links quando o menu é fechado
            links.forEach(link => link.style.color = ''); // Reseta a cor
        }
    });

    // Fechar o menu ao clicar em um link
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            nav.style.display = 'none';

            // Reseta a cor dos links quando o menu é fechado
            links.forEach(link => link.style.color = ''); // Reseta a cor
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                entry.target.style.opacity = 1; // Torna visível
                observer.unobserve(entry.target);
            }
        });
    });

    services.forEach(service => {
        observer.observe(service);
    });
});

let currentSlide = 0;


function moveSlide(direction) {

const slides = document.querySelectorAll('.carousel-image');

currentSlide = (currentSlide + direction + slides.length) % slides.length;

const offset = -currentSlide * 100;

document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

}


// Iniciar o carrossel automaticamente (opcional)

setInterval(() => moveSlide(1), 5000); // Muda a imagem a cada 5 segundos

