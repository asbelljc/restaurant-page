import slices from './slices.jpg';

function makeHome() {
  const homeContent = document.createElement('div');
  homeContent.id = 'home-content';

  const homeCopy = document.createElement('section');
  homeCopy.id = "home-copy";

  const heading = document.createElement('h1');
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

  homeCopy.appendChild(heading);
  homeCopy.appendChild(body);
  imageWrap.appendChild(slicesPic);
  homeContent.appendChild(homeCopy);
  homeContent.appendChild(imageWrap);

  return homeContent;
}

function loadHome() {
  const scrollBox = document.getElementById('scroll-box');
  const homeContent = makeHome();

  scrollBox.appendChild(homeContent);
}

export default loadHome;