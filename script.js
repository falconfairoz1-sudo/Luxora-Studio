const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const form = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');
const bookConsultationBtn = document.querySelector('#bookConsultationBtn');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menuToggle.textContent = mainNav.classList.contains('open') ? 'Close' : 'Menu';
  });
}

if (bookConsultationBtn) {
  bookConsultationBtn.addEventListener('click', () => {
    const subject = encodeURIComponent('Book Consultation Request');
    const body = encodeURIComponent(
      'Hi Luxora Studio,\n\nI would like to book a consultation. Please contact me to discuss my project.\n\nThank you.'
    );
    window.location.href = `mailto:luxorastudio07@gmail.com?subject=${subject}&body=${body}`;
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    const subject = encodeURIComponent('Book Consultation Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:luxorastudio07@gmail.com?subject=${subject}&body=${body}`;

    formMessage.textContent = 'Opening your email app to send the booking request...';
    window.location.href = mailtoLink;
    form.reset();
  });
}

const callButtons = document.querySelectorAll('.call-button');
if (callButtons.length) {
  callButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const telLink = button.getAttribute('href');
      if (telLink && telLink.startsWith('tel:')) {
        window.location.href = telLink;
      }
    });
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        if (menuToggle) menuToggle.textContent = 'Menu';
      }
    }
  });
});
