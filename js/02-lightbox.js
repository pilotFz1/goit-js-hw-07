import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createGalleryContaener = document.querySelector(".gallery");
const createGallery = createGalleryItems(galleryItems);

createGalleryContaener.insertAdjacentHTML("beforeend", createGallery);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
