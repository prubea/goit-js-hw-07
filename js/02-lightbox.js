import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("ul.gallery");

const markup = galleryItems
    .map(elem => {
      const images = `
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      title="${elem.description}"
      alt="${elem.description}"
    />
  </a>`;
    return images;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

new SimpleLightbox('.gallery a' ,{ captionDelay: 250 });


console.log(galleryItems);
