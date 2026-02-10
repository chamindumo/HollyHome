document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form Submitted:', data);
            
            // Show success message
            const originalButton = contactForm.querySelector('button');
            const originalText = originalButton.innerText;
            
            originalButton.innerText = 'Message Sent!';
            originalButton.style.backgroundColor = '#2ecc71';
            originalButton.disabled = true;
            
            setTimeout(() => {
                contactForm.reset();
                originalButton.innerText = originalText;
                originalButton.style.backgroundColor = '';
                originalButton.disabled = false;
            }, 3000);
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(139, 0, 0, 0.9)';
            navbar.style.padding = '1rem 0';
            navbar.style.borderRadius = '0 0 20px 20px';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '0';
        }
    });
});
