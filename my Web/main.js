let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*========================   SCROLL REVEL   ===========================*/
// ScrollReveal({
//     distance: '100px',
//     duration: 4000,
//     DelayNode: 400,
// });

// ScrollReveal().reveal('.home-content, heading1', { origin: 'top'});
// ScrollReveal().reveal('.services-container, .row, .contact-form, .portfolio, .services2', { origine: 'buttom'});
// ScrollReveal().reveal('.home-content p, .about-img, .container1, .services1, .contact-text', { origin: 'left'});
// ScrollReveal().reveal('.container1, .about-contact, .services3, .about', { origine: 'right'});



var typed = new Typed(".text", {
    strings:["Photoshop Editor" ,"Web Developer" , "Hacker"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});