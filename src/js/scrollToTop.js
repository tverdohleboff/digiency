function initializeScrollToTop() {
  const button = document.querySelector('.copyright__main-button');
  button.addEventListener('click', scrollToTop);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

export default initializeScrollToTop;
