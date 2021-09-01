import brand from './brand.svg';

function makeHeader() {
  const header = document.createElement('header');
  header.id = 'header';

  const businessName = document.createElement('img');
  businessName.src = brand;

  header.appendChild(businessName);

  return header;
}

function makeNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.className = 'nav-btn active';
  homeBtn.innerText = 'HOME';

  const menuBtn = document.createElement('button');
  menuBtn.className = 'nav-btn';
  menuBtn.innerText = 'MENU';

  const contactBtn = document.createElement('button');
  contactBtn.className = 'nav-btn';
  contactBtn.innerText = 'CONTACT';

  const slider = document.createElement('div');
  slider.className = 'slider home';

  const sliderLeft = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  sliderLeft.setAttribute('class', 'inner-corner');
  sliderLeft.setAttribute('version', '1.1');
  sliderLeft.setAttribute('xmlns:x', '&ns_extend;');
  sliderLeft.setAttribute('xmlns:i', '&ns_ai;');
  sliderLeft.setAttribute('xmlns:graph', '&ns_graphs;');
  sliderLeft.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  sliderLeft.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  sliderLeft.setAttribute('x', '0px');
  sliderLeft.setAttribute('y', '0px');
  sliderLeft.setAttribute('viewBox', '0 0 500 500');
  sliderLeft.setAttribute('style', 'enable-background:new 0 0 500 500;');
  sliderLeft.setAttribute('xml:space', 'preserve');

  const sliderLeftPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  sliderLeftPath.setAttribute('d', 'M500,0c0,276.14-223.86,500-500,500h500C500,500,500,0,500,0z');

  const sliderCore = document.createElement('div');
  sliderCore.className = "core";

  const sliderRight = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  sliderRight.setAttribute('class', 'inner-corner');
  sliderRight.setAttribute('version', '1.1');
  sliderRight.setAttribute('xmlns:x', '&ns_extend;');
  sliderRight.setAttribute('xmlns:i', '&ns_ai;');
  sliderRight.setAttribute('xmlns:graph', '&ns_graphs;');
  sliderRight.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  sliderRight.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  sliderRight.setAttribute('x', '0px');
  sliderRight.setAttribute('y', '0px');
  sliderRight.setAttribute('viewBox', '0 0 500 500');
  sliderRight.setAttribute('style', 'enable-background:new 0 0 500 500;');
  sliderRight.setAttribute('xml:space', 'preserve');

  const sliderRightPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  sliderRightPath.setAttribute('d', 'M0,0c0,276.14,223.86,500,500,500H0C0,500,0,0,0,0z');

  sliderLeft.appendChild(sliderLeftPath);
  sliderRight.appendChild(sliderRightPath);
  slider.appendChild(sliderLeft);
  slider.appendChild(sliderCore);
  slider.appendChild(sliderRight);
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  nav.appendChild(slider);

  return nav;
}

function makeContentBox() {
  const contentBox = document.createElement('div');
  contentBox.id = 'backdrop';

  const scrollBox = document.createElement('div');
  scrollBox.id = 'scroll-box';

  contentBox.appendChild(scrollBox);

  return contentBox;
}

function loadBase() {
  const content = document.getElementById('content');
  const header = makeHeader();
  const nav = makeNav();
  const contentBox = makeContentBox();

  content.appendChild(header);
  content.appendChild(nav);
  content.appendChild(contentBox);
}

export default loadBase;