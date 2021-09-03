function makeContact() {
  const content = document.createElement('div');
  content.id = 'contact-content';

  const phone = document.createElement('div');
  phone.id = 'phone';
  phone.innerText = '📞 000-555-1234';

  const form = document.createElement('form');

  const clientName = document.createElement('input');
  clientName.type = 'text';
  clientName.placeholder = 'Name'

  const clientEmail = document.createElement('input');
  clientEmail.type = 'text';
  clientEmail.placeholder = 'E-mail address';

  const message = document.createElement('textarea');
  message.placeholder = "Leave us a message and we'll reply promptly!";
  message.rows = 5;

  const sendBtn = document.createElement('button');
  sendBtn.type = 'button';
  sendBtn.id = 'send-btn';
  sendBtn.innerText = 'SEND';

  form.appendChild(clientName);
  form.appendChild(clientEmail);
  form.appendChild(message);
  form.appendChild(sendBtn);
  content.appendChild(phone);
  content.appendChild(form);

  return content;
}

function loadContact() {
  const scrollBox = document.getElementById('scroll-box');
  const contactContent = makeContact();

  // scrollBox.style.opacity = 0;
  scrollBox.appendChild(contactContent);
  scrollBox.style.opacity = 1;
}

export default loadContact;