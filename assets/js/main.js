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
const calculateForm = document.getElementById("calculate-form"),
      calculateCm = document.getElementById("calculate-cm"),
      calculateKg = document.getElementById("calculate-Kg"),
      calculateMessage = document.getElementById("calculate-message")

const calculateBmi = (e) => {
   e.preventDefault()
   // check if the fields have a value
   if(calculateCm.value === "" || calculateKg.value === ""){
   //Add and remove color
   calculateMessage.classList.remove("color-green")
   calculateMessage.classList.add("color-red")
   //show message
   calculateMessage.textContent = "Fill in the Height and Weight  👨🏻‍💻 "

   // Remove message three seconds
   setTimeout (() =>{
      calculateMessage.textContent = ""
   },3000)
  } else{
   // BMI Formula
   const cm = calculateCm.value / 100 ,
         Kg = calculateKg.value ,
         bmi = Math.round(Kg / ( cm * cm )) 

         // Show your health status
         if(bmi <18.5){
             // Add color and display message
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`
         } else if(bmi < 25){
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🦾🥳`
         } else {
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😔`
         }

         // To clear the input field
         calculateCm.value = ""
         calculateKg.value = ""
         // Remove message four seconds
         setTimeout(()=>{
            calculateMessage.textContent = ""
         }, 4000)
 }
}

calculateForm.addEventListener("submit",calculateBmi)
/*=============== EMAIL JS ===============*/
