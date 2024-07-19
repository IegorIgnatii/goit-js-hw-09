const refs = {
  formEl: document.querySelector('.data-form'),
};

const LOCAL_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {
  email: '',
  message: '',
};

refs.formEl.addEventListener('submit', e => {
  formData[e.target.name] = e.target.value.trim();

  saveToLs(LOCAL_KEY, formData);

  function saveToLs(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
    console.log(json);
  }
});

function loadFromLs(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

function setDataToForm() {
  const loadStorage = loadFromLs('feedback-form-state');
  if (loadStorage === null) return;
  const keys = Object.keys(formData);

  keys.forEach(key => {
    refs.formEl.elements[key].value = loadStorage[key];
  });
}
setDataToForm();
