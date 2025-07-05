const loader = document.querySelector(".loader");
const main = document.getElementById("main");
const percent = document.querySelector(".loader-percentage");
const icons = document.querySelectorAll(".sports-icons i");

let count = 0;

function animateLoader() {
    const tl = gsap.timeline();

    tl.to(".brand-title", {
        opacity: 1,
        y: -20,
        duration: 1,
        ease: "power3.out"
    });

    tl.to(icons, {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "back.out(1.7)"
    }, "-=0.6");

    tl.to(".loader-percentage", {
        opacity: 1,
        duration: 0.5
    });

    // Fake loading percentage
    let interval = setInterval(() => {
        if (count >= 100) {
            clearInterval(interval);
            gsap.to(loader, {
                opacity: 0,
                duration: 0.8,
                onComplete: () => {
                    loader.style.display = "none";
                    main.style.visibility = "visible";
                    runIntroAnimations(); // your intro gsap
                }
            });
        } else {
            count++;
            percent.textContent = `${count}%`;
        }
    }, 25);
}

window.addEventListener("load", () => {
    animateLoader();
});

function runIntroAnimations() {
    gsap.from(".Navbar", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    });

    gsap.from(".Navbar li", {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        delay: 0.6,
        duration: 0.8,
        ease: "power2.out"
    });

    const headings = document.querySelectorAll(".extra h1");

    gsap.from(headings[0], {
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "power3.out"
    });

    gsap.from(headings[1], {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "power3.out"
    });

    const h2 = document.querySelector(".hero-center-text h2");
    const letters = h2.textContent.split("");
    h2.innerHTML = letters.map(letter =>
        `<span class="letter">${letter === " " ? "&nbsp;" : letter}</span>`
    ).join("");

    gsap.from(".hero-center-text .letter", {
        y: -80,
        opacity: 0,
        stagger: 0.02,
        duration: 1,
        ease: "bounce.out"
    });

    gsap.to(".main-text img", {
        duration: 2,
        ease: "power2.out",
        motionPath: {
            path: [
                { x: -100, y: -100 },
                { x: 200, y: 0 },
                { x: 400, y: 150 },
                { x: 550, y: 250 }
            ],
            curviness: 1.10
        },
        rotation: 720,
        opacity: 1
    });
}


const h1 = document.querySelector(".text-wrap");
const img = h1.querySelector("img");
const text = h1.textContent.trim();

// Clear original, keep image
h1.innerHTML = '';
h1.appendChild(img);

// Wrap each letter
text.split('').forEach(letter => {
    const span = document.createElement('span');
    span.innerHTML = letter === " " ? "&nbsp;" : letter;
    h1.appendChild(span);
});

// Animate letters on scroll
gsap.to(".text-wrap span", {
    scrollTrigger: {
        trigger: ".granger-wrap",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.08,
    ease: "power4.out"
});

// TAG (THE BENEFIT)
gsap.from(".left-text .tag", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".left-text .tag",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// TITLE (Explore...)
gsap.from(".left-text .title-text", {
    y: 100,
    opacity: 0,
    rotateX: 45,
    scale: 0.95,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".left-text .title-text",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// TAG BUTTONS
gsap.from(".left-text .tag-buttons", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.4)",
    scrollTrigger: {
        trigger: ".left-text .tag-buttons",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// BOTTOM TEXT
gsap.from(".left-text .Bottom-text", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".left-text .Bottom-text",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// SPORT PACKAGE
gsap.from(".left-text .sport-package", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".left-text .sport-package",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// LEFT: right-top content
gsap.from(".right-content-wrapper .right-top > *", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".right-content-wrapper .right-top",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// RIGHT: Image pop-in
gsap.from(".right-content-wrapper .right-image-card img", {
    scale: 0.85,
    opacity: 0,
    rotate: 6,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".right-image-card",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 👑 Tags bounce + blur reveal
gsap.from(".third-header .tag", {
    y: -30,
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.8)",
    scrollTrigger: {
        trigger: ".third-header",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// ✍️ Sub Label (THE PROGRAM) slide in right with skew
gsap.from(".section-label", {
    x: 100,
    opacity: 0,
    skewX: 15,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".section-label",
        start: "top 95%",
        toggleActions: "play none none reverse"
    }
});

// 🎯 Heading text zoom-out with delay
gsap.from(".third-heading", {
    scale: 1.3,
    opacity: 0,
    duration: 1.1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".third-heading",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// 🔢 Left panel number rotate-in
gsap.from(".left-info h1", {
    rotationX: 90,
    opacity: 0,
    transformOrigin: "top center",
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".left-info h1",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🧭 Arrows slide in individually
gsap.from(".arrow-btns button", {
    x: -40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "circ.out",
    scrollTrigger: {
        trigger: ".arrow-btns",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🖼️ Image float up with opacity + rotate
gsap.from(".third-img img", {
    y: 80,
    opacity: 0,
    rotate: 8,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".third-img",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🔹 Section label slide from top
gsap.from(".activity-section .section-label", {
    y: -40,
    opacity: 0,
    filter: "blur(5px)",
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".activity-section .section-label",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🔹 Heading with clip reveal (mask-like)
gsap.from(".activity-heading", {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".activity-heading",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🔹 Icons spin-in
gsap.from(".activity-icons span", {
    rotate: 180,
    scale: 0.5,
    opacity: 0,
    stagger: 0.15,
    ease: "back.out(1.7)",
    duration: 0.9,
    scrollTrigger: {
        trigger: ".activity-icons",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🔹 Description slide-in left
gsap.from(".boost-block .activity-desc", {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".boost-block",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🔹 CTA Button pop-in
gsap.from(".cta-btn", {
    scale: 0,
    opacity: 0,
    delay: 0.6,
    duration: 0.6,
    ease: "back.out(2)",
    scrollTrigger: {
        trigger: ".boost-block",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🔹 Right image: zoom from top-right
gsap.from(".coming-img-placeholder img", {
    x: 100,
    y: -100,
    scale: 0.6,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".coming-img-placeholder img",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});


// 🟡 1. Dot label (Current Events)
gsap.from(".dot-label", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".dot-label",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 2. Main heading
gsap.from(".event-title", {
    scale: 1.1,
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".event-title",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 3. Entire list items (stagger in)
gsap.from(".event-item", {
    x: -80,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".event-list",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 4. Each card content (smooth rise)
gsap.from(".event-card-content", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".event-list",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 5. Tags inside each card
gsap.from(".event-item .tags span", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".event-list",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 6. Button Icons
gsap.from(".card-btn i", {
    rotate: -90,
    scale: 0.5,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".event-list",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 Heading Clip Reveal
gsap.from(".sixth-heading", {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".sixth-heading",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 Tags Stagger Pop-in
gsap.from(".sixth-tags .tag", {
    y: 30,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".sixth-tags",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 Testimonial Card Bounce In
gsap.from(".testimonial-card", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 Quote Fade-in
gsap.from(".quote", {
    opacity: 0,
    y: 20,
    delay: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 Rating Pop
gsap.from(".rating", {
    scale: 0.5,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(2)",
    scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 User Info Slide Up
gsap.from(".user-info", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".user-info",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 Arrow Button Rotate In
gsap.from(".arrow-btn", {
    scale: 0,
    rotate: -180,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(2)",
    scrollTrigger: {
        trigger: ".arrow-btn",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🟡 Right Image Float In
gsap.from(".testimonial-img-placeholder img", {
    x: 100,
    y: 50,
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".testimonial-img-placeholder",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Heading reveal
gsap.from(".final-heading", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".final-heading",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Tags pop-in
gsap.from(".final-tags span", {
    y: 20,
    opacity: 0,
    scale: 0.85,
    stagger: 0.15,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".final-tags",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Location text slide from left
gsap.from(".locations p", {
    x: -40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".locations",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Footer Nav bounce
gsap.from(".footer-nav li", {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".footer-nav",
        start: "top 95%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Social links float from bottom
gsap.from(".social-links li", {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".social-links",
        start: "top 95%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Email & Copyright
gsap.from([".email", ".copyright"], {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".email",
        start: "top 95%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Dot icon pulse-in
gsap.from(".dot-icon", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(2)",
    scrollTrigger: {
        trigger: ".dot-icon",
        start: "top 95%",
        toggleActions: "play none none reverse"
    }
});

gsap.fromTo(
    ".middle-logo",
    {
        y: 100,
        scale: 0.9,
        opacity: 0,
        rotateX: 45,
        filter: "blur(10px)",
    },
    {
        y: 0,
        scale: 1,
        opacity: 1,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".middle-logo",
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        onComplete: () => {
            gsap.to(".middle-logo", {
                textShadow: "0 0 16px rgba(255,255,255,0.4)",
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: "power1.inOut",
            });
        },
    }
);


// 🌟 Policy + EST text fade-in
gsap.from(".middle-branding .seperate p, .middle-branding .seperate strong", {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".middle-branding",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Bottom Buttons animate in
gsap.from(".bottom-actions button", {
    scale: 0.7,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(2)",
    scrollTrigger: {
        trigger: ".bottom-actions",
        start: "top 95%",
        toggleActions: "play none none reverse"
    }
});

// 🌟 Bottom copyright fade-in
gsap.from(".bottom-copy", {
    opacity: 0,
    y: 10,
    duration: 0.6,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".bottom-copy",
        start: "top 95%",
        toggleActions: "play none none reverse"
    }
});


