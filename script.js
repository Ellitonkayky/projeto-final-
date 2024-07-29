const menu = document.querySelector(".menu")
const Nav_Menu = document.querySelector(".nav_menu")

menu.addEventListener("click", () => 
{   
    menu.classList.togger("ativo");
    Nav_Menu.classList.togger("ativo");
})