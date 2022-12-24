// // Отслеживай на форме событие input, и каждый раз записывай
// //в локальное хранилище объект с полями email и message,
// //в которых сохраняй текущие значения полей формы.
// //Пусть ключом для хранилища будет строка "feedback-form-state".
// // При загрузке страницы проверяй состояние хранилища,
// //и если там есть сохраненные данные, заполняй ими поля формы.
// //В противном случае поля должны быть пустыми.
// // При сабмите формы очищай хранилище и поля формы, а также
// //выводи объект с полями email, message и текущими их значениями в консоль.

import throttle from 'lodash.throttle';
// //console.log(throttle);

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

function onSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  e.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onInput(e) {
  const formData = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedSettings = JSON.parse(savedSettings);
if (savedSettings) {
  email.value = parsedSettings.email;
  message.value = parsedSettings.message;
}

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// const formData = load(LOCALSTORAGE_KEY);
// if (formData) {
//   email.value = formData.email;
//   message.value = formData.message;
// }
