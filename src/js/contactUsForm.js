function initializeContactUsForm() {
  const form = document.querySelector('#contactUsForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('We received your message.');
    const inputs = document.querySelectorAll(
      '.contact-us__message-send-block-input'
    );
    for (const input of inputs) {
      input.value = '';
    }
  });
}
export default initializeContactUsForm;
