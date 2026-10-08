/* ==========================================================================
   AMILA CHINTHANA - FUTURISTIC NEON PORTFOLIO MAIN JAVASCRIPT
   ========================================================================== */

// EmailJS Configuration Credentials
const EMAILJS_CONFIG = {
  serviceId: 'service_jn58snh',
  templateId: 'template_2mcn2p2',
  publicKey: 'JtTQ2J0wrk7d8k2V6'
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initPreloader();
  initThemeSwitcher();
  initScrollProgress();
  initNavbar();
  initHeroTyping();
  initBackgroundCanvas();
  initCustomCursor();
  initProjectFilters();
  initScrollReveal();
  initStatCounters();
  initSkillBars();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. PRELOADER
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 400);
  });
}

/* --------------------------------------------------------------------------
   2. THEME ACCENT SWITCHER
   -------------------------------------------------------------------------- */
function initThemeSwitcher() {
  const themeBtns = document.querySelectorAll('.theme-btn');
  const savedTheme = localStorage.getItem('amila_portfolio_theme') || 'cyan';

  setTheme(savedTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
      setTheme(color);
      localStorage.setItem('amila_portfolio_theme', color);
    });
  });

  function setTheme(color) {
    document.documentElement.setAttribute('data-theme', color);
    themeBtns.forEach(btn => {
      if (btn.getAttribute('data-color') === color) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

/* --------------------------------------------------------------------------
   4. NAVBAR & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Active Nav Link Observer
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
}

/* --------------------------------------------------------------------------
   5. HERO TYPING ANIMATION
   -------------------------------------------------------------------------- */
function initHeroTyping() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    "Web Developer",
    "IoT Enthusiast",
    "Mobile App Developer",
    "UI/UX Designer",
    "Innovator"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 800);
}

/* --------------------------------------------------------------------------
   6. BACKGROUND PARTICLES CANVAS
   -------------------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 70;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.8 + 0.8;
      this.color = Math.random() > 0.5 ? '#00f0ff' : '#ff2bd6';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  // Check prefers-reduced-motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate();
  }
}

/* --------------------------------------------------------------------------
   7. CUSTOM GLOWING CURSOR
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const trail = document.querySelector('.cursor-trail');
  
  if (!dot || !trail) return;

  // Only enable on desktop pointer devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  dot.style.display = 'block';
  trail.style.display = 'block';

  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderCursor() {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Add hover effect for interactive elements
  const hoverables = document.querySelectorAll('a, button, .glass-card, input, textarea');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
  });
}

/* --------------------------------------------------------------------------
   8. PROJECT FILTERS
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   9. SCROLL REVEAL ANIMATION
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.glass-card, .section-header, .timeline-item, .contact-card');

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   10. STAT COUNTERS
   -------------------------------------------------------------------------- */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let animated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const step = Math.max(1, Math.floor(target / 40));

          const updateCounter = () => {
            count += step;
            if (count >= target) {
              counter.textContent = target + suffix;
            } else {
              counter.textContent = count + suffix;
              setTimeout(updateCounter, 30);
            }
          };

          updateCounter();
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) statsObserver.observe(statsSection);
}

/* --------------------------------------------------------------------------
   11. SKILLS BAR ANIMATION
   -------------------------------------------------------------------------- */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (!skillBars.length) return;

  let animated = false;

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        skillBars.forEach(bar => {
          const percent = bar.getAttribute('data-percent');
          bar.style.width = percent + '%';
        });
      }
    });
  }, { threshold: 0.3 });

  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) skillsObserver.observe(skillsContainer);
}

/* --------------------------------------------------------------------------
   12. EMAILJS CONTACT FORM HANDLER & VALIDATION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Initialize EmailJS Browser SDK
  if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey) {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  const submitBtn = document.getElementById('contact-submit-btn');
  const toastContainer = document.getElementById('toast-container');
  const replyToInput = document.getElementById('email');
  const fromEmailInput = document.getElementById('from_email');
  const timeInput = document.getElementById('submission_time');

  // Sync reply_to value to hidden from_email field as user types
  if (replyToInput && fromEmailInput) {
    replyToInput.addEventListener('input', () => {
      fromEmailInput.value = replyToInput.value.trim();
    });
  }

  // Clear field error state on input
  const formInputs = form.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      clearFieldError(input);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Honeypot Spam Protection Check
    const honeypot = form.querySelector('[name="website_honeypot"]');
    if (honeypot && honeypot.value.trim() !== '') {
      console.warn('Silent stop: Honeypot field filled (bot detected).');
      return; // Silently stop submission
    }

    // 2. Client-Side Field Validation
    clearAllErrors();
    let isValid = true;

    const nameInput = form.querySelector('[name="from_name"]');
    const subjectInput = form.querySelector('[name="subject"]');
    const messageInput = form.querySelector('[name="message"]');

    if (!nameInput.value.trim()) {
      showFieldError(nameInput, 'Please enter your name.');
      isValid = false;
    }

    const emailVal = replyToInput ? replyToInput.value.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      showFieldError(replyToInput, 'Please enter your email address.');
      isValid = false;
    } else if (!emailRegex.test(emailVal)) {
      showFieldError(replyToInput, 'Please enter a valid email address (e.g. name@example.com).');
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      showFieldError(subjectInput, 'Please enter a subject.');
      isValid = false;
    }

    const messageVal = messageInput ? messageInput.value.trim() : '';
    if (!messageVal) {
      showFieldError(messageInput, 'Please enter your message.');
      isValid = false;
    } else if (messageVal.length < 10) {
      showFieldError(messageInput, 'Message must be at least 10 characters long.');
      isValid = false;
    }

    if (!isValid) return;

    // 3. Rate-Limiting Check (30 seconds cooldown window)
    const lastSentTimestamp = sessionStorage.getItem('amila_portfolio_last_sent');
    const currentTime = Date.now();
    if (lastSentTimestamp && currentTime - parseInt(lastSentTimestamp, 10) < 30000) {
      const waitSeconds = Math.ceil((30000 - (currentTime - parseInt(lastSentTimestamp, 10))) / 1000);
      showToast(`Please wait ${waitSeconds} seconds before submitting another message.`, 'error');
      return;
    }

    // Populate hidden timestamp & sync email fields
    if (timeInput) timeInput.value = new Date().toLocaleString();
    if (fromEmailInput && replyToInput) fromEmailInput.value = replyToInput.value.trim();

    // 4. Loading State UI
    setLoadingState(true);

    try {
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS SDK failed to load.');
      }

      const response = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form
      );

      console.log('EmailJS Success Response:', response);

      // Record rate limit timestamp
      sessionStorage.setItem('amila_portfolio_last_sent', Date.now().toString());

      showToast('⚡ Thank you! Your message has been sent. I\'ll get back to you soon.', 'success');
      form.reset();
      clearAllErrors();
    } catch (err) {
      console.error('EmailJS Submission Error:', err);
      showToast('❌ Oops! Something went wrong. Please try again or email me directly at achinthanaa@gmail.com.', 'error');
    } finally {
      setLoadingState(false);
    }
  });

  function showFieldError(field, message) {
    if (!field) return;
    field.classList.add('invalid');
    const errorSpan = document.getElementById(`error-${field.name}`);
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.add('visible');
    }
  }

  function clearFieldError(field) {
    if (!field) return;
    field.classList.remove('invalid');
    const errorSpan = document.getElementById(`error-${field.name}`);
    if (errorSpan) {
      errorSpan.textContent = '';
      errorSpan.classList.remove('visible');
    }
  }

  function clearAllErrors() {
    form.querySelectorAll('.form-input, .form-textarea').forEach(f => f.classList.remove('invalid'));
    form.querySelectorAll('.field-error-msg').forEach(span => {
      span.textContent = '';
      span.classList.remove('visible');
    });
  }

  function setLoadingState(isLoading) {
    if (!submitBtn) return;
    submitBtn.disabled = isLoading;
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');

    if (isLoading) {
      if (btnText) btnText.textContent = 'Sending...';
      if (btnIcon) btnIcon.style.display = 'none';
      let spinner = submitBtn.querySelector('.btn-spinner');
      if (!spinner) {
        spinner = document.createElement('span');
        spinner.className = 'btn-spinner';
        submitBtn.appendChild(spinner);
      }
    } else {
      if (btnText) btnText.textContent = 'Send Message';
      if (btnIcon) btnIcon.style.display = 'inline-block';
      const spinner = submitBtn.querySelector('.btn-spinner');
      if (spinner) spinner.remove();
    }
  }

  function showToast(message, type) {
    if (!toastContainer) return;
    toastContainer.innerHTML = ''; // Clear previous toast

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close notification');
    closeBtn.onclick = () => toast.remove();

    toast.appendChild(messageSpan);
    toast.appendChild(closeBtn);
    toastContainer.appendChild(toast);

    // Auto dismiss toast after 5 seconds
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s ease';
        setTimeout(() => toast.remove(), 400);
      }
    }, 5000);
  }
}
