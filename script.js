window.addEventListener('scroll',function(){
    const header= document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
  });
   function toggleMenu(){
     const menuToggle = document.querySelector('.menuToggle');
     const navigation = document.querySelector('.navigation');
     menuToggle.classList.toggle('active');
     navigation.classList.toggle('active');
   }
   var typed = new Typed('.typing', {
    strings: ["Frontend Developer", "Backend Developer", "Web Designer","Freelancer"],
    typeSpeed: 90,
    backSpeed: 60,
    loop:true
});
   