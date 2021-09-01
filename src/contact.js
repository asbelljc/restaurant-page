function makeContact() {
  content = document.createElement('div');
  content.id = 'contact-content';

  phone = document.createElement('div');
  phone.id = 'phone';
  phone.innerText = '000-555-1234';

  form = document.createElement('form');

  clientName = document.createElement('input');
  clientName.type = 'text';
  clientName.placeholder = 'Name'

  clientEmail = document.createElement('input');
  clientEmail.type = 'text';
  clientEmail.placeholder = 'E-mail address';

  message = document.createElement('textarea');
  message.placeholder = "Leave us a message and we'll reply promptly!";

  sendBtn = document.createElement('button');
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

  scrollBox.appendChild(contactContent);
}

export default loadContact;