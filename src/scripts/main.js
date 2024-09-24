document.addEventListener('DOMContentLoaded', function() {

    // Programação das abas do cabeçalho ao rolar a página
    const links = document.querySelectorAll('.header__list__item a');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        links.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    const menuToggle = document.getElementById('menu-toggle');
    const headerButtons = document.getElementById('header-buttons');

    menuToggle.addEventListener('click', function() {
        headerButtons.classList.toggle('active-menu');
    });
})