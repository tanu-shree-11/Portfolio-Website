

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon .onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
               document.querySelector('header nav a[href*=' + id +']').classList.add('active'); 

            });
        };

    });


    

};


    ScrollReveal({
         reset: true,
         distance: '80px',
         duration:2000,
         delay: 200

        });

        ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
        ScrollReveal().reveal('.home-img, .portfolio-box,.contact form', { origin:'top' });

        ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
        ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });




        var typed = new Typed('#element', {
            strings: ['Web Developer.', 'Web Designer.', 'Software Engineer.'],
            typeSpeed: 50,
            backSpeed:100,
            backDelay:1000,
            loop:true
          });

          function sendMessage() {
            alert("Message sent successfully!");
        }
     
    
    


