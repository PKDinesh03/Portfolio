// category picker(1)
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// category picker(2)
function openCity1(evt1, cityName) {
    var i, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
      tabcontent1[i].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
      tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt1.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen1").click();

  // swipper
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
  });