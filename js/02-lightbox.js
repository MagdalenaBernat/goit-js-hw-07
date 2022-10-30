import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('div.gallery');

const createGallery = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" 
            src="${item.preview}"
            alt="${item.description}"/>
    </a>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", createGallery);

gallery.addEventListener("click", selectImage);

function selectImage(event) {
  if (event.target.nodeName !== "DIV") {
    return;
  }
  const selectedImage = event.target.dataset.original;
  console.log(selectedImage);
};

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});

console.log(galleryItems);
