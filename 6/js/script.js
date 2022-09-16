let navMain = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__page--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__page--closed')) {
    navMain.classList.remove('main-header__page--closed');
    navMain.classList.add('main-header__page--open');
  } else {
    navMain.classList.add('main-header__page--closed');
    navMain.classList.remove('main-header__page--open');
  }
});
