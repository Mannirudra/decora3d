/**
 * DECORA3D — Animations & Interactions
 * www.decora3d.in | Delhi NCR
 * Version: 1.0.0
 */

(function () {
  'use strict';

  /* ── 1. Scroll Progress Bar ── */
  const progressBar = document.createElement('div');
  progressBar.id = 'd3d-scroll-progress';
  document.body.prepend(progressBar);

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ── 2. Intersection Observer — Scroll Reveals ── */
  const revealSelectors = [
    '.d3d-reveal',
    '.d3d-reveal-left',
    '.d3d-reveal-right',
    '.d3d-reveal-scale',
    '.d3d-trust',
    '.d3d-section-heading',
    '.d3d-testimonials-grid',
  ];

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  revealSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      revealObserver.observe(el);
    });
  });

  /* ── 3. Card 3D Tilt on Mouse Move ── */
  function initTilt(cards) {
    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -6;
        const rotY = ((x - cx) / cx) * 6;
        card.style.transform =
          'perspective(800px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-3px)';
        card.style.transition = 'transform 0.05s ease';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease';
      });
    });
  }

  initTilt(document.querySelectorAll('.card-wrapper, .d3d-way-card, .d3d-workshop-card'));

  /* ── 4. Hero Particle Canvas ── */
  const hero = document.getElementById('d3d-hero');
  if (hero) {
    const canvas = document.createElement('canvas');
    canvas.id = 'd3d-particles-canvas';
    hero.insertBefore(canvas, hero.firstChild);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;

    function resizeCanvas() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 20,
        size: Math.random() * 2.5 + 0.5,
        speedY: Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? '#C8A84B' : '#E8D5A0',
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < 55; i++) {
        const p = createParticle();
        p.y = Math.random() * canvas.height;
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(function (p, i) {
        p.life++;
        p.y -= p.speedY;
        p.x += p.speedX;

        const lifePct = p.life / p.maxLife;
        const alpha = lifePct < 0.1
          ? (lifePct / 0.1) * p.opacity
          : lifePct > 0.8
          ? ((1 - lifePct) / 0.2) * p.opacity
          : p.opacity;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -10) {
          particles[i] = createParticle();
        }
      });

      ctx.globalAlpha = 1;
      animFrame = requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();

    let resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        resizeCanvas();
        initParticles();
      }, 200);
    });

    // Pause when hero is off-screen
    const heroObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        if (!animFrame) animateParticles();
      } else {
        cancelAnimationFrame(animFrame);
        animFrame = null;
      }
    }, { threshold: 0 });
    heroObserver.observe(hero);
  }

  /* ── 5. Animated Stat Counters ── */
  function animateCounter(el, target, suffix, duration) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(function () {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(start) + suffix;
    }, 16);
  }

  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, target, suffix, 1200);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(function (el) {
    counterObserver.observe(el);
  });

  /* ── 6. Typed Headline Effect (Hero) ── */
  const typedEl = document.querySelector('.d3d-typed-headline');
  if (typedEl) {
    const phrases = typedEl.dataset.phrases
      ? typedEl.dataset.phrases.split('|')
      : ['IMAGINE IT.', 'PRINT IT.', 'OWN IT.'];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let pause = false;

    function type() {
      const current = phrases[phraseIdx];

      if (!isDeleting) {
        typedEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          pause = true;
          setTimeout(function () {
            pause = false;
            isDeleting = true;
            type();
          }, 1800);
          return;
        }
      } else {
        typedEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }

      setTimeout(type, isDeleting ? 50 : 90);
    }

    type();
  }

  /* ── 7. Magnetic Button Effect ── */
  document.querySelectorAll('.d3d-magnetic').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = 'translate(' + dx * 0.25 + 'px, ' + dy * 0.25 + 'px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
    });
  });

  /* ── 8. Smooth Section Scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 9. Header Shrink on Scroll ── */
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener(
      'scroll',
      function () {
        const currentScroll = window.scrollY;
        if (currentScroll > 80) {
          header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.6)';
          header.style.backdropFilter = 'blur(12px)';
          header.style.backgroundColor = 'rgba(10,10,10,0.95)';
        } else {
          header.style.boxShadow = '';
          header.style.backdropFilter = '';
          header.style.backgroundColor = '';
        }
        lastScroll = currentScroll;
      },
      { passive: true }
    );
  }

  /* ── 10. Page Transition ── */
  const overlay = document.createElement('div');
  overlay.className = 'd3d-page-transition';
  document.body.appendChild(overlay);

  // Fade in on load
  window.addEventListener('load', function () {
    overlay.style.opacity = '0';
  });

  // Fade out on internal link click
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (
      link &&
      link.href &&
      link.href.startsWith(window.location.origin) &&
      !link.href.includes('#') &&
      !link.target &&
      !e.ctrlKey &&
      !e.metaKey
    ) {
      e.preventDefault();
      const dest = link.href;
      overlay.classList.add('active');
      setTimeout(function () {
        window.location.href = dest;
      }, 280);
    }
  });

  /* ── 11. WhatsApp button entrance ── */
  const waBtn = document.querySelector('.d3d-whatsapp-float');
  if (waBtn) {
    waBtn.style.opacity = '0';
    waBtn.style.transform = 'scale(0) translateY(20px)';
    setTimeout(function () {
      waBtn.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      waBtn.style.opacity = '1';
      waBtn.style.transform = 'scale(1) translateY(0)';
    }, 2000);
  }

  /* ── 12. Gold cursor trail ── */
  const trail = [];
  const TRAIL_LENGTH = 8;

  for (let i = 0; i < TRAIL_LENGTH; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = [
      'position:fixed',
      'pointer-events:none',
      'z-index:99999',
      'border-radius:50%',
      'background:#C8A84B',
      'transition:opacity 0.3s ease',
      'opacity:0',
    ].join(';');
    document.body.appendChild(dot);
    trail.push({ el: dot, x: 0, y: 0 });
  }

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateTrail() {
    trail[0].x += (mouseX - trail[0].x) * 0.35;
    trail[0].y += (mouseY - trail[0].y) * 0.35;

    for (let i = 1; i < TRAIL_LENGTH; i++) {
      trail[i].x += (trail[i - 1].x - trail[i].x) * 0.55;
      trail[i].y += (trail[i - 1].y - trail[i].y) * 0.55;
    }

    trail.forEach(function (dot, idx) {
      const size = Math.max(2, 8 - idx);
      const opacity = (1 - idx / TRAIL_LENGTH) * 0.5;
      dot.el.style.width = size + 'px';
      dot.el.style.height = size + 'px';
      dot.el.style.left = dot.x - size / 2 + 'px';
      dot.el.style.top = dot.y - size / 2 + 'px';
      dot.el.style.opacity = opacity;
    });

    requestAnimationFrame(updateTrail);
  }

  // Only on non-touch devices
  if (window.matchMedia('(pointer: fine)').matches) {
    updateTrail();
  }

  console.log(
    '%c DECORA3D %c Built by Rudra Innovations ',
    'background:#C8A84B;color:#111;font-weight:bold;padding:4px 8px;border-radius:3px 0 0 3px;',
    'background:#1A1A1A;color:#C8A84B;padding:4px 8px;border-radius:0 3px 3px 0;border:1px solid #C8A84B;'
  );
})();
