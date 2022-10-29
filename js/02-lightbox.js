import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('a.gallery__item');

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
  if (event.target.nodeName !== "DIV") {
    return;
  }
  const selectedImage = event.target.dataset.original;
  console.log(selectedImage);
};


const images = document.querySelectorAll('.gallery__image');

for (const image of images) {
  image.onclick = (event) => {
    event.preventDefault();
    basicLightbox.create('<img  src="' + event.target.src + '">').show()
  };

}

const lightbox = new SimpleLightbox('.gallery__item', {}); // tu coś wsadzić
    
    
document.querySelector('.gallery__item').onclick = (e) => {
	const instance = basicLightbox.create(html, {
		onShow: (instance) => console.log('onShow', instance),
		onClose: (instance) => console.log('onClose', instance)
	})

	instance.show((instance) => console.log('finished show()', instance))

	setTimeout(() => {
		instance.close((instance) => console.log('finished close()', instance))
	}, 250)
    };


console.log(galleryItems);
