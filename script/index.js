document.addEventListener('DOMContentLoaded', () => {
    console.log('index.js');

    document.querySelector('.drawer-menu-icon-burger').addEventListener('click', () => {
        document.querySelector('.global-content').classList.toggle('drawer-menu-icon-burger-open');
    });
});