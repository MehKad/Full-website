const menuHamburger = document.querySelector(".menu-hmb")

const navLinks = document.querySelector(".nav-links")
 
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    }
)