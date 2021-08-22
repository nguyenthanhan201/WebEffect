const menu_toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menu_toggle.addEventListener('click',()=>{
    menu_toggle.classList.toggle('active');
    nav.classList.toggle('active');
})