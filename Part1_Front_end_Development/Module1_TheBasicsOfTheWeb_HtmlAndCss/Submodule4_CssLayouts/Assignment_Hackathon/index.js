const open_btn = document.getElementById('open_menu_btn');
const close_btn = document.querySelector('.close_menu_btn')
const menu_screen = document.getElementById('site_nav');

open_btn.addEventListener('click', ()=>{
    open_btn.style.display = 'none';
    menu_screen.style.display = "flex";
})

close_btn.addEventListener('click', ()=>{
     menu_screen.style.display = "none";
     open_btn.style.display = 'block';
})