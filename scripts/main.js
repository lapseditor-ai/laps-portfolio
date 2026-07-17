/* ============================================
   LAPS EDICTADOR - MAIN SCRIPT
   Animations, interactions, and utilities
   ============================================ */

// Smooth scroll for anchor links
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Intersection Observer for fade-in animations
const setupIntersectionObserver = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[class*="fadeInUp"]').forEach(el => {
    observer.observe(el);
  });
};

// Parallax effect on scroll for brain in hero
const setupParallax = () => {
  const brain = document.querySelector('.brain');
  if (!brain) return;

  const brainContainer = brain.closest('.brain-container');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroHeight = window.innerHeight;
    
    if (scrolled < heroHeight) {
      const parallaxAmount = scrolled * 0.3;
      brainContainer.style.transform = `translateY(${parallaxAmount}px)`;
    }
  }, { passive: true });
};

// Brain interactive reflection animation
const setupBrainReflection = () => {
  const reflections = document.querySelectorAll('.reflection');
  if (reflections.length === 0) return;

  reflections.forEach((reflection, index) => {
    const delay = index * 0.5;
    
    const animate = () => {
      reflection.style.animation = `none`;
      
      // Reset animation
      setTimeout(() => {
        reflection.style.opacity = '0';
        reflection.style.animation = `reflectionPulse 2s ease-in-out ${delay}s infinite`;
      }, 10);
    };
    
    animate();
  });
};

// Scroll indicator animation
const setupScrollIndicator = () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    } else {
      scrollIndicator.style.opacity = '1';
      scrollIndicator.style.pointerEvents = 'auto';
    }
  }, { passive: true });
};

// Video placeholder hover effect
const setupWorkItemHovers = () => {
  const workItems = document.querySelectorAll('.work-item');
  
  workItems.forEach(item => {
    const placeholder = item.querySelector('.video-placeholder');
    
    item.addEventListener('mouseenter', () => {
      placeholder.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
      placeholder.style.transform = 'scale(1)';
    });
  });
};

// Active navigation link tracking
const setupActiveNavigation = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -66%'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
            link.style.color = 'var(--color-cyan)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
};

// Enhance button hover with more sophisticated animation
const setupButtonEnhancements = () => {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--mouse-x', `${x}px`);
      button.style.setProperty('--mouse-y', `${y}px`);
    });
  });
};

// Initialize counter animations for stats
const setupStatCounters = () => {
  const stats = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumber = entry.target;
        const text = statNumber.textContent;
        
        // Extract number from text (handles cases like "200+" or "50M+" or "98%")
        const match = text.match(/\d+/);
        if (match) {
          const finalNumber = parseInt(match[0]);
          let currentNumber = 0;
          const increment = Math.ceil(finalNumber / 30);
          
          const counter = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
              statNumber.textContent = text; // Reset to original text
              clearInterval(counter);
            } else {
              const suffix = text.replace(/\d+/, '');
              statNumber.textContent = currentNumber + suffix;
            }
          }, 30);
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  stats.forEach(stat => observer.observe(stat));
};

// Add CSS animation rules dynamically
const addDynamicAnimations = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes reflectionPulse {
      0%, 100% {
        opacity: 0;
        transform: scaleX(0);
      }
      50% {
        opacity: 1;
        transform: scaleX(1);
      }
    }
    
    .nav-link.active::after {
      width: 100% !important;
    }
  `;
  document.head.appendChild(style);
};

// Performance optimization: Throttle scroll events
const throttle = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Initialize all features
const init = () => {
  console.log('LAPS Edictador - Portfolio V4 Initialized');
  
  setupSmoothScroll();
  setupIntersectionObserver();
  setupParallax();
  setupBrainReflection();
  setupScrollIndicator();
  setupWorkItemHovers();
  setupActiveNavigation();
  setupButtonEnhancements();
  setupStatCounters();
  addDynamicAnimations();
};

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Cleanup on page unload (good practice)
window.addEventListener('beforeunload', () => {
  console.log('LAPS Edictador - Thanks for visiting!');
});