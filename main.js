// ============================================
// MAIN.JS - OC-NetSolutions Website
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================================
    // ANIMATED COUNTERS
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target % 1 === 0 ? target : target.toFixed(1);
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger counter animation if element has data-target
                const counter = entry.target.querySelector('[data-target]');
                if (counter && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    const target = parseFloat(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                }
                
                // Trigger all counters in the element
                const counters = entry.target.querySelectorAll('[data-target]');
                counters.forEach(counterElement => {
                    if (!counterElement.classList.contains('animated')) {
                        counterElement.classList.add('animated');
                        const target = parseFloat(counterElement.getAttribute('data-target'));
                        animateCounter(counterElement, target);
                    }
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
    
    // ============================================
    // FORM SUBMISSION HANDLER
    // ============================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Show success message
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Message Sent!';
            submitButton.style.background = 'linear-gradient(135deg, #00FF9F 0%, #7DFFC4 100%)';
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.style.background = '';
            }, 3000);
            
            // In production, you would send this data to a server
            console.log('Form submitted:', data);
        });
    }
    
    // ============================================
    // PARALLAX EFFECT FOR HERO SECTION
    // ============================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroGradient = document.querySelector('.hero-gradient');
        
        if (heroGradient && scrolled < window.innerHeight) {
            heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroGradient.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
    
    // ============================================
    // ADD ACTIVE CLASS TO CURRENT NAV LINK
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ============================================
    // PRELOAD ANIMATIONS ON PAGE LOAD
    // ============================================
    window.addEventListener('load', function() {
        // Trigger animations for elements in viewport
        const elementsInView = document.querySelectorAll('.fade-in');
        elementsInView.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });
    
    // ============================================
    // DYNAMIC YEAR IN FOOTER
    // ============================================
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // ============================================
    // ADD HOVER EFFECT TO SERVICE CARDS
    // ============================================
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    // Debounce scroll events for better performance
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
    
    // Apply debounce to scroll-intensive functions
    window.addEventListener('scroll', debounce(updateActiveNavLink, 50));
    
    console.log('OC-NetSolutions website loaded successfully!');
});
