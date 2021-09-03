import slices from './Images/slices.jpg';

function makeHome() {
  const content = document.createElement('div');
  content.id = 'home-content';

  const copy = document.createElement('section');
  copy.id = 'home-copy';

  const heading = document.createElement('h3');
  heading.innerText = 'piece of cake';

  const body = document.createElement('span');
  body.innerText = 
    "Whether you want a classic recipe or a custom flavor combo, " + 
    "Cara's Kitchen has you covered. Choose from our esteemed lineup " + 
    "of gourmet cheesecakes or tell us a flavor palette you have in mind " + 
    "and we'll deliver an unforgettable dessert for any occasion!"
  ;
  
  const imageWrap = document.createElement('div');
  imageWrap.className = 'image-wrap';

  const slicesPic = document.createElement('img');
  slicesPic.src = slices;
  slicesPic.id = 'slices';

  copy.appendChild(heading);
  copy.appendChild(body);
  imageWrap.appendChild(slicesPic);
  content.appendChild(copy);
  content.appendChild(imageWrap);

  return content;
}

function loadHome() {
  const scrollBox = document.getElementById('scroll-box');
  const homeContent = makeHome();

  // scrollBox.style.opacity = 0;
  scrollBox.appendChild(homeContent);
  scrollBox.style.opacity = 1;
}

export default loadHome;