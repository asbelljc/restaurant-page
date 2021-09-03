import './style.css';
import loadBase from './base.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const tabs = (() => {
  const navBtns = () => Array.from(document.getElementsByClassName('nav-btn'));
  const scrollBox = () => document.getElementById('scroll-box');
  
  const clearContent = () => {
    scrollBox().style.opacity = 0;

    setTimeout(() => scrollBox().removeChild(scrollBox().firstChild), 300);
  };

  const loadContent = e => {
    switch (e.target.innerText) {
      case 'HOME':
        loadHome();
        break;
      case 'MENU':
        loadMenu();
        break;
      case 'CONTACT':
        loadContact();
    }
  };

  const deactivateTabs = () => {
    navBtns().forEach(button => button.className = 'nav-btn');
  };
  
  const moveSlider = e => {
    const slider = document.getElementById('slider');
    slider.className = `slider ${e.target.innerText.toLowerCase()}`;
  };
  
  const activateTab = e => {
    e.target.className = 'nav-btn active';
  };

  const change = e => {
    if (e.target.classList.contains('active')) {
      return;
    } else {
      deactivateTabs();
      moveSlider(e);
      activateTab(e);
      clearContent();
      setTimeout(() => loadContent(e), 350);
    }
  };

  const initialize = () => {
    navBtns().forEach(button => button.addEventListener('click', change));
  };

  return { initialize };
})();

const initializeWebsite = (() => {
  loadBase();
  loadHome();
  tabs.initialize();
})();
