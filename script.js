// navbar script
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav-link')
window.onscroll = () => {
    let top = window.scrollY
    sections.forEach((sec) => {
        if (sec.id === 'hero-section' || sec.id === 'about-section' || sec.id === 'service-section' || sec.id === 'portfolio-section' || sec.id === 'contact-section') {
            let offset = sec.offsetTop
            let height = sec.offsetHeight
            let sectionId = sec.getAttribute('id')
            if (top >= offset && top < offset + height ) {
                navLinks.forEach((link) => {
                    link.classList.remove('active')
                    document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active')
                })
            }
        }

    })
}
//Email Js Script

// document.getElementById('contact-form').addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let params ={
//         form_name:document.getElementById('full_name').value,
//         email_id:document.getElementById('email_id').value,
//         message: document.getElementById('message').value
        
        
//     }
// emailjs.send("service_ogw2ub8","template_505a4nc",params).then(()=>{
// document.querySelector('.thank-you-msg').style.display ="block";
// document.getElementById('full_name').value =""
// document.getElementById('email_id').value =""
// document.getElementById('message').value =""
// setTimeout(()=>{
// document.querySelector('.thank-you-msg').style.display ="none"
// },2500)
// })
// } )

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 2,
    loop: true,
    autoplay: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
    coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
  
//   breakpoints: {
//     // When window width is >= 640px
//     0: {
//       slidesPerView: 1, // Show 2 slides
//       spaceBetween: 20,
//     },
//     // When window width is >= 768px
//     768: {
//       slidesPerView: 2, // Show 3 slides
//       spaceBetween: 30,
//     },
//     // When window width is >= 1024px
//     1024: {
//       slidesPerView: '2', // Show 4 slides
//       spaceBetween: 20,
//     },
//     // When window width is >= 1440px
    
//   }
});

        // Set a timeout of 3 seconds before hiding the loading overlay and showing content
        setTimeout(function() {
            // Hide the loading overlay after 3 seconds
            document.getElementById('loading-overlay').style.display = 'none';

            // Show the main content after the overlay is hidden
            document.querySelector('h1').style.display = 'block'; // Show the heading
            document.querySelector('p').style.display = 'block'; // Show the paragraph

            // Optionally change background color of body after loading
            document.body.style.backgroundColor = '#ffffff'; // Change background to white or any color
        }, 1000);  // 3000ms = 3 seconds





