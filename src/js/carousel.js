function initializeCarousel(containerClass) {
  let carouselContainer = document.querySelector(`.${containerClass}`);
  const topElement = carouselContainer.parentElement;
  const innerHTML = topElement.innerHTML;
  const carouselOuterContainer = document.createElement('div');
  carouselOuterContainer.classList.add('carousel-outer-container');
  const carouselParentContainer = document.createElement('div');
  carouselParentContainer.classList.add('carousel-parent-container');
  carouselParentContainer.innerHTML = innerHTML;
  carouselOuterContainer.append(carouselParentContainer);

  const prevButton = document.createElement('button');
  prevButton.setAttribute('type', 'button');
  prevButton.classList.add('carousel-prev-button');
  prevButton.innerHTML =
    '<img src="src/images/common/arrow-left.svg" alt="Previous" />';
  carouselOuterContainer.append(prevButton);

  const nextButton = document.createElement('button');
  nextButton.setAttribute('type', 'button');
  nextButton.classList.add('carousel-next-button');
  nextButton.innerHTML =
    '<img src="src/images/common/arrow-right.svg" alt="Next" />';
  carouselOuterContainer.append(nextButton);

  topElement.replaceChild(carouselOuterContainer, carouselContainer);
  carouselContainer = carouselOuterContainer.querySelector(
    `.${containerClass}`
  );
  carouselContainer.classList.add('carousel-container');

  nextButton.addEventListener('click', slideNext);
  prevButton.addEventListener('click', slidePrev);

  let columns = window.innerWidth >= 768 ? 2 : 1;

  let slideDirection = 'next';
  let currentSlideIndex = columns - 1;

  function slideNext() {
    slideDirection = 'next';
    slide();
  }

  function slidePrev() {
    slideDirection = 'prev';
    slide();
  }

  function slide() {
    const maxIndex = carouselContainer.children.length - 1;

    const minIndex = columns === 1 ? 0 : 1;
    const item = carouselContainer.children[0];
    const csContainer = getComputedStyle(carouselContainer);
    const gap = parseInt(csContainer.gap);
    const csItem = getComputedStyle(item);
    const itemWidth = parseInt(csItem.width);
    let nextSlideIndex;

    if (slideDirection === 'next') {
      nextSlideIndex = currentSlideIndex + 1;

      if (nextSlideIndex > maxIndex) {
        return;
      }
    }

    if (slideDirection === 'prev') {
      nextSlideIndex = currentSlideIndex - 1;

      if (nextSlideIndex < minIndex) {
        return;
      }
    }

    currentSlideIndex = nextSlideIndex;

    const offset = gap + itemWidth;
    let nextLeftValue;
    if (slideDirection === 'next') {
      nextLeftValue = parseInt(csContainer.left) - offset + 'px';
    } else if (slideDirection === 'prev') {
      nextLeftValue = parseInt(csContainer.left) + offset + 'px';
    }

    carouselContainer.classList.add('shifting');
    carouselContainer.style.left = nextLeftValue;
  }

  window.addEventListener('resize', handleWindowResize);
  carouselContainer.addEventListener('transitionend', finishSlide);

  function handleWindowResize(e) {
    calcColumns();
    slideToStart();
  }

  function calcColumns() {
    if (window.innerWidth >= 600) {
      columns = 2;
    } else {
      columns = 1;
    }
  }

  function slideToStart() {
    carouselContainer.style.left = 0;
    currentSlideIndex = columns - 1;
  }

  function finishSlide() {
    carouselContainer.classList.remove('shifting');
  }
}

export default initializeCarousel;
