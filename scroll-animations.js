(function () {
  const imageGalleries = {
    pcb: [
      { src: 'images/PCB_MD.png', alt: 'Metal Detector PCB 3D view', caption: 'PCB 3D view', width: 608, height: 516 },
      { src: 'images/PCB_Top_View.png', alt: 'Metal Detector PCB top view', caption: 'PCB top view', width: 725, height: 593 },
      { src: 'images/PCB_Bottom_View.png', alt: 'Metal Detector PCB bottom view', caption: 'PCB bottom view', width: 719, height: 563 }
    ],
    detector: [
      { src: 'images/metal-detector-no-bg.webp', alt: 'Completed metal detector assembly', caption: 'Completed metal detector assembly', width: 1086, height: 1448 },
      { src: 'images/metal-detector.jpeg', alt: 'Completed metal detector shown in the test setup', caption: 'Completed metal detector in the test setup', width: 768, height: 1024 }
    ],
    ecg: [
      { src: 'images/circuit-1.jpeg', alt: 'Wireless ECG monitor breadboard circuit', caption: 'Wireless ECG monitor breadboard circuit', width: 1200, height: 1600 },
      { src: 'images/circuit-2.jpeg', alt: 'Alternate view of the wireless ECG monitor breadboard circuit', caption: 'Alternate breadboard view', width: 1200, height: 1600 },
      { src: 'images/circuit-3.webp', alt: 'Wireless ECG monitor breadboard and Feather test setup', caption: 'Wireless ECG monitor test setup', width: 569, height: 756 }
    ],
    guitar: [
      { src: 'images/guitar-hero-synth.jpeg', alt: 'Completed Guitar Hero controller converted into an electronic synthesizer', caption: 'Completed Guitar Hero synthesizer', width: 1200, height: 1600 },
      { src: 'images/guitar-hero-synth-inside-1.jpeg', alt: 'Internal wiring and control electronics inside the Guitar Hero synthesizer', caption: 'Internal wiring and control electronics', width: 1200, height: 1600 },
      { src: 'images/guitar-hero-synth-inside-2.jpeg', alt: 'ATmega328PB control and audio circuitry inside the Guitar Hero synthesizer', caption: 'Microcontroller and audio circuitry', width: 1200, height: 1600 },
      { src: 'images/guitar-hero-synth-inside-3.jpeg', alt: 'Power, display, and speaker connections inside the Guitar Hero synthesizer', caption: 'Power, display, and speaker connections', width: 1200, height: 1600 }
    ]
  };

  const videoGalleries = {
    'guitar-videos': [
      {
        src: 'Live Demo.mp4',
        type: 'video/mp4',
        title: 'Live Demo',
        description: 'Demo Day footage of the completed instrument, showing the physical controls, LCD interface, synthesized audio, and speaker output operating together in real time.'
      },
      {
        src: 'Full Feature Overview.mp4',
        type: 'video/mp4',
        title: 'Full Feature Demo',
        description: 'A full walkthrough of the finished embedded instrument, including note selection, strumming, pitch control, display interaction, audio response, and hardware integration.'
      },
      {
        src: 'Guitar Demo.mp4',
        type: 'video/mp4',
        title: 'Guitar Demo',
        description: 'A focused overview of the controller hardware and how its fret buttons, strum bar, whammy stick, mute control, and joystick are interfaced with the ATmega328PB.'
      },
      {
        src: 'Screen Function.mp4',
        type: 'video/mp4',
        title: 'Screen Functionality Demo',
        description: 'A closer look at the LCD-and-joystick interface, showing how users view and adjust the musical pitch assigned to each fret button.'
      }
    ]
  };

  // The lightbox gives every project image role="button", which makes
  // aria-label - not alt - its accessible name. So the galleries have to
  // rewrite the label on every step too, or figures 2..n keep announcing the
  // first figure's description.
  function fullscreenLabel(alt) {
    return `Open fullscreen view: ${alt || 'project image'}`;
  }

  // The correction stroke: wherever an entry reports an estimate against a
  // result, the struck estimate's red pen line draws once, left to right,
  // when the line enters the viewport. On the home page it closes the hero
  // sequence that style.css plays on load.
  // Without IntersectionObserver, or with reduced motion, the stroke is
  // simply there (style.css draws it by default).
  function setupCorrections() {
    setupRules();

    const corrections = Array.from(document.querySelectorAll('.correction'));

    if (!corrections.length || !('IntersectionObserver' in window)
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    document.documentElement.classList.add('strokes-pending');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          // A short beat, so a stroke already on screen at load is seen
          // being drawn rather than landing with the first paint.
          window.setTimeout(() => entry.target.classList.add('is-struck'), 240);
        }
      });
    }, { rootMargin: '0px', threshold: 1 });

    corrections.forEach((correction) => observer.observe(correction));

    // A line already fully on screen at load is struck after the same beat,
    // whether or not the observer has reported yet.
    window.setTimeout(() => {
      corrections.forEach((correction) => {
        const box = correction.getBoundingClientRect();
        if (box.height && box.top >= 0 && box.bottom <= window.innerHeight) {
          observer.unobserve(correction);
          correction.classList.add('is-struck');
        }
      });
    }, 240);
  }

  // Heading rules are ruled in ink, left to right, as each heading arrives.
  // Same pattern as the strokes: visible by default, hidden only once this
  // script has taken charge of them.
  function setupRules() {
    // Home and index pages only: on a long entry the same draw on every
    // heading would become an identical entrance, repeated.
    const rules = Array.from(document.querySelectorAll('.section-head'));

    if (!rules.length || !('IntersectionObserver' in window)
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const viewport = window.innerHeight;
    const pending = rules.filter((rule) => rule.getBoundingClientRect().top > viewport * 0.9);

    if (!pending.length) {
      return;
    }

    document.documentElement.classList.add('rules-pending');
    rules.filter((rule) => !pending.includes(rule)).forEach((rule) => rule.classList.add('is-ruled'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          entry.target.classList.add('is-ruled');
        }
      });
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0 });

    pending.forEach((rule) => observer.observe(rule));
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Long entries get an index of their sections: a compact jump list under
  // the title on narrow screens, and on wide ones a list at the foot of the
  // margin notes that stays in view and marks the section being read.
  function setupSectionIndex() {
    const body = document.querySelector('.project-detail-body');
    const sidebar = document.querySelector('.project-sidebar');
    const heroCopy = document.querySelector('.project-hero-copy');

    if (!body || !sidebar || !heroCopy) {
      return;
    }

    const panels = Array.from(body.children)
      .filter((panel) => panel.matches('.project-panel') && !panel.hidden && panel.querySelector(':scope > h2'));

    if (panels.length < 4) {
      return;
    }

    const items = panels.map((panel) => {
      const label = panel.querySelector(':scope > h2').textContent.trim();
      if (!panel.id) {
        let slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
        while (document.getElementById(slug)) {
          slug += '-more';
        }
        panel.id = slug;
      }
      return { id: panel.id, label };
    });

    function buildNav(className, name) {
      const nav = document.createElement('nav');
      nav.className = className;
      nav.setAttribute('aria-label', name);
      items.forEach((item) => {
        const link = document.createElement('a');
        link.href = `#${item.id}`;
        link.textContent = item.label;
        nav.appendChild(link);
      });
      return nav;
    }

    heroCopy.appendChild(buildNav('jump-list', 'On this page'));

    const pageNav = buildNav('page-nav', 'Sections of this page');
    const heading = document.createElement('p');
    heading.className = 'page-nav-title';
    heading.textContent = 'On this page';
    heading.setAttribute('aria-hidden', 'true');
    pageNav.prepend(heading);
    sidebar.appendChild(pageNav);

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const links = new Map(items.map((item) => [item.id, pageNav.querySelector(`a[href="#${item.id}"]`)]));
    const inView = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inView.add(entry.target.id);
        } else {
          inView.delete(entry.target.id);
        }
      });
      const current = items.find((item) => inView.has(item.id));
      links.forEach((link, id) => {
        if (current && id === current.id) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-20% 0px -55% 0px' });

    panels.forEach((panel) => observer.observe(panel));
  }

  function setupImageGalleries() {
    document.querySelectorAll('[data-gallery]').forEach((gallery) => {
      const images = imageGalleries[gallery.dataset.gallery];
      const image = gallery.querySelector('[data-gallery-image]');
      const caption = gallery.querySelector('[data-gallery-caption]');
      const count = gallery.querySelector('[data-gallery-count]');
      const dots = Array.from(gallery.querySelectorAll('.image-switcher-dot'));

      if (!images || !image) {
        return;
      }

      let activeIndex = 0;

      function showImage(nextIndex, fromUser = true) {
        activeIndex = (nextIndex + images.length) % images.length;
        image.src = images[activeIndex].src;

        // A short fade so the swap reads as a change, not a flicker; never
        // on the first figure, which nobody asked to change.
        if (fromUser && !reducedMotion.matches && typeof image.animate === 'function') {
          image.animate([{ opacity: 0.25 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' });
        }
        image.alt = images[activeIndex].alt;
        image.width = images[activeIndex].width;
        image.height = images[activeIndex].height;

        if (image.dataset.fullscreenImage === 'true') {
          image.setAttribute('aria-label', fullscreenLabel(image.alt));
        }

        if (caption) {
          caption.textContent = images[activeIndex].caption;
        }

        if (count) {
          count.textContent = `${activeIndex + 1}/${images.length}`;
        }

        dots.forEach((dot, index) => {
          dot.classList.toggle('is-active', index === activeIndex);
          dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
        });
      }

      gallery.querySelector('.image-switcher-prev')?.addEventListener('click', () => showImage(activeIndex - 1));
      gallery.querySelector('.image-switcher-next')?.addEventListener('click', () => showImage(activeIndex + 1));
      dots.forEach((dot, index) => dot.addEventListener('click', () => showImage(index)));
      showImage(0, false);
    });
  }

  function setupVideoGalleries() {
    document.querySelectorAll('[data-video-gallery]').forEach((gallery) => {
      const videos = videoGalleries[gallery.dataset.videoGallery];
      const player = gallery.querySelector('[data-video-player]');
      const source = gallery.querySelector('[data-video-source]');
      const title = gallery.querySelector('[data-video-title]');
      const description = gallery.querySelector('[data-video-description]');
      const count = gallery.querySelector('[data-video-count]');
      const dots = Array.from(gallery.querySelectorAll('.image-switcher-dot'));

      if (!videos || !player || !source) {
        return;
      }

      let activeIndex = 0;

      function showVideo(nextIndex) {
        activeIndex = (nextIndex + videos.length) % videos.length;
        player.pause();
        source.src = videos[activeIndex].src;
        source.type = videos[activeIndex].type;
        player.load();

        if (title) {
          title.textContent = videos[activeIndex].title;
        }

        if (description) {
          description.textContent = videos[activeIndex].description;
        }

        if (count) {
          count.textContent = `${activeIndex + 1}/${videos.length}`;
        }

        dots.forEach((dot, index) => {
          dot.classList.toggle('is-active', index === activeIndex);
          dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
        });
      }

      gallery.querySelector('.image-switcher-prev')?.addEventListener('click', () => showVideo(activeIndex - 1));
      gallery.querySelector('.image-switcher-next')?.addEventListener('click', () => showVideo(activeIndex + 1));
      dots.forEach((dot, index) => dot.addEventListener('click', () => showVideo(index)));
      showVideo(0);
    });
  }

  function setupTogglePanels() {
    document.querySelectorAll('[data-toggle-panel]').forEach((button) => {
      const panel = document.getElementById(button.dataset.togglePanel);

      if (!panel) {
        return;
      }

      button.setAttribute('aria-controls', panel.id);
      button.setAttribute('aria-expanded', panel.hidden ? 'false' : 'true');

      button.addEventListener('click', () => {
        const shouldOpen = panel.hidden;
        panel.hidden = !shouldOpen;
        button.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');

        if (shouldOpen) {
          // An instant jump: the panel opened from a keyboard or a click, and
          // motion on that action would only delay the reader.
          panel.scrollIntoView({ block: 'start' });
          const heading = panel.querySelector('h2, h3');
          if (heading) {
            heading.tabIndex = -1;
            heading.focus({ preventScroll: true });
          }
        }
      });
    });

    document.querySelectorAll('[data-close-panel]').forEach((button) => {
      const panel = document.getElementById(button.dataset.closePanel);

      if (!panel) {
        return;
      }

      button.addEventListener('click', () => {
        panel.hidden = true;
        const opener = document.querySelector(`[data-toggle-panel="${panel.id}"]`);
        if (opener) {
          opener.setAttribute('aria-expanded', 'false');
          opener.focus({ preventScroll: true });
          // Hiding the panel can leave the page clamped near the footer, far
          // from the button that opened it.
          opener.scrollIntoView({ block: 'center' });
        }
      });
    });
  }

  // Report links marked data-report-target load their PDF into that embedded
  // viewer instead of leaving the page. They keep a real href, so without JS,
  // on a modified click, and on phones - where most browsers cannot show a PDF
  // inside an iframe - they still open the PDF itself.
  function setupReportViewers() {
    const links = Array.from(document.querySelectorAll('[data-report-target]'));
    const wideScreen = window.matchMedia('(min-width: 701px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function markCurrent(viewerId, href) {
      links.forEach((link) => {
        if (link.dataset.reportTarget !== viewerId) {
          return;
        }
        if (link.getAttribute('href') === href) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    links.forEach((link) => {
      const viewer = document.getElementById(link.dataset.reportTarget);

      if (!viewer) {
        return;
      }

      markCurrent(viewer.id, viewer.getAttribute('src'));

      link.addEventListener('click', (event) => {
        if (!wideScreen.matches || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }

        event.preventDefault();
        const current = document.getElementById(link.dataset.reportTarget);
        const href = link.getAttribute('href');

        // Swap in a fresh iframe rather than changing src: a src change adds a
        // history entry, so Back would step through reports instead of leaving.
        if (current.getAttribute('src') !== href) {
          const next = current.cloneNode(false);
          next.src = href;
          next.title = link.dataset.reportTitle || current.title;
          current.replaceWith(next);
        }

        markCurrent(current.id, href);
        document.getElementById(current.id).closest('.pdf-viewer')
          ?.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
      });
    });
  }

  function setupImageLightbox() {
    const images = Array.from(document.querySelectorAll('main.project-detail img'))
      .filter((image) => !image.closest('a'));

    if (!images.length) {
      return;
    }

    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Fullscreen image view');
    lightbox.innerHTML = `
      <button class="image-lightbox-close" type="button" aria-label="Close fullscreen image">Close</button>
      <img alt="">
      <p class="image-lightbox-caption"></p>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.image-lightbox-caption');
    const closeButton = lightbox.querySelector('.image-lightbox-close');
    let previousActiveElement = null;
    let scrollPosition = 0;

    function openLightbox(image) {
      scrollPosition = window.scrollY;
      previousActiveElement = document.activeElement;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || '';
      // Carry the figure's caption into the enlarged view.
      const caption = image.closest('figure')?.querySelector('figcaption')
        || image.closest('.image-switcher')?.querySelector('[data-gallery-caption]');
      lightboxCaption.textContent = caption ? caption.textContent.trim() : '';
      lightboxCaption.hidden = !caption;
      lightbox.classList.add('is-open');
      document.body.classList.add('lightbox-open');
      closeButton.focus({ preventScroll: true });
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightboxImage.removeAttribute('src');
      document.body.classList.remove('lightbox-open');
      // 'instant', so the page snaps back to where the lightbox opened even
      // if a smooth scroll-behavior is ever set on html again.
      window.scrollTo({ top: scrollPosition, left: window.scrollX, behavior: 'instant' });

      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus({ preventScroll: true });
      }
    }

    images.forEach((image) => {
      image.dataset.fullscreenImage = 'true';
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', fullscreenLabel(image.alt));
      image.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        openLightbox(image);
      });
      image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(image);
        }
      });
    });

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (!lightbox.classList.contains('is-open')) {
        return;
      }

      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        closeButton.focus({ preventScroll: true });
      }
    });
  }

  function init() {
    setupCorrections();
    setupSectionIndex();
    setupImageGalleries();
    setupVideoGalleries();
    setupTogglePanels();
    setupReportViewers();
    setupImageLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
