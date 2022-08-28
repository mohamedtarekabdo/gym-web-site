/*=============== SHOW MENU ===============*/
 const navMenu =document.getElementById("nav-menu") ,
 navToggle =document.getElementById("nav-toggle"),
 navClose =document.getElementById("nav-close")


 if(navToggle){
    navToggle.addEventListener("click",()=>{navMenu.classList.add("show-menu")})
 }

 
 if(navClose){
    navClose.addEventListener("click",()=>{navMenu.classList.remove("show-menu")})
 }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")
const LinkAction = () =>{
   const navMenu = document.getElementById("nav-menu")
   // when we click on each nav__link , we remove the show-menu  
   navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click",LinkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
   const header = document.getElementById("header")
   //when the scroll is greater than 50 viewport height the scroll-header class to the header tag 
   this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header")
}
window.addEventListener("scroll",scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/


/*=============== EMAIL JS ===============*/
