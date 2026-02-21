/* ==========================================
   BARBERSHOP WEBSITE JAVASCRIPT
   ========================================== */

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// SMOOTH SCROLL NAVIGATION
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.querySelector('.nav-links');
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            // Update active nav link
            updateActiveNavLink(targetId);
        }
    });
});

// ==========================================
// HAMBURGER MENU TOGGLE
// ==========================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================

function updateActiveNavLink(targetId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = '#' + section.getAttribute('id');
        }
    });

    if (currentSection) {
        updateActiveNavLink(currentSection);
    }
});

// ==========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ========================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-aos-delay') || 0;
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.animation = `${entry.target.getAttribute('data-aos')} 0.6s ease-out forwards`;
            }, parseInt(delay));
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ==========================================
// HERO SECTION ANIMATION ON LOAD
// ========================================== 

function animateHero() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');

    if (heroTitle) {
        heroTitle.style.animation = 'fadeInDown 0.8s ease-out forwards';
    }
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'fadeInUp 0.8s ease-out 0.2s forwards';
    }
    if (ctaButton) {
        ctaButton.style.animation = 'fadeInUp 0.8s ease-out 0.4s forwards';
    }
}

// Trigger hero animation on page load
window.addEventListener('load', animateHero);

// ==========================================
// CTA BUTTON SCROLL TO CONTACT
// ========================================== 

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// ==========================================
// SERVICE CARD HOVER ANIMATION
// ========================================== 

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==========================================
// GALLERY ITEM HOVER ZOOM
// ========================================== 

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const image = this.querySelector('.gallery-image');
        if (image) {
            image.style.transform = 'scale(1.1)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const image = this.querySelector('.gallery-image');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// ==========================================
// TESTIMONIAL CARD ANIMATIONS
// ========================================== 

const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 20px 60px rgba(212, 175, 55, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
    });
});

// ==========================================
// CONTACT INFO ITEMS ANIMATION
// ========================================== 

const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.borderColor = '#d4af37';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.borderColor = '#2a2a2a';
    });
});

// ==========================================
// HOURS DAYS HOVER ANIMATION
// ========================================== 

const hoursDays = document.querySelectorAll('.hours-day');
hoursDays.forEach(day => {
    day.addEventListener('mouseenter', function() {
        this.style.borderColor = '#d4af37';
        this.style.backgroundColor = 'rgba(212, 175, 55, 0.05)';
    });
    
    day.addEventListener('mouseleave', function() {
        this.style.borderColor = '#2a2a2a';
        this.style.backgroundColor = 'transparent';
    });
});

// ==========================================
// WHATSAPP BUTTON CLICK
// ========================================== 

const whatsappBtn = document.getElementById('whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        // Button already has href, so this is just enhancement
        // You can add custom logic here if needed
    });
}

// ==========================================
// PARALLAX SCROLL EFFECT (SUBTLE)
// ========================================== 

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.scrollY;
        hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
});

// ==========================================
// FADE-IN ON PAGE LOAD
// ========================================== 

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==========================================
// SCROLL TO TOP BUTTON (OPTIONAL)
// ========================================== 

function createScrollToTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #d4af37;
        color: #0f0f0f;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
        z-index: 998;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
        align-items: center;
        justify-content: center;
    `;

    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f0c856';
        this.style.transform = 'scale(1.1)';
    });

    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#d4af37';
        this.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// ==========================================
// SMOOTH SCROLL BEHAVIOR
// ========================================== 

document.addEventListener('DOMContentLoaded', () => {
    // Ensure all internal links scroll smoothly
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
            }
        });
    });
});

// ==========================================
// FORM VALIDATION (IF NEEDED IN FUTURE)
// ========================================== 

function initializeFormValidation() {
    // This can be extended if you add a contact form
    // For now, it's a placeholder for future functionality
}

// ==========================================
// UTILITY FUNCTION: VIEWPORT HEIGHT ADJUSTMENT
// ========================================== 

function adjustHeroHeight() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const viewportHeight = window.innerHeight;
        hero.style.height = `${viewportHeight}px`;
    }
}

window.addEventListener('resize', adjustHeroHeight);
window.addEventListener('load', adjustHeroHeight);

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================== 

// Focus management for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});

// ==========================================
// LAZY LOADING IMAGE PLACEHOLDERS
// ========================================== 

// Observer for lazy loading (can be used with actual images)
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
}, {
    rootMargin: '50px'
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ==========================================
// CONSOLE WELCOME MESSAGE
// ========================================== 

console.log('%c🎨 Welcome to Gentleman Cut Barbershop', 'font-size: 20px; color: #d4af37; font-weight: bold;');
console.log('%cWhere Style Meets Precision', 'font-size: 14px; color: #e0e0e0;');
console.log('%cMade with ❤️ for premium barbershop experience', 'font-size: 12px; color: #999;');

// ==========================================
// INITIALIZE ALL ANIMATIONS ON PAGE LOAD
// ========================================== 

window.addEventListener('DOMContentLoaded', () => {
    // Re-check scroll position on load
    window.dispatchEvent(new Event('scroll'));
    
    // Ensure navbar is properly styled on load
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50 && navbar) {
        navbar.classList.add('scrolled');
    }
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ========================================== 

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to resize event
const debouncedResize = debounce(adjustHeroHeight, 250);
window.addEventListener('resize', debouncedResize);

// ==========================================
// END OF JAVASCRIPT
// ========================================== 
