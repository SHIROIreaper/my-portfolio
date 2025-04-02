// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        }
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const formStatus = document.getElementById('formStatus');
    
    // Construct mailto link
    const name = encodeURIComponent(formData.get('name'));
    const email = encodeURIComponent(formData.get('email'));
    const phone = encodeURIComponent(formData.get('phone'));
    const message = encodeURIComponent(formData.get('message'));
    
    const mailtoLink = `mailto:vyshnavpc007@gmail.com?subject=Contact%20from%20Portfolio&body=Name:%20${name}%0AEmail:%20${email}%0APhone:%20${phone}%0A%0AMessage:%20${message}`;
    
    // Show success message
    formStatus.textContent = 'Opening your email client...';
    formStatus.style.display = 'block';
    formStatus.style.backgroundColor = '#d4edda';
    formStatus.style.color = '#155724';
    
    // Open email client after short delay
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 500);
    
    // Reset form
    this.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
});