const mainMenu = document.querySelector(".menu-list");
const closeMenu = document.querySelector(".closemenu");
const openMenu = document.querySelector(".openmenu");

openMenu.addEventListener("click", abreMenu);
closeMenu.addEventListener("click", fechaMenu);

function abreMenu(){

    mainMenu.style.display="flex";
    mainMenu.style.top="0";

}

function fechaMenu(){

    mainMenu.style.top="-100%";
    
}