// ===================================
// BROOKLYN GILBERT PORTFOLIO - JavaScript
// ===================================

// ===================================
// 1. MOBILE MENU FUNCTIONALITY
// ===================================
function initMobileMenu() {
    const button = document.querySelector('[data-mobile-menu-btn]');
    const menu = document.querySelector('[data-mobile-menu]');
    const links = menu ? menu.querySelectorAll('[data-mobile-link]') : [];

    if (!button || !menu) return;

    const close = () => {
        menu.hidden = true;
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Buka menu navigasi');
    };

    const open = () => {
        menu.hidden = false;
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Tutup menu navigasi');
    };

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.hidden ? open() : close();
    });

    links.forEach(link => link.addEventListener('click', close));

    document.addEventListener('click', (event) => {
        if (!menu.hidden && !menu.contains(event.target) && !button.contains(event.target)) {
            close();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !menu.hidden) {
            close();
            button.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 860) close();
    });

    window.addEventListener('scroll', () => {
        if (!menu.hidden) close();
    }, { passive: true });
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
    const links = document.querySelectorAll('[data-nav-link]');
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const header = document.querySelector('[data-site-header]');

    if (!links.length || !sections.length) return;

    const setActive = (id) => {
        links.forEach(link => {
            const active = link.getAttribute('href') === '#' + id;
            link.classList.toggle('is-active', active);
            if (active) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
    };

    const update = () => {
        const offset = (header ? header.offsetHeight : 84) + 48;
        let current = sections[0].id;
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - offset) current = section.id;
        });
        setActive(current);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
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
