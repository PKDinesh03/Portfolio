// this section are home java

var navbar = document.getElementById("navbar");
var x = document.getElementById("home-text");

window.onscroll = function(){
  if(window.pageYOffset >= 0.001){
    navbar.classList.add("sticky");
   // var x = document.getElementById("home-text").style.height="120vh";
  }
  else{
    navbar.classList.remove("sticky");
   // var x = document.getElementById("home-text").style.height="60vh";
  }
}

// nav bar

const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navLinks = document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click',() =>{
  navLinks.classList.toggle('active')
})
