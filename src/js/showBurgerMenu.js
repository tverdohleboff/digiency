function initializeShowBurgerMenu() {
  const forClick = document.querySelector('.header__main-menu');
  forClick.addEventListener('click', refreshMenu);

  let menuIsOpen = false;

  function refreshMenu() {
    if (menuIsOpen === false) {
      showMenu();
    } else {
      closeMenu();
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
