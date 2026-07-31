(function () {
  const EMAIL = 'panosdim@engineering.upenn.edu';

  function setupMobileNav() {
    document.querySelectorAll('[data-nav-toggle]').forEach((button) => {
      const navId = button.getAttribute('aria-controls');
      const nav = navId ? document.getElementById(navId) : null;

      if (!nav) {
        return;
      }

      function setOpen(isOpen) {
        button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        nav.classList.toggle('is-open', isOpen);
        document.body.classList.toggle('nav-open', isOpen);
      }

      button.addEventListener('click', () => {
        setOpen(button.getAttribute('aria-expanded') !== 'true');
      });

      nav.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
          setOpen(false);
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
          button.focus();
        }
      });

      window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 641px)').matches) {
          setOpen(false);
        }
      });
    });
  }

  function setupEmailCopy() {
    document.querySelectorAll('[data-copy-email]').forEach((button) => {
      const status = button.closest('.email-wrap')?.querySelector('[data-copy-status]');

      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(button.dataset.copyEmail || EMAIL);
          if (status) {
            status.textContent = 'Email copied';
            status.classList.add('show');
            window.setTimeout(() => status.classList.remove('show'), 2200);
          }
        } catch (error) {
          if (status) {
            status.textContent = 'Copy failed. Use the email link.';
            status.classList.add('show');
            window.setTimeout(() => status.classList.remove('show'), 2800);
          }
        }
      });
    });
  }

  function setupCurrentYear() {
    document.querySelectorAll('[data-current-year]').forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
  }

  function init() {
    setupMobileNav();
    setupEmailCopy();
    setupCurrentYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
