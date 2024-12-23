document.addEventListener('DOMContentLoaded', () => {
    // Fade in elements sequentially
    const fadeElements = [
        document.querySelector('.logo'),
        document.querySelector('h1'),
        document.querySelector('.bio'),
        document.querySelector('.social-links')
    ];

    fadeElements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            setTimeout(() => {
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 * index);
        }
    });

    // Animate social icons on hover
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.transition = 'transform 0.3s ease';
        });
        link.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0)';
        });
    });

    // Animate code logo
    const logo = document.querySelector('.code-logo');
    if (logo) {
        let pulsing = false;
        
        function pulseAnimation() {
            if (!pulsing) {
                pulsing = true;
                logo.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    logo.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        logo.style.transform = 'scale(1)';
                        pulsing = false;
                    }, 300);
                }, 300);
            }
        }

        // Start pulse animation every 4 seconds
        setInterval(pulseAnimation, 4000);
        
        // Add hover effect
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.1) rotate(180deg)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});
