function backToTop() {
    const upBtn = document.querySelector('[data-btn="up-btn"]');
  
    if (!upBtn || upBtn === null) {
      return;
    } else {
      const footer = document.querySelector('footer').offsetHeight;
      const body = document.querySelector('body');
      const pageHeight = body.offsetHeight;
      const viewPortHeight = window.innerHeight;
      const border = pageHeight - viewPortHeight - footer;
      const header = document.querySelector('header').offsetHeight;
  
      upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 250);
      });
  
      window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 650) {
          upBtn.classList.add('up-btn--appear');
        } else {
          upBtn.classList.remove('up-btn--appear');
          upBtn.blur();
        }
        if (window.pageYOffset >= border) {
          upBtn.style.bottom = 'unset';
          upBtn.style.top = `${body.offsetHeight - footer - header - upBtn.offsetHeight - 30}px`;
          upBtn.style.position = 'absolute';
        } else {
          upBtn.style.top = 'unset';
          upBtn.style.bottom = '50px';
          upBtn.style.position = 'fixed';
        }
      });
    }
  }
  
  backToTop();
  
  function timeoutWindow() {
    window.clearTimeout(timeoutWindow);
    setTimeout(() => {
      backToTop();
    }, 500);
  }
  
  window.addEventListener('resize', () => {
    clearTimeout(timeoutWindow);
    timeoutWindow();
  });
  