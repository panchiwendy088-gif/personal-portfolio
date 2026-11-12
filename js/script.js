
/* =========================================
   1. TYPING ANIMATION
========================================= */

const typingElement = document.getElementById("typing-text");

if (typingElement) {

    const words = [
        "Web Development",
        "Software Development",
        "Database Management",
        "Artificial Intelligence"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (deleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingElement.textContent =
            currentWord.substring(0, characterIndex);

        let delay = deleting ? 60 : 100;

        if (!deleting && characterIndex === currentWord.length) {

            deleting = true;
            delay = 1200;

        } else if (deleting && characterIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            delay = 400;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
}


/* =========================================
   2. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    // Show all content if IntersectionObserver is unavailable.

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


/* =========================================
   3. ANIMATED SKILL BARS
========================================= */

const skillSections = document.querySelectorAll(".about-section");

if ("IntersectionObserver" in window) {

    const skillObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const skillBars =
                        entry.target.querySelectorAll(".skill-fill");

                    skillBars.forEach(bar => {

                        const level = bar.getAttribute("data-level");

                        bar.style.width = level + "%";

                    });

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    skillSections.forEach(section => {

        if (section.querySelector(".skill-fill")) {
            skillObserver.observe(section);
        }

    });

} else {

    document.querySelectorAll(".skill-fill").forEach(bar => {

        const level = bar.getAttribute("data-level");

        bar.style.width = level + "%";

    });

}


/* =========================================
   4. CONSOLE MESSAGE
========================================= */

console.log("Wendy's Portfolio JavaScript loaded successfully!");
