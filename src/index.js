import './style.css';
import loadBase from './base.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const tabs = (() => {
  const navBtns = () => Array.from(document.getElementsByClassName('nav-btn'));
  
  const clearContent = () => {
    const scrollBox = document.getElementById('scroll-box');
  
    scrollBox.firstChild.style.opacity = 0;
    scrollBox.removeChild(scrollBox.firstChild);
  };

  const deactivateTabs = () => {
    navBtns().forEach(button => button.className = 'nav-btn');
  };
  
  const moveSlider = (e) => {
    const slider = document.getElementById('slider');
    slider.className = `slider ${e.target.innerText.toLowerCase()}`;
  };
  
  const activateTab = (e) => {
    e.target.className = 'nav-btn active';
  };

  const change = (e) => {
    console.log(e.target);
    if (e.target.classList.contains('active')) {
      return;
    } else {
      clearContent();
      deactivateTabs();
      moveSlider(e);
      activateTab(e);
  
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

