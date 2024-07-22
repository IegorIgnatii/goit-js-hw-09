const formEl = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', () => {
  formData.email = formEl.elements.email.value.trim();
  formData.message = formEl.elements.message.value.trim();

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const email = formEl.elements.email.value.trim();
  const message = formEl.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);
  localStorage.removeItem(LOCAL_KEY);
  formEl.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const loadForms = JSON.parse(localStorage.getItem(LOCAL_KEY));

  formEl.elements.email.value = loadForms?.email ?? '';
  formEl.elements.message.value = loadForms?.message ?? '';
});
