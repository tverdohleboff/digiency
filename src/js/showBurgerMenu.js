function initializeShowBurgerMenu() {
  const forClick = document.querySelector('.header__main-menu');
  forClick.addEventListener('click', refreshMenu);

  const forUrlClicks = document.querySelectorAll(
    '.header__main-burger-menu-list-url'
  );
  for (const forUrlClick of forUrlClicks) {
    forUrlClick.addEventListener('click', closeMenu);
  }

  let menuIsOpen = false;

  function refreshMenu() {
    // refreshIconButton();
    if (menuIsOpen === false) {
      showMenu();
    } else {
      closeMenu();
    }
  }

  function refreshIconButton() {
    if (menuIsOpen === true) {
      const burgerIcon = document.querySelector('header__main-menu-block-icon');
      burgerIcon.style.display = 'none';
    } else {
      const burgerClose = document.querySelector(
        'header__main-menu-block-close'
      );
      burgerClose.style.display = 'block';
    }
  }

  function showMenu() {
    const listStyle = document.querySelector('.header__main-burger-menu');
    listStyle.style.display = 'flex';
    menuIsOpen = true;
  }

  function closeMenu() {
    const listStyle = document.querySelector('.header__main-burger-menu');
    listStyle.style.display = 'none';
    menuIsOpen = false;
  }
}

export default initializeShowBurgerMenu();
