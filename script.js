/* =========================================================
   KANNADA MESTRU — CLEAN JAVASCRIPT
   Safe, dependency-free and GitHub Pages friendly.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let currentLanguage = "en";

  const languageSwitch = document.getElementById("languageSwitch");
  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");
  const courseModal = document.getElementById("courseModal");
  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLearn = document.getElementById("modalLearn");
  const modalIncludes = document.getElementById("modalIncludes");
  const modalContact = document.getElementById("modalContact");
  const progress = document.querySelector(".scroll-progress");
  const cursorGlow = document.querySelector(".cursor-glow");
  const heroScript = document.querySelector(".hero-script");
  const sun = document.querySelector(".sun");
  const backTop = document.getElementById("backTop");

  /* ---------------------------------------------------------
     COURSE DATA
  --------------------------------------------------------- */

  const courses = {
    thirty: {
      title: {
        en: "Learn Kannada in 30 Days",
        kn: "30 ದಿನಗಳಲ್ಲಿ ಕನ್ನಡ ಕಲಿಯಿರಿ"
      },
      description: {
        en: "A structured 30-day online learning program designed for beginners who want to understand the fundamentals of Kannada and start using the language in everyday situations.",
        kn: "ಕನ್ನಡದ ಮೂಲಭೂತ ಅಂಶಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ ಕನ್ನಡವನ್ನು ಬಳಸಲು ಬಯಸುವ ಆರಂಭಿಕರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ 30 ದಿನಗಳ ಕ್ರಮಬದ್ಧ ಆನ್‌ಲೈನ್ ಕಲಿಕಾ ಕಾರ್ಯಕ್ರಮ."
      },
      learn: {
        en: [
          "Kannada alphabet and pronunciation",
          "Reading Kannada words",
          "Basic writing practice",
          "Common Kannada vocabulary",
          "Simple sentence formation",
          "Basic Kannada grammar",
          "Everyday conversations",
          "Developing speaking confidence"
        ],
        kn: [
          "ಕನ್ನಡ ವರ್ಣಮಾಲೆ ಮತ್ತು ಉಚ್ಚಾರಣೆ",
          "ಕನ್ನಡ ಪದಗಳನ್ನು ಓದುವುದು",
          "ಮೂಲಭೂತ ಬರವಣಿಗೆ ಅಭ್ಯಾಸ",
          "ಸಾಮಾನ್ಯ ಕನ್ನಡ ಪದಕೋಶ",
          "ಸರಳ ವಾಕ್ಯ ರಚನೆ",
          "ಮೂಲಭೂತ ಕನ್ನಡ ವ್ಯಾಕರಣ",
          "ದೈನಂದಿನ ಸಂಭಾಷಣೆ",
          "ಮಾತನಾಡುವ ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ಬೆಳೆಸುವುದು"
        ]
      },
      includes: {
        en: [
          "30-day structured learning plan",
          "Online classes",
          "Beginner-friendly lessons",
          "Practical language exercises",
          "Regular practice",
          "Teacher guidance"
        ],
        kn: [
          "30 ದಿನಗಳ ಕ್ರಮಬದ್ಧ ಕಲಿಕಾ ಯೋಜನೆ",
          "ಆನ್‌ಲೈನ್ ತರಗತಿಗಳು",
          "ಆರಂಭಿಕರಿಗೆ ಸೂಕ್ತವಾದ ಪಾಠಗಳು",
          "ಪ್ರಾಯೋಗಿಕ ಭಾಷಾ ಅಭ್ಯಾಸ",
          "ನಿಯಮಿತ ಅಭ್ಯಾಸ",
          "ಶಿಕ್ಷಕರ ಮಾರ್ಗದರ್ಶನ"
        ]
      }
    },

    school: {
      title: {
        en: "Kannada Online Tuition – Classes 1 to 10",
        kn: "ಕನ್ನಡ ಆನ್‌ಲೈನ್ ಟ್ಯೂಷನ್ – 1 ರಿಂದ 10ನೇ ತರಗತಿ"
      },
      description: {
        en: "Personalized online Kannada tuition for students from Class 1 to Class 10, designed to support school learning, strengthen fundamentals and prepare students for examinations.",
        kn: "1 ರಿಂದ 10ನೇ ತರಗತಿಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗಾಗಿ ಶಾಲಾ ಕಲಿಕೆಗೆ ಬೆಂಬಲ ನೀಡಲು, ಮೂಲಭೂತ ಜ್ಞಾನವನ್ನು ಬಲಪಡಿಸಲು ಮತ್ತು ಪರೀಕ್ಷೆಗಳಿಗೆ ಸಿದ್ಧಪಡಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ವೈಯಕ್ತಿಕ ಆನ್‌ಲೈನ್ ಕನ್ನಡ ಟ್ಯೂಷನ್."
      },
      learn: {
        en: [
          "School Kannada syllabus",
          "Kannada grammar",
          "Reading and comprehension",
          "Writing skills",
          "Poetry and prose",
          "Vocabulary development",
          "Question and answer practice",
          "Exam preparation"
        ],
        kn: [
          "ಶಾಲಾ ಕನ್ನಡ ಪಠ್ಯಕ್ರಮ",
          "ಕನ್ನಡ ವ್ಯಾಕರಣ",
          "ಓದು ಮತ್ತು ಅರ್ಥಗ್ರಹಣ",
          "ಬರವಣಿಗೆ ಕೌಶಲ್ಯ",
          "ಪದ್ಯ ಮತ್ತು ಗದ್ಯ",
          "ಪದಕೋಶ ಅಭಿವೃದ್ಧಿ",
          "ಪ್ರಶ್ನೋತ್ತರ ಅಭ್ಯಾಸ",
          "ಪರೀಕ್ಷಾ ತಯಾರಿ"
        ]
      },
      includes: {
        en: [
          "Classes 1 to 10",
          "Personalized attention",
          "Online teaching",
          "School curriculum support",
          "Homework assistance",
          "Regular practice",
          "Exam-oriented preparation"
        ],
        kn: [
          "1 ರಿಂದ 10ನೇ ತರಗತಿ",
          "ವೈಯಕ್ತಿಕ ಗಮನ",
          "ಆನ್‌ಲೈನ್ ಬೋಧನೆ",
          "ಶಾಲಾ ಪಠ್ಯಕ್ರಮದ ಬೆಂಬಲ",
          "ಮನೆಕೆಲಸದಲ್ಲಿ ಸಹಾಯ",
          "ನಿಯಮಿತ ಅಭ್ಯಾಸ",
          "ಪರೀಕ್ಷಾ ಆಧಾರಿತ ತಯಾರಿ"
        ]
      }
    }
  };

  let activeCourseId = null;

  /* ---------------------------------------------------------
     LANGUAGE SWITCH
  --------------------------------------------------------- */

  function updateLanguage() {
    document.documentElement.lang = currentLanguage === "kn" ? "kn" : "en";

    document.querySelectorAll("[data-en][data-kn]").forEach((element) => {
      const text = element.getAttribute(`data-${currentLanguage}`);
      if (text !== null) {
        element.textContent = text;
      }
    });

    if (languageSwitch) {
      languageSwitch.textContent = currentLanguage === "en" ? "ಕನ್ನಡ" : "English";
      languageSwitch.setAttribute(
        "aria-label",
        currentLanguage === "en" ? "Switch to Kannada" : "Switch to English"
      );
    }

    if (activeCourseId) {
      renderCourse(activeCourseId);
    }
  }

  if (languageSwitch) {
    languageSwitch.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "kn" : "en";
      updateLanguage();
    });
  }

  /* ---------------------------------------------------------
     COURSE MODAL
  --------------------------------------------------------- */

  function renderList(container, items) {
    if (!container) return;

    container.innerHTML = "";

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      container.appendChild(li);
    });
  }

  function renderCourse(courseId) {
    const course = courses[courseId];
    if (!course) return;

    if (modalTitle) {
      modalTitle.textContent = course.title[currentLanguage];
    }

    if (modalDescription) {
      modalDescription.textContent = course.description[currentLanguage];
    }

    renderList(modalLearn, course.learn[currentLanguage]);
    renderList(modalIncludes, course.includes[currentLanguage]);

    if (modalContact) {
      modalContact.textContent =
        currentLanguage === "en"
          ? "Enquire About This Course"
          : "ಈ ಕೋರ್ಸ್ ಕುರಿತು ವಿಚಾರಿಸಿ";
    }
  }

  function openCourse(courseId) {
    if (!courseModal || !courses[courseId]) return;

    activeCourseId = courseId;
    renderCourse(courseId);

    courseModal.classList.add("active");
    courseModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (modalClose) {
      setTimeout(() => modalClose.focus(), 50);
    }
  }

  function closeCourse() {
    if (!courseModal) return;

    courseModal.classList.remove("active");
    courseModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeCourseId = null;
  }

  document.querySelectorAll("[data-open-course]").forEach((button) => {
    button.addEventListener("click", () => {
      openCourse(button.getAttribute("data-open-course"));
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeCourse);
  }

  if (courseModal) {
    courseModal.addEventListener("click", (event) => {
      if (event.target === courseModal) {
        closeCourse();
      }
    });
  }

  if (modalContact) {
    modalContact.addEventListener("click", closeCourse);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && courseModal?.classList.contains("active")) {
      closeCourse();
    }
  });

  /* ---------------------------------------------------------
     MOBILE MENU
  --------------------------------------------------------- */

  function closeMobileMenu() {
    if (!mobileMenu || !menuToggle) return;

    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  /* ---------------------------------------------------------
     SCROLL REVEAL
  --------------------------------------------------------- */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }

  /* ---------------------------------------------------------
     SCROLL HANDLER
     One handler for progress, navbar, parallax and back-to-top.
  --------------------------------------------------------- */

  let ticking = false;

  function updateOnScroll() {
    const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    if (progress) {
      const percentage =
        maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 0;
      progress.style.width = `${percentage}%`;
    }

    if (navbar) {
      navbar.classList.toggle("navbar-scrolled", scrollTop > 60);
    }

    if (heroScript) {
      const parallax = Math.min(scrollTop * 0.08, 70);
      heroScript.style.setProperty("--parallax-y", `${parallax}px`);
    }

    if (sun) {
      const sunParallax = Math.min(scrollTop * 0.035, 45);
      sun.style.setProperty("--sun-y", `${sunParallax}px`);
    }

    if (backTop) {
      backTop.classList.toggle("show", scrollTop > 600);
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateOnScroll();

  /* ---------------------------------------------------------
     CURSOR GLOW
     Disabled on touch/coarse pointers.
  --------------------------------------------------------- */

  const canUseMouse =
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (cursorGlow && canUseMouse) {
    let mouseFrame = null;

    document.addEventListener("mousemove", (event) => {
      if (mouseFrame) return;

      mouseFrame = window.requestAnimationFrame(() => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
        mouseFrame = null;
      });
    });
  }

  /* ---------------------------------------------------------
     COURSE CARD 3D TILT
     Uses CSS variables, so it does not fight the hover CSS.
  --------------------------------------------------------- */

  const cards = document.querySelectorAll(".course-card");

  if (canUseMouse) {
    cards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        if (!rect.width || !rect.height) return;

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;

        card.style.setProperty("--rx", `${rotateX}deg`);
        card.style.setProperty("--ry", `${rotateY}deg`);
        card.style.setProperty("--lift", "-7px");
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--lift", "0px");
      });
    });
  }

  /* ---------------------------------------------------------
     MAGNETIC BUTTON EFFECT
     Only desktop, and only on primary CTA/language switch.
  --------------------------------------------------------- */

  if (canUseMouse) {
    document
      .querySelectorAll(".btn-primary, .language-switch")
      .forEach((button) => {
        button.addEventListener("mousemove", (event) => {
          const rect = button.getBoundingClientRect();

          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;

          button.style.setProperty("--mx", `${x * 0.08}px`);
          button.style.setProperty("--my", `${y * 0.08}px`);
          button.style.transform =
            `translate(var(--mx), var(--my)) scale(1.02)`;
        });

        button.addEventListener("mouseleave", () => {
          button.style.removeProperty("--mx");
          button.style.removeProperty("--my");
          button.style.transform = "";
        });
      });
  }

  /* ---------------------------------------------------------
     FLOATING PARTICLES
  --------------------------------------------------------- */

  function createParticles() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 24; i += 1) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${10 + Math.random() * 13}s`;
      particle.style.animationDelay = `${-Math.random() * 18}s`;

      const size = 2 + Math.random() * 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      fragment.appendChild(particle);
    }

    document.body.appendChild(fragment);
  }

  createParticles();

  /* ---------------------------------------------------------
     FLOATING KANNADA LETTERS
  --------------------------------------------------------- */

  const kannadaLetters = [
 'ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ', 
  'ಅಂ', 'ಅಃ', 
  'ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 
  'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ', 
  'ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ', 
  'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ', 
  'ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ', 
  'ಯ', 'ರ', 'ಲ', 'ವ', 'ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ'
  ];

  let particleTimer = null;

  function createKannadaParticle() {
    const element = document.createElement("span");
    element.className = "kannada-particle";
    element.textContent =
      kannadaLetters[Math.floor(Math.random() * kannadaLetters.length)];

    element.style.left = `${Math.random() * 100}%`;
    element.style.fontSize = `${15 + Math.random() * 25}px`;
    element.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
    element.style.setProperty("--rotate", `${Math.random() * 180 - 90}deg`);
    element.style.animationDuration = `${8 + Math.random() * 4}s`;
    element.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;

    document.body.appendChild(element);

    window.setTimeout(() => {
      element.remove();
    }, 13000);
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    particleTimer = window.setInterval(createKannadaParticle, 1300);
  }

  /* ---------------------------------------------------------
     ACTIVE NAVIGATION
  --------------------------------------------------------- */

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav a");

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ---------------------------------------------------------
     BACK TO TOP
  --------------------------------------------------------- */

  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ---------------------------------------------------------
     CLEANUP
  --------------------------------------------------------- */

  window.addEventListener("beforeunload", () => {
    if (particleTimer) {
      window.clearInterval(particleTimer);
    }
  });

  /* Initial language state */
  updateLanguage();
});
