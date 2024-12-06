// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Toggle dark mode
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = '🌙';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerText = '☀️';
    } else {
        darkModeToggle.innerText = '🌙';
    }
});

// Collapsible sections
document.querySelectorAll('.collapsible').forEach(collapsible => {
    const content = collapsible.nextElementSibling;
    collapsible.addEventListener('click', () => {
        content.classList.toggle('active');
        collapsible.classList.toggle('expanded');
    });
});

// Dynamic testimonials slider
const testimonials = [
    { name: 'Alice', feedback: 'Amazing service! Highly recommend.' },
    { name: 'Bob', feedback: 'The features exceeded my expectations!' },
    { name: 'Charlie', feedback: 'User-friendly and well-designed.' },
];

const testimonialContainer = document.querySelector('.testimonials-container');
if (testimonialContainer) {
    let currentTestimonialIndex = 0;

    const updateTestimonial = () => {
        const testimonial = testimonials[currentTestimonialIndex];
        testimonialContainer.innerHTML = `
            <blockquote>
                "${testimonial.feedback}"
            </blockquote>
            <p>- ${testimonial.name}</p>
        `;
    };

    updateTestimonial();
    setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial();
    }, 5000); // Change testimonial every 5 seconds
}

// Preloader animation
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

// Responsive Navigation Toggle (Hamburger Menu)
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

// Lazy Load Images (Improves load time)
const images = document.querySelectorAll('img[data-src]');
const options = {
    rootMargin: '0px 0px 200px 0px', // Load images before they come into view
    threshold: 0.01, // Trigger the loading when the image is 1% in the viewport
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
}, options);

images.forEach(image => {
    imageObserver.observe(image);
});

// Form Validation (Example for Contact Form)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const message = contactForm.querySelector('#message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Process form submission (send data via AJAX, etc.)
        alert('Form submitted successfully!');
    });
}

// Responsive Design - Toggle Visibility of Elements Based on Screen Size
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        // Example: Hide large images or some elements on smaller screens
        document.querySelector('.large-image').style.display = 'none';
    } else {
        document.querySelector('.large-image').style.display = 'block';
    }
});

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const loadContentButton = document.querySelector('#load-more-btn');
    if (loadContentButton) {
        loadContentButton.addEventListener('click', () => {
            const newContent = document.createElement('div');
            newContent.innerHTML = `<p>Here is some more content added dynamically!</p>`;
            document.querySelector('.dynamic-content-container').appendChild(newContent);
        });
    }
});