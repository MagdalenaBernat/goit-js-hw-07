import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('div.gallery'); 

const createGallery = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}" 
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
  )
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

document.querySelector('div.gallery').onclick = () => {

  basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()
};



//const parent = document.querySelector("#parent");  // ?? nie wiem co chciałam xD



console.log(gallery);
console.log(galleryItems);
