import classic from './Images/classic.jpg';
import chocolate from './Images/chocolate.jpg';
import whiteChocolate from './Images/white-chocolate.jpg';
import blueberry from './Images/blueberry.jpg';
import strawberryBasil from './Images/strawberry-basil.jpg';
import pumpkin from './Images/pumpkin.jpg';
import turtle from './Images/turtle.jpg';
import cookieButter from './Images/cookie-butter.jpg';
import mulledWine from './Images/mulled-wine.jpg';

function makeItem(name, image) {
  const item = document.createElement('div');
  item.className = 'menu-item';

  const itemName = document.createElement('h3');
  itemName.innerText = name;

  const imageWrap = document.createElement('div');
  imageWrap.className = 'image-wrap';

  const pic = document.createElement('img');
  pic.src = image;
  pic.className = 'menu-pic';

  imageWrap.appendChild(pic);
  item.appendChild(itemName);
  item.appendChild(imageWrap);

  return item;
}

function makeMenu() {
  const content = document.createElement('div');
  content.id = 'menu-content';

  content.appendChild(makeItem('classic', classic));
  content.appendChild(makeItem('chocolate', chocolate));
  content.appendChild(makeItem('white chocolate', whiteChocolate));
  content.appendChild(makeItem('blueberry', blueberry));
  content.appendChild(makeItem('strawberry basil', strawberryBasil));
  content.appendChild(makeItem('pumpkin', pumpkin));
  content.appendChild(makeItem('turtle', turtle));
  content.appendChild(makeItem('cookie butter', cookieButter));
  content.appendChild(makeItem('mulled wine', mulledWine));

  return content;
}

function loadMenu() {
  const scrollBox = document.getElementById('scroll-box');
  const menu = makeMenu();

  // scrollBox.style.opacity = 0;
  scrollBox.appendChild(menu);
  scrollBox.style.opacity = 1;
}

export default loadMenu;