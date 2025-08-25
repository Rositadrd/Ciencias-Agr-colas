const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});