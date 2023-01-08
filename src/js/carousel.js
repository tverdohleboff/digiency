function initializeCarousel() {
  const carouselItems = document.querySelectorAll(
    '.clients-feedback__comments-container-mention'
  );

  let index = 0;
  const maxIndex = carouselItems.length - 1;

  // function showPrev() {
  //   show(-1);
  // }

  function showNext() {
    show(+1);
  }

  function show(increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0), maxIndex);
    carouselItems[index].scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    });
  }

  function autoScroll() {
    if (index < maxIndex) {
      showNext();
    } else {
      index = 0;
      show(0);
    }
  }

  setInterval(autoScroll, 5000);
}

export default initializeCarousel;
