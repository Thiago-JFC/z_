const topbar = document.querySelector('.topbar');
const btn = document.querySelector('.hamburger');

btn.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
    topbar.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Abrir menu');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
    topbar.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
        tn.setAttribute('aria-label', 'Abrir menu');
    }
});

document.addEventListener('click', (e) => {
    const clickedInside = topbar.contains(e.target);
    if (!clickedInside) {
    topbar.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Abrir menu');
    }
});