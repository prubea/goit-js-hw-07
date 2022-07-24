import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("div.gallery");

const markup = galleryItems
  .map(elem => {
    const images = `<div class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</div>`;
    return images;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") return;
  
  const imageData = event.target.getAttribute("data-source");
  const imageAlt = event.target.getAttribute("alt");
  const instance = basicLightbox.create(`
        <img src="${imageData}" alt="${imageAlt}" />
	`, {
      onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape") instance.close();
        })
      }
  });
instance.show();
})