// Smooth scrolling for navigation links
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

const texts = [
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Network Engineer",
    "System Analyst",
    "Business Process",
  ];

  const typingText = document.getElementById("typing-text");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1200);
      }
    } else {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  typeEffect();

// Progress bar animation on scroll
const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetWidth = entry.target.style.getPropertyValue('--target-width') 
                || (entry.target.getAttribute('style')?.match(/\b(?:--target-)?width:\s*(\d+%)/) || [])[1] 
                || '85%';
            entry.target.style.width = targetWidth;
        }
    });
}, observerOptions);

document.querySelectorAll('.progress-fill').forEach(bar => {
    observer.observe(bar);
});

// Certification Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const certItems = document.querySelectorAll('.cert-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        certItems.forEach(item => {
            const categories = (item.getAttribute('data-category') || '').split(' ');
            if (filter === 'all' || categories.includes(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Projects Filter
const filterBtnsProject = document.querySelectorAll('.filter-btn-project');
const projectCards = document.querySelectorAll('.project-card');

filterBtnsProject.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtnsProject.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach(card => {
            const categories = (card.getAttribute('data-category') || '').split(' ');
            if (filter === 'all' || categories.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Activity Filter
const filterBtnsActivity = document.querySelectorAll('.filter-btn-activity');
const activityItems = document.querySelectorAll('.activity-item');

filterBtnsActivity.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtnsActivity.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activityItems.forEach(item => {
            const categories = (item.getAttribute('data-category') || '').split(' ');
            if (filter === 'all' || categories.includes(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Scroll Reveal Observer for dynamic interactive entrance animations
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

// Mobile navigation toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}