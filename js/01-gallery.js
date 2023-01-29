import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('div.gallery');

const createGallery = galleryItems
  .map(
    (item) => 
      `<div class="gallery__item">
        <div class="gallery__link">
          <img
            class="gallery__image"
            src="${item.preview}" 
            data-source="${item.original}"
            alt="${item.description}"
          />
        </div>
      </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", createGallery);

gallery.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
};

console.log(galleryItems);

