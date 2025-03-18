const generatePartnerLogos = (containerId, logoPaths) => {
    const container = document.getElementById(containerId);
    if (!container) return console.error('Container not found');
  
    container.id = containerId;
    Object.assign(container, {
      className: 'bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s',
      dataset: {
        staggerAppear: 'fade-up',
        staggerUnload: 'fade-up',
        staggerDelay: '100',
        delay: '100',
      },
    });
  
    const fragment = document.createDocumentFragment();
  
    logoPaths.forEach((path, index) => {
      const block = document.createElement('div');
      block.className = 'bringer-block';
      block.id = `partner-logo-${index + 1}`;
  
      const img = Object.assign(document.createElement('img'), {
        src: path,
        alt: 'Partner Logo',
      });
  
      block.appendChild(img);
      fragment.appendChild(block);
    });
  
    container.appendChild(fragment);
  };
  
  // Example usage
  const logoPaths = Array.from({ length: 18 }, (_, i) => `assets/content/img/partners/logo/logo-${i + 1}.png`);
  generatePartnerLogos('partnerContainer', logoPaths);
  