$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 1000,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        loop:true,
        autoplay:true,
        autoplayTimeout:9000,
        autoplayHoverPause:true,

    });

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      },
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
  })
    
  });

  window.addEventListener('scroll',()=> {
    var naveBar = document.querySelector('nav');
    naveBar.classList.toggle('skity', window.scrollY > 50);

    var scrollUp = document.querySelector(".scrollUpbutton");
    scrollUp.classList.toggle("show",window.scrollY > 300);

    scrollUp.addEventListener("click",()=>{
      window.scrollTo(0,0);
    })

  });

  // counting js start

  var cnumber = document.querySelector(".countjs");
  var cnumber2 = document.querySelector(".countjs2");
  var cnumber3 = document.querySelector(".countjs3");
  var cnumber4 = document.querySelector(".countjs4");
  var count =0;
  var count2 =0;
  var count3 =0;
  var count4 =0;

  setInterval(()=>{
    if (count < 1600) {
      count+= 2;
      cnumber.innerText = count;
    }

    if (count2 < 2500) {
      count2+= 2;
      cnumber2.innerText = count2;
    }

    if (count3 < 2150) {
      count3+= 2;
      cnumber3.innerText = count3;
    }

    if (count4 < 2150) {
      count4+= 2;
      cnumber4.innerText = count4;
    }
  },1)

  // counting js end


  // menu toggle design js

  var getid = document.getElementById("menuToggle1");
  var getid2 = document.getElementById("menuToggle2");
  var getid3 = document.getElementById("menuToggle3");
  

  getid.addEventListener("click",()=>{
    document.querySelector(".toggleMenu1").classList.toggle("showMenu");
    getid.classList.toggle("activeBg");


    document.querySelector(".toggleMenu2").classList.remove("showMenu");
    getid2.classList.remove("activeBg");

    document.querySelector(".toggleMenu3").classList.remove("showMenu");
    getid3.classList.remove("activeBg");
  })

  getid2.addEventListener("click",()=>{
    document.querySelector(".toggleMenu2").classList.toggle("showMenu");
    getid2.classList.toggle("activeBg");


    document.querySelector(".toggleMenu1").classList.remove("showMenu");
    getid.classList.remove("activeBg");

    document.querySelector(".toggleMenu3").classList.remove("showMenu");
    getid3.classList.remove("activeBg");
  })

  getid3.addEventListener("click",()=>{
    document.querySelector(".toggleMenu3").classList.toggle("showMenu");
    getid3.classList.toggle("activeBg");


    document.querySelector(".toggleMenu1").classList.remove("showMenu");
    getid.classList.remove("activeBg");


    document.querySelector(".toggleMenu2").classList.remove("showMenu");
    getid2.classList.remove("activeBg");
  })




  var getidsub = document.getElementById("toggleSubmenu1");
  var getidsub2 = document.getElementById("toggleSubmenu2");
  var getidsub3 = document.getElementById("toggleSubmenu3");

  getidsub.addEventListener("click",()=>{
    document.querySelector(".submenuToggle1").classList.toggle("subMenyshow");
    getidsub.classList.toggle("subMenuBg");



    document.querySelector(".submenuToggle2").classList.remove("subMenyshow");
    getidsub2.classList.remove("subMenuBg");

    document.querySelector(".submenuToggle3").classList.remove("subMenyshow");
    getidsub3.classList.remove("subMenuBg");
  })




  getidsub2.addEventListener("click",()=>{
    document.querySelector(".submenuToggle2").classList.toggle("subMenyshow");
    getidsub2.classList.toggle("subMenuBg");



    document.querySelector(".submenuToggle1").classList.remove("subMenyshow");
    getidsub.classList.remove("subMenuBg");


    document.querySelector(".submenuToggle3").classList.remove("subMenyshow");
    getidsub3.classList.remove("subMenuBg");
  })

  

  getidsub3.addEventListener("click",()=>{
    document.querySelector(".submenuToggle3").classList.toggle("subMenyshow");
    getidsub3.classList.toggle("subMenuBg");


    document.querySelector(".submenuToggle1").classList.remove("subMenyshow");
    getidsub.classList.remove("subMenuBg");

    document.querySelector(".submenuToggle2").classList.remove("subMenyshow");
    getidsub2.classList.remove("subMenuBg");
  })


 // loading page js

  $(window).on("load",()=>{
    $(".loader-wrapper").fadeOut("slow");
  })
