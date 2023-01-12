function initializeSubscribeForm() {
  const form = document.querySelector('#subscribeForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thanks for subscribe.');
    const input = document.querySelector('.footer__newsletter-subscribe-input');
    input.value = '';
  });
}
export default initializeSubscribeForm;
