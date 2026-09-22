// RFX Studio — site interactions

function initMobileMenu() {
    const button = document.querySelector("[data-mobile-menu-btn]");
    const menu = document.querySelector("[data-mobile-menu]");
    const links = menu?.querySelectorAll("[data-mobile-link]") || [];

    if (!button || !menu) return;

    const close = () => {
        menu.hidden = true;
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Buka menu navigasi");
    };

    const open = () => {
        menu.hidden = false;
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Tutup menu navigasi");
    };

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        menu.hidden ? open() : close();
    });

    links.forEach((link) => link.addEventListener("click", close));

    document.addEventListener("click", (event) => {
        if (!menu.hidden && !menu.contains(event.target) && !button.contains(event.target)) {
            close();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !menu.hidden) {
            close();
            button.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) close();
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            if (!href || href === "#" || !href.startsWith("#")) return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();

            const header = document.querySelector("[data-site-header]");
            const offset = (header?.offsetHeight || 80) + 12;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: Math.max(0, top),
                behavior: "smooth",
            });

            history.replaceState(null, "", href);
        });
    });
}

function initActiveNavLink() {
    const links = document.querySelectorAll("[data-nav-link]");
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const header = document.querySelector("[data-site-header]");

    if (!links.length || !sections.length) return;

    const update = () => {
        const offset = (header?.offsetHeight || 80) + 40;
        let current = sections[0].id;

        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - offset) {
                current = section.id;
            }
        });

        links.forEach((link) => {
            const active = link.getAttribute("href") === "#" + current;
            link.classList.toggle("is-active", active);

            if (active) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
}

function initScrollReveal() {
    const elements = document.querySelectorAll(".work-card, .service-row, .process li, .about__facts > div");

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    elements.forEach((element) => {
        element.classList.add("reveal-ready");
        observer.observe(element);
    });
}

function initProjectForm() {
    const form = document.querySelector("#project-form");
    const status = document.querySelector("#contact-status");

    if (!form || !status) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = new FormData(form);
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const brief = String(data.get("brief") || "").trim();

        if (!name || !email || !brief) {
            status.textContent = "Please complete the required fields.";
            return;
        }

        const inquiry = [
            "RFX Studio project inquiry",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            "",
            "Project brief:",
            brief,
        ].join("\n");

        try {
            await navigator.clipboard.writeText(inquiry);
            status.textContent = "Inquiry copied. Paste it into your preferred email or contact channel.";
            form.reset();
        } catch {
            status.textContent = "Inquiry prepared. Clipboard access is unavailable in this browser.";
        }
    });
}

function initAll() {
    initMobileMenu();
    initSmoothScroll();
    initActiveNavLink();
    initScrollReveal();
    initProjectForm();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
} else {
    initAll();
}
