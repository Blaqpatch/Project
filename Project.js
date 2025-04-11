// Simple form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! A trusted team member will contact you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Field Required.');
    }
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.classList.add('fade-in-hidden');
    observer.observe(section);
});
