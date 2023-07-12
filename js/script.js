// ============= Toggle icon navbar ==================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ========== Scroll sections active link ============

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

// ===================== Sticky navbar ====================

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// ========== Remove toggle icon navbar ============

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// ========== Scroll Reveal ============

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-containter, .portfolio-box, .contact form,', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .testimonials', { origin: 'right' });

// ========== Styped ============

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Software Developer', 'Java Developer', 'Mobile Developer', 'Photographer', 'Videographer'],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


// ========== About Tab Links  ============

function opentab(tabname, event) {
  const tablinks = document.querySelectorAll('.tab-links');
  const tabcontents = document.querySelectorAll('.tab-contents');

  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ============ Swiper JS ============

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 3,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    dynamicBullets: 3, 
  },

  navigation: false,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      navigation: {
        nextEl: null, 
        prevEl: null, 
      },
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


// ========== SendEmail ============

function SendEmail(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let contact = document.getElementById("mobile").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let body = "<br/>Name: " + name + "<br/> Email Address: " + email + "<br/> Contact Number: " + contact + "<br/> Subject: " + subject + "<br/> Message: " + message;
  
  let emailSubject = "Hi Sinelizwi Ntaku, you have received a new email from: " + name;

  Email.send({
    SecureToken: "7124848f-5e5e-4efa-bdb9-7a3e2401b901",
    To : 'sinelizwintaku@gmail.com',
    From : "sinelizwintaku@gmail.com",
    Subject : emailSubject,
    Body : body
  }).then(
    message => alert(message)
  );
}
