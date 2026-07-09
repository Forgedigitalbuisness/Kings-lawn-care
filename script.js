// HERO COUNTER ANIMATION

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {
    const targetText = counter.innerText;

    let target = parseInt(targetText.replace(/\D/g, ""));
    let count = 0;

    const updateCounter = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + targetText.replace(/[0-9]/g, "");
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = targetText;
        }
    };

    updateCounter();
});


// SCROLL ANIMATIONS

const hiddenElements = document.querySelectorAll(
    ".service-card, .why-card, .review-card, .cta-banner, .contact-section"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// NAVBAR SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
