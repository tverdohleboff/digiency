function initializeShowBurgerMenu() {
  const forClick = document.querySelector(
    '.header__main-mobile-menu-container-button'
  );
  forClick.addEventListener('click', refreshMenu);
  const body = document.querySelector('body');
  const mobileMenu = document.querySelector('.header__main-burger-menu');
  const forUrlClicks = document.querySelectorAll(
    '.header__main-burger-menu-list-url'
  );
  for (const forUrlClick of forUrlClicks) {
    forUrlClick.addEventListener('click', closeMenu);
  }

  let menuIsOpen = false;

  function refreshMenu() {
    if (menuIsOpen === false) {
      showMenu();
    } else {
      closeMenu();
    }
    refreshIconButton();
  }

  function refreshIconButton() {
    if (menuIsOpen === true) {
      forClick.classList.add('header__main-mobile-menu-container-button-close');
    } else {
      forClick.classList.remove(
        'header__main-mobile-menu-container-button-close'
      );
    }
  }

  function showMenu() {
    mobileMenu.classList.remove('hidden');
    body.classList.add('stop-scrolling');
    body.addEventListener('touchmove', function (event) {
      event.preventDefault();
    });
    menuIsOpen = true;
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    body.classList.remove('stop-scrolling');
    body.removeEventListener('touchmove', function (event) {
      event.preventDefault();
    });
    menuIsOpen = false;
  }
}

export default initializeShowBurgerMenu;
