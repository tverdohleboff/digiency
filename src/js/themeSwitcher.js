function initializeThemeSwitcher() {
  let darkThemeIsActive = false;
  const button = document.querySelector('.header__main-theme-button');
  button.addEventListener('click', switchTheme);
  const body = document.querySelector('body');

  function switchTheme() {
    if (darkThemeIsActive === false) {
      body.classList.add('dark');
      button.setAttribute('title', 'Switch to light theme');
      darkThemeIsActive = true;
    } else {
      body.classList.remove('dark');
      button.setAttribute('title', 'Switch to dark theme');
      darkThemeIsActive = false;
    }
  }
}

export default initializeThemeSwitcher;
