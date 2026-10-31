(function () {
  const animatedSelectors = [
    '.hero-text',
    '.hero-headshot',
    '.section-heading',
    '.project-card',
    '.project-row',
    '.timeline-entry',
    '.about-layout > *',
    '.content-stack > *',
    '.skills-matrix > *',
    '.project-detail-back',
    '.project-hero-copy',
    '.project-detail-cover',
    '.project-meta-item',
    '.project-info-card',
    '.project-panel',
    '.contact-layout > *',
    '.site-footer'
  ];

  const imageGalleries = {
    sram: [
      { src: 'images/bitcell-layout.png', alt: 'Layout of the 6T SRAM bitcell with VDD, VSS, wordline and bitlines labeled', caption: '6T bitcell layout, DRC and LVS clean', width: 601, height: 835 },
      { src: 'images/read-butterfly.png', alt: 'Post-layout read butterfly curves with the inscribed SNM squares', caption: 'Post-layout read butterfly: SNM 0.13 V', width: 662, height: 676 },
      { src: 'images/write-margin.png', alt: 'Storage-node voltages against the swept bitline voltage, flipping at 0.27 V', caption: 'Post-layout write-margin sweep: trip at 0.27 V', width: 690, height: 547 },
      { src: 'images/functional-check.png', alt: 'Transient waveforms of a write 0, read, write 1, read sequence on a loaded bitline', caption: 'Write 0, read, write 1, read on a 16-cell bitline', width: 1423, height: 1009 },
      { src: 'images/macro-array-corner.png', alt: 'Corner of the 16 by 4 array layout showing mirrored rows and shared supply rails', caption: 'Array corner: mirrored rows share VDD and VSS rails', width: 657, height: 424 },
      { src: 'images/macro-schematic.png', alt: 'Schematic of the 16 by 4 SRAM macro with decoder, precharge, write drivers and read path', caption: '16 \u00d7 4 macro: decoder, precharge, write and read columns', width: 928, height: 1001 },
      { src: 'images/decoder-waveforms.png', alt: 'Wordline waveforms for every row of the predecoded decoder', caption: 'Predecoded row decoder: 129 ps from address to wordline', width: 2361, height: 1016 },
      { src: 'images/macro-read-after-write.png', alt: 'Macro transient waveforms reading a word back after writing it', caption: 'Macro read after write, 440 ps access time', width: 1486, height: 1225 },
      { src: 'images/mac-block-sketch.png', alt: 'Hand-drawn block diagram of the MAC: address mux, two SRAM macros, operand registers, multiplier, adder, accumulator and sequencer, split into three pipeline stages and three supply domains', caption: 'Hand-drawn MAC block diagram: three pipeline stages, three supply domains', width: 3505, height: 1792 },
      { src: 'images/mac-block-diagram.png', alt: 'Block diagram of the MAC with three pipeline stages and three supply domains marked', caption: 'MAC block diagram, redrawn', width: 1516, height: 770 },
      { src: 'images/sequencer-state-sketch.png', alt: 'Hand-drawn state diagram of the sequencer with IDLE, COMPUTE, DRAIN and DONE states', caption: 'Hand-drawn sequencer states: IDLE, COMPUTE (16 cycles), DRAIN (3), DONE', width: 1497, height: 837 },
      { src: 'images/diffr-flipflop.png', alt: 'Schematic of the transmission-gate leader-follower flip-flop with synchronous reset', caption: 'Custom flip-flop: 94 ps clock-to-Q, 1.8 fJ per clock', width: 1518, height: 706 },
      { src: 'images/dot-product-timing.png', alt: 'Cycle-level timing diagram of one dot product showing the counter, latched address, operand registers, product register and accumulator at every clock edge', caption: 'One dot product, edge by edge: DONE rises at E19', width: 1416, height: 760 },
      { src: 'images/mac-test-a.png', alt: 'Accumulator waveform climbing in steps to 845 with the done signal rising', caption: 'Test A: accumulator reaches 845, done after 19 cycles', width: 1463, height: 809 },
      { src: 'images/mac-0p8ns-failure.png', alt: 'Accumulator at a 0.8 ns clock against the correct running sum, with errors of 16, 32 and 16 in three cycles', caption: 'At 0.8 ns: three late bits, 909 instead of 845', width: 1341, height: 832 },
      { src: 'images/mac-energy.png', alt: 'Bar chart of energy per dot product split across the memory, MAC and clock supplies', caption: 'Energy per dot product by supply domain', width: 1223, height: 634 }
    ],
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

  function setupScrollAnimations() {
    const elements = Array.from(document.querySelectorAll(animatedSelectors.join(',')));

    if (!elements.length) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    document.documentElement.classList.add('scroll-animations-ready');

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 18, 160)}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12
    });

    elements.forEach((element) => observer.observe(element));
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

      function showImage(nextIndex) {
        activeIndex = (nextIndex + images.length) % images.length;
        image.src = images[activeIndex].src;
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
      showImage(0);
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
          panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('.image-lightbox-close');
    let previousActiveElement = null;
    let scrollPosition = 0;

    function openLightbox(image) {
      scrollPosition = window.scrollY;
      previousActiveElement = document.activeElement;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || '';
      lightbox.classList.add('is-open');
      document.body.classList.add('lightbox-open');
      closeButton.focus({ preventScroll: true });
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightboxImage.removeAttribute('src');
      document.body.classList.remove('lightbox-open');
      window.scrollTo({ top: scrollPosition, left: window.scrollX, behavior: 'auto' });

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
    setupScrollAnimations();
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
