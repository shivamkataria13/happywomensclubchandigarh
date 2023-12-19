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



function init(){


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
navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', ()=>{
        navbar.classList.remove('active')
    })
})


















//Lenis 
const lenis = new Lenis({
    duration: .75,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
})

lenis.on('scroll', (e) => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

















    // GSAP
    gsap.registerPlugin('scrollTrigger');

    const tl = gsap.timeline({defaults: {ease: 'power4.in'}});



    tl.from('body',{
        autoAlpha:0,
    })


    //OPENING PAGE
    const openingPageText = new SplitType('.openingPageText h1', {types: 'words'})

    // tl.from( '.openingPage',  {
    //     duration: 1.9,
    //     y:13,
    //     opacity:0,  
    //     stagger: .1,
    //     ease:'power4.out',
    // })

    tl.to( '.openingPage  .openingPageText .word',  {
        duration: 1.9,
        y:0,
        opacity:1,
        stagger: .1,
        ease:'power4.out',
    })

    gsap.to( '.openingPage',  {
        duration: .9,
        'background': 'none',
        'backdrop-filter':'blur(0rem)',
        delay:3,
        ease:'power4.out',
    })

    tl.to( '.openingPageText',  {
        duration: .9,
        y:'4.5vh',
        x:'-21vw',
        scale:.7,
        opacity:0,
        ease:'power4.out',
    })
    tl.to( '.openingPage,  .openingPageText',  {
        'display':'none'
    })








    // HEADER
    tl.from( '.navBtn,  .logo-main',  {
        autoAlpha:0,
        duration: .6,
        y:-9,
        opacity:0,  
        stagger: .075,
        delay:-.69,
        ease:'power4.out',
    })
    tl.from( '.navbar-items a, .navbar-socials a', {
        autoAlpha:0,
        duration: .6,
        scale:.85,
        y:-9,
        opacity:0, 
        stagger: .075,
        delay:-.69,
        ease:'power4.out',
    })





    // INTROTEXT
    gsap.from('.introText', {
        duration: 1, 
        y:-50, 
        opacity:0, 
        delay:2.3,
        ease: 'bounce.inOut',
    })





    // INTROPARA
    gsap.from('.introParaItems', {
        duration: 1.3,
        y:26, 
        opacity:0, 
        stagger:.09,
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".introParaItems",
            scroller: "body",
            start: "top 75%",
            end: "top 75%",
            // markers:true
        }
    })






    // ABOUT TEXT
    gsap.from('.aboutText', {
        duration: 1.6,
        opacity:0, 
        stagger:.9,
        // 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".aboutText",
            scroller: "body",
            start: "top 55%",
            end: "top 55%",
        }
    })




    const splitTypes = document.querySelector('.aboutEnding h3')
    const text = new SplitType(splitTypes, {types: 'words'})

    gsap.from('.aboutEnding .word', {
        duration: .75,
        y:13,
        opacity:0, 
        stagger:.06,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".aboutEnding",
            scroller: "body",
            start: "top 55%",
            end: "top 55%",
        }
    })













    // LATEST EVENTS
    gsap.from('.latestEvents .mainHeading', {
        duration: 1,
        y:31,
        opacity:0, 
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".latestEvents .mainHeading",
            scroller: "body",
            start: "top 65%",
            end: "top 65%",
        }
    })


    gsap.from('.latestEvents .event', {
        duration: 1,
        scale:0,
        y:63,
        opacity:0,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".latestEvents .event",
            scroller: "body",
            start: "top 80%",
            end: "top 80%",
            // markers:true
        }
    })














    // TESTIMONIALS
    gsap.from('.testimonials .mainHeading', {
        duration: 1.3,
        y:-31,
        opacity:0,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".testimonials .mainHeading",
            scroller: "body",
            start: "top 75%",
            end: "top 75%",
        }
    })



    gsap.from('.testimonials .testimonialCarousel', {
        duration: 1.3,
        scale:0,
        opacity:0,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".testimonials .testimonialCarousel",
            scroller: "body",
            start: "top 80%",
            end: "top 80%",
        }
    })



    gsap.from('.testimonials .carouselBtns', {
        duration: 1,
        y:31,
        opacity:0,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".testimonials .carouselBtns",
            scroller: "body",
            start: "top 80%",
            end: "top 80%",
        }
    })

















    // footer animation
    // gsap.from('footer a', {
    //     duration: 1, 
    //     y:-13, 
    //     opacity:0, 
    //     ease:"back.in",  

    //     scrollTrigger:{
    //         trigger:"footer",
    //         scroller: "body",
    //         start: "top 90%",
    //         end: "top 90%",
    //         // markers:true
    //     }
    // })























    // MEMBERS PAGE
    gsap.from('.members h2', {
        duration: 1, 
        y:13, 
        opacity:0, 
        ease:"back.in",  
    })
    gsap.from('.founder img', {
        duration: 1.3, 
        // y:13, 
        scale:0.9,
        opacity:0, 
        ease:"back.in",  
    })


    gsap.from('.memberInfo', {
        duration: .8, 
        y:-13, 
        opacity:0, 
        ease:"back.in",  

        scrollTrigger:{
            trigger:".memberInfo",
            scroller: "body",
            start: "top 85%",
            end: "top 85%",
            // markers:true
        }
    })


















    // OUR STORY PAGE

    const ourStoryPageHeading = new SplitType('.storyParas h2', {types: 'char'})

    gsap.from('.storyParas h2 .char', {
        duration: 1,
        x:-31,
        opacity:0, 
        stagger:.06,
        delay:.8,
        ease:'power4.out',
    })





    gsap.from('.storyParas p', {

        duration: 1.3,
        y:-31,
        // x:13,
        opacity:0, 
        stagger:.6,
        delay:1.3,
        ease:'power4.out',
    })






    const ourStoryPage = new SplitType('.storyLastPara p', {types: 'words'})

    gsap.from('.storyLastPara .word', {
        duration: 2.1,
        y:13,
        // x:13,
        opacity:0, 
        stagger:.01,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".storyLastPara p",
            scroller: "body",
            start: "top 55%",
            end: "top 55%",
        }
    })

















    // OUR EVENTS PAGE


    // events headings
    const ourEventsPage = new SplitType('.ourEvent h2', {types: 'word'})

    gsap.from('.ourEvent1 h2', {
        duration: 1,
        y:-26,
        opacity:0, 
        delay:1,
        stagger:.06,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".ourEvent1 h2",
            scroller: "body",
            start: "top 70%",
            end: "top 70%",
        }
    })
    gsap.from('.ourEvent2 h2', {
        duration: 1,
        y:-26,
        opacity:0, 
        stagger:.06,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".ourEvent2 h2",
            scroller: "body",
            start: "top 70%",
            end: "top 70%",
        }
    })
    gsap.from('.ourEvent3 h2',{
        duration: 1,
        y:-26,
        opacity:0, 
        stagger:.06,
        ease:'power4.out',
        
        scrollTrigger:{
            trigger:".ourEvent3 h2",
            scroller: "body",
            start: "top 70%",
            end: "top 70%",
        }
    })






    // events img
    gsap.from('.ourEvent1 img', {
        duration: 1,
        y:26,
        opacity:0, 
        delay:1,
        stagger:.09,
        ease:'power4.out',

        scrollTrigger:{
            trigger:".ourEvent1 img",
            scroller: "body",
            start: "top 70%",
            end: "top 70%",
            // markers:true
        }
    })
    gsap.from('.ourEvent2 img', {
        duration: 1,
        y:26,
        opacity:0, 
        stagger:.09,
        ease:'power4.out',

        scrollTrigger:{
            trigger:".ourEvent2 img",
            scroller: "body",
            start: "top 70%",
            end: "top 70%",
            // markers:true
        }
    })
    gsap.from('.ourEvent3 img', {
        duration: 1,
        y:26,
        opacity:0, 
        stagger:.09,
        ease:'power4.out',

        scrollTrigger:{
            trigger:".ourEvent3 img",
            scroller: "body",
            start: "top 70%",
            end: "top 70%",
            // markers:true
        }
    })

        

    ScrollTrigger.refresh(true)




}




window.addEventListener('load',  function(event){
  
    init();

});
