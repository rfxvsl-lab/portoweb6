// ===================================
// BROOKLYN GILBERT PORTFOLIO - JavaScript
// ===================================

// ===================================
// 1. MOBILE MENU FUNCTIONALITY
// ===================================
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a, button') : [];

    if (!mobileMenuBtn || !mobileMenu) return;

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        mobileMenu.style.display = mobileMenu.classList.contains('hidden') ? 'none' : 'block';
    });

    // Close menu when link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.style.display = 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.style.display = 'none';
        }
    });

    // Close menu when scrolling
    window.addEventListener('scroll', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.style.display = 'none';
    });
}

// ===================================
// 2. SMOOTH SCROLLING WITH OFFSET
// ===================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===================================
// 3. ACTIVE NAVIGATION LINK
// ===================================
function initActiveNavLink() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('[id]');

    const makeLinksInactive = () => {
        navLinks.forEach(link => {
            link.classList.remove('text-purple-600', 'font-bold');
            link.classList.add('text-gray-600');
        });
    };

    const highlightLink = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        makeLinksInactive();
        
        if (current) {
            const activeLink = document.querySelector(`a[href="#${current}"]`);
            if (activeLink) {
                activeLink.classList.remove('text-gray-600');
                activeLink.classList.add('text-purple-600', 'font-bold');
            }
        }
    };

    window.addEventListener('scroll', highlightLink);
    highlightLink();
}

// ===================================
// 4. FORM HANDLING
// ===================================
function initFormHandling() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            const messageInput = form.querySelector('textarea');

            // Simple validation
            if (!nameInput || !nameInput.value.trim() || !emailInput || !emailInput.value.trim() || !messageInput || !messageInput.value.trim()) {
                alert('Please fill in all required fields');
                return;
            }

            if (!emailInput.value.includes('@')) {
                alert('Please enter a valid email');
                return;
            }

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                background: linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%);
                color: #FFFFFF;
                padding: 15px;
                border-radius: 8px;
                margin-top: 15px;
                text-align: center;
                font-weight: 600;
                animation: fadeInUp 0.3s ease;
            `;
            successMessage.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
            
            form.appendChild(successMessage);
            form.reset();

            setTimeout(() => {
                successMessage.remove();
            }, 4000);
        });
    });
}

// ===================================
// 5. SCROLL REVEAL ANIMATION
// ===================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal], .process-card, .portfolio-item, .blog-card, .service-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// ===================================
// 6. PORTFOLIO FILTERING
// ===================================
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('[data-portfolio-filter]');
    const portfolioItems = document.querySelectorAll('[data-portfolio-category]');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-portfolio-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('filter-active'));
            filterButtons.forEach(btn => btn.classList.add('filter-inactive'));
            button.classList.remove('filter-inactive');
            button.classList.add('filter-active');

            // Filter items with animation
            portfolioItems.forEach(item => {
                if (selectedCategory === 'all' || item.getAttribute('data-portfolio-category') === selectedCategory) {
                    item.style.display = 'block';
                    item.style.animation = 'scaleIn 0.6s ease';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });
        });
    });
}

// ===================================
// 7. BACK TO TOP BUTTON
// ===================================
function initBackToTop() {
    const backToTopBtn = document.querySelector('[data-back-to-top]');
    
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// 8. LUCIDE ICONS REINITIALIZER
// ===================================
function reinitializeIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ===================================
// 9. INITIALIZE ALL FUNCTIONS
// ===================================
function initAll() {
    initMobileMenu();
    initSmoothScroll();
    initActiveNavLink();
    initFormHandling();
    initScrollReveal();
    initPortfolioFilter();
    initBackToTop();
    reinitializeIcons();
    
    console.log('✓ All portfolio functions initialized successfully');
}

// ===================================
// 10. RUN ON PAGE LOAD
// ===================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

// Reinitialize icons periodically
window.addEventListener('load', reinitializeIcons);
