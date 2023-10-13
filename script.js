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












// testimonials carousel
const carousels = document.querySelectorAll(".carousels")

var counter = 0;
carousels.forEach((carousel, index)=>{
        carousel.style.left = `${index*100}%`
    }
)

const prevCard = () => {
    if (counter == 0) {
        counter = carousels.length - 1;
        slideCarousel();
    } 
    else {
        counter--;
        slideCarousel();
    }
}


const nextCard = () => {
    if (counter == carousels.length - 1) {
        counter = 0;
        slideCarousel();
    } else {
        counter++;
        slideCarousel();
    }
}


const slideCarousel = () => {
    carousels.forEach((carousel)=>{
        carousel.style.transform = `translateX(-${counter*100}%)`
    })
}