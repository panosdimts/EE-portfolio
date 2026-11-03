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
        button.textContent = isOpen ? 'Close' : 'Menu';
        nav.classList.toggle('is-open', isOpen);
        document.body.classList.toggle('nav-open', isOpen);
      }

      // A tap anywhere outside the open menu closes it, as on any phone menu.
      document.addEventListener('click', (event) => {
        if (button.getAttribute('aria-expanded') === 'true'
          && !event.target.closest('.masthead')) {
          setOpen(false);
        }
      });

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

      // Fires once when the breakpoint is crossed, not on every resize event.
      // Matches style.css, which hides the toggle above 760px.
      window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => {
        if (event.matches) {
          setOpen(false);
        }
      });
    });
  }

  function setupEmailCopy() {
    document.querySelectorAll('[data-copy-email]').forEach((button) => {
      const label = button.textContent;
      let resetTimer = 0;

      // There is no status element anywhere on the site, so the button says it.
      // A second click restarts the hold rather than racing the first one.
      function report(message, holdFor) {
        window.clearTimeout(resetTimer);
        button.textContent = message;
        resetTimer = window.setTimeout(() => { button.textContent = label; }, holdFor);
      }

      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(button.dataset.copyEmail || EMAIL);
          report('Copied', 2200);
        } catch (error) {
          report('Copy failed: select the address', 3200);
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
