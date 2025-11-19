// Quantum Nebula Design System - Main JavaScript
// Interactive functionality for components

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all interactive components
  initAccordions();
  initTabs();
  initTooltips();
  initCopyToClipboard();
  initThemeToggle();
});

/**
 * Accordion functionality
 */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion-header');

  accordions.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('svg');

      // Toggle accordion
      if (content && content.classList.contains('accordion-content')) {
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';

        // Rotate icon
        if (icon) {
          icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      }
    });
  });
}

/**
 * Tab navigation functionality
 */
function initTabs() {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      this.classList.add('active');

      // Show corresponding content
      const targetId = this.getAttribute('data-target');
      if (targetId) {
        document.querySelectorAll('.tab-content').forEach(content => {
          content.style.display = 'none';
        });

        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.style.display = 'block';
        }
      }
    });
  });
}

/**
 * Tooltip functionality
 */
function initTooltips() {
  const tooltipTriggers = document.querySelectorAll('[data-tooltip]');

  tooltipTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', function() {
      const tooltipText = this.getAttribute('data-tooltip');
      const tooltip = createTooltip(tooltipText);

      document.body.appendChild(tooltip);
      positionTooltip(tooltip, this);

      // Store tooltip reference
      this._tooltip = tooltip;
    });

    trigger.addEventListener('mouseleave', function() {
      if (this._tooltip) {
        this._tooltip.remove();
        this._tooltip = null;
      }
    });
  });
}

/**
 * Create tooltip element
 */
function createTooltip(text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'chart-tooltip';
  tooltip.textContent = text;
  tooltip.style.position = 'absolute';
  tooltip.style.zIndex = '1000';
  tooltip.style.opacity = '0';
  tooltip.style.transition = 'opacity 0.2s';

  setTimeout(() => {
    tooltip.style.opacity = '1';
  }, 10);

  return tooltip;
}

/**
 * Position tooltip relative to trigger element
 */
function positionTooltip(tooltip, trigger) {
  const rect = trigger.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltipRect.width / 2)}px`;
  tooltip.style.top = `${rect.top - tooltipRect.height - 8}px`;
}

/**
 * Copy to clipboard functionality for code blocks
 */
function initCopyToClipboard() {
  const codeBlocks = document.querySelectorAll('.code-block');

  codeBlocks.forEach(block => {
    // Add copy button
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.className = 'copy-button';
    copyButton.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 4px 12px;
      font-size: 12px;
      background: var(--bg-surface1);
      border: 1px solid var(--stroke-stroke2);
      border-radius: 6px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s;
    `;

    // Make code block relative for absolute positioning
    block.style.position = 'relative';
    block.appendChild(copyButton);

    // Show button on hover
    block.addEventListener('mouseenter', () => {
      copyButton.style.opacity = '1';
    });

    block.addEventListener('mouseleave', () => {
      copyButton.style.opacity = '0';
    });

    // Copy to clipboard on click
    copyButton.addEventListener('click', async () => {
      const code = block.textContent.replace('Copy', '').trim();

      try {
        await navigator.clipboard.writeText(code);
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });
}

/**
 * Theme toggle functionality (light/dark mode)
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Update button icon/text
      this.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  }
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

/**
 * Keyboard navigation for interactive elements
 */
document.addEventListener('keydown', function(e) {
  // Tab navigation with arrow keys
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const focusedTab = document.activeElement;

    if (focusedTab && focusedTab.classList.contains('tab')) {
      e.preventDefault();

      const tabs = Array.from(document.querySelectorAll('.tab'));
      const currentIndex = tabs.indexOf(focusedTab);

      let nextIndex;
      if (e.key === 'ArrowLeft') {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      } else {
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      }

      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    }
  }

  // Escape to close modals/overlays
  if (e.key === 'Escape') {
    const modal = document.querySelector('.modal.active');
    if (modal) {
      modal.classList.remove('active');
    }
  }
});

/**
 * Form validation helpers
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  return password.length >= 8 &&
         /[A-Z]/.test(password) &&
         /[a-z]/.test(password) &&
         /[0-9]/.test(password);
}

// Add input validation to forms
document.querySelectorAll('input[type="email"]').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
      this.classList.add('input-error');
      this.classList.remove('input-success');
    } else if (this.value) {
      this.classList.add('input-success');
      this.classList.remove('input-error');
    }
  });
});

document.querySelectorAll('input[type="password"]').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value && !validatePassword(this.value)) {
      this.classList.add('input-error');
      this.classList.remove('input-success');
    } else if (this.value) {
      this.classList.add('input-success');
      this.classList.remove('input-error');
    }
  });
});

/**
 * Animation on scroll
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Export utilities for use in other scripts
window.QuantumNebula = {
  validateEmail,
  validatePassword,
  createTooltip,
  positionTooltip
};

console.log('✨ Quantum Nebula Design System loaded successfully');
