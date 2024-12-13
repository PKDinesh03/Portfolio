

    var fbutton = document.getElementById("fbutton");
    var sbutton = document.getElementById("sbutton");
    var tbutton = document.getElementById("tbutton");
    var ffbutton = document.getElementById("ffbutton");


    function hide(){
      var x = document.getElementById("collapseExample");  

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
    document.getElementById('collapseExample1').style.display= 'none';  
    document.getElementById('collapseExample2').style.display= 'none';  
    document.getElementById('collapseExample3').style.display= 'none';  
    }hide()

    function hide1(){
      var x = document.getElementById("collapseExample1");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
      // document.getElementById('collapseExample1').style.display= 'block';  
    document.getElementById('collapseExample').style.display= 'none';  
    document.getElementById('collapseExample2').style.display= 'none';  
    document.getElementById('collapseExample3').style.display= 'none';  
    }
    function hide2(){
      var x = document.getElementById("collapseExample2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
  
    document.getElementById('collapseExample').style.display= 'none';  
    document.getElementById('collapseExample1').style.display= 'none';  
    document.getElementById('collapseExample3').style.display= 'none';  

    }
    
    function hide3(){
      var x = document.getElementById("collapseExample3");

    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "block";
    }
      // document.getElementById('collapseExample3').style.display= 'block';  
    document.getElementById('collapseExample').style.display= 'none';  
    document.getElementById('collapseExample1').style.display= 'none';  
    document.getElementById('collapseExample2').style.display= 'none';  
    }
