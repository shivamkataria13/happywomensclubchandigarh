// nav button open and close
const buttontwo = document.querySelector(".navBtn")


buttontwo.addEventListener('click', ()=>{
    const isOpened = buttontwo.getAttribute('aria-expanded');
    if(isOpened === "false"){
        buttontwo.setAttribute('aria-expanded', 'true')
    }
    else{
        buttontwo.setAttribute('aria-expanded', 'false')
    }
})



const navbar = document.querySelector(".navbar")
// const logo = document.querySelector('.logo')

buttontwo.addEventListener('click', ()=>{
    if(!navbar.classList.contains('active')){
        navbar.classList.add('active')
        // logo.style.position = "relative"
        
    }else{
        navbar.classList.remove('active')
    }
})


const navLinks = document.querySelectorAll('.links')
console.log(navLinks)
navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', ()=>{
        navbar.classList.remove('active')
    })
})