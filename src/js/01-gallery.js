// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

//     Добавь библиотеку SimpleLightbox как зависимость проекта используя
// npm(ссылка на CDN из твоей прошлой работы больше не нужна).
//     Используй свой JavaScript код из предыдущей домашней работы,
//     но выполни рефакторинг с учетом того, что библиотека была установлена
//     через npm(синтаксис import /export).

// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт,
//         кроме того который описан в документации.

// Add imports above this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
//console.log(SimpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
//console.log(galleryItems);

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
  const galleryItem = document.createElement('li');
  galleryItem.className = 'gallery__item';
  galleryItem.style.listStyle = 'none';

  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;

  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;
  galleryImage.setAttribute('title', element.original);

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);

  items.push(galleryItem);
});

gallery.append(...items);
//console.log(gallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  scrollZoomFactor: 2,
  //   navText: ['*', '*'],
  overlayOpacity: 0.9,
  fadeSpeed: 300,
});
