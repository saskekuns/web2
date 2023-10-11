
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('hidden');
  menuToggle.classList.toggle('active');
});

const notification = document.getElementById('notification');
const notificationName = document.getElementById('notification-name');
const notificationMessage = document.getElementById('notification-message');
const notificationClose = document.getElementById('notification-close');

const notificationData = {
  name: 'Уведомление',
  message: 'Ваше подключение полностью безопасно'
};

function showNotification() {
  notificationName.textContent = notificationData.name;
  notificationMessage.textContent = notificationData.message;
  notification.classList.remove('hidden');
  setTimeout(hideNotification, 4000);
}

function hideNotification() {
  notification.classList.add('hidden');
}

notificationClose.addEventListener('click', hideNotification);

window.addEventListener('load', function() {
  setTimeout(showNotification, 2000);
});

