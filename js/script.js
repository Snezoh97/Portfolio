/*========== Toggle icon navbar ============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*========== Scroll sections active link ============*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

navlinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    let target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
      navlinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    };
  });
});

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => link.classList.remove('active'));
      document.querySelectorAll(`header nav a[href*='${id}']`).forEach(link => {
        link.classList.add('active');
      });
    };
  });
/*===================== Sticky navbar ====================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*========== Remove toggle icon navbar ============*/

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

/*========== Scroll Reveal ============*/

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-containter, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========== Styped js ============*/
const typed = new Typed('.multiple-text',{
  strings: ['Frontend Developer', 'Software Developer', 'Java Developer', 'Mobile Developer'],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*========== SendEmail ============*/

function SendEmail(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let contact = document.getElementById("mobile").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let body = "<br/>Name: " + name + "<br/> Email: " + email + "<br/> Contact Number: " + contact + "<br/> Subject: " + subject + "<br/> Message: " + message;
  

  Email.send({
    SecureToken: "7124848f-5e5e-4efa-bdb9-7a3e2401b901",
    To : 'sinelizwintaku@gmail.com',
    From : "sinelizwintaku@gmail.com",
    Subject : "Hi Sinelizwi Ntaku, you have received an email from:",
    Body : body
  }).then(
    message => alert(message)
  );
}