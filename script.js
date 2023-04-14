 let menu = document.querySelector('.menu');
const navMobile = document.querySelector('.nav-mobile');
const menuClose = document.querySelector('.close-menu');


menu.addEventListener('click', () => {
    navMobile.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    navMobile.classList.remove('active');
  });
  