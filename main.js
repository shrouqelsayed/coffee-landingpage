let menu=document.querySelector(".menu-btn")
let close=document.querySelector(".close-btn")
let navbar=document.querySelector(".navbar")

function c(){
    navbar.classList.toggle("active");
}
menu.addEventListener("click",c);
close.addEventListener("click",c);