// Toggle the navigation bar open and close
const menuToggle = document.getElementById('menu-toggle');
const navContainer = document.getElementById('nav-container');

menuToggle.addEventListener('click', () => {
  if (navContainer.classList.contains('nav-open')) {
    navContainer.classList.remove('nav-open');
    navContainer.classList.add('nav-closed');
  } else {
    navContainer.classList.remove('nav-closed');
    navContainer.classList.add('nav-open');
  }
});
