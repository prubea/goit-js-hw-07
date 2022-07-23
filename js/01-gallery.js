import { galleryItems } from './gallery-items.js';
// Change code below this line

const galery = document.querySelector(".gallery");

const markup = galleryItems
  .map((img) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  )
  .join("");

galery.insertAdjacentHTML("beforeend", markup);

galery.addEventListener("click", lightBoxModal);

function lightBoxModal(e) {
  e.preventDefault();
  const target = e.target;
  const image = target.dataset.source;
  if (e.target.nodeName !== "a.gallery__link") {
    const modal = basicLightbox.create(
      `
        <img width="1400" height="900" src="${image}">
	`
    );
    modal.show();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.close();
    });
  }
}


console.log(galleryItems);
