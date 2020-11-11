function handleScroll() {
    const top = window.scrollY;
    const threshold = 30;
    if (top > threshold) {
        document.getElementById('header').classList.add('header-scrolled');
    } else {
        document.getElementById('header').classList.remove('header-scrolled');
    }
}

function init() {
    window.addEventListener('scroll', handleScroll);
}