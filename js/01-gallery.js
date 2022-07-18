import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createGalleryContaener = document.querySelector(".gallery");
const createGallery = createGalleryItems(galleryItems);

createGalleryContaener.insertAdjacentHTML("beforeend", createGallery);

createGalleryContaener.addEventListener("click", onRreateGalleryContaenerClick);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onRreateGalleryContaenerClick(evt) {
  evt.preventDefault();
  /*   В примере у Репеты есть этот if, и я посмотрел, 
ребята в Slack делели все, но он здесь не нежун, без него все работает, или я что-то не понял значит */
  /*  ********** */
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`
  );
  console.log(evt.target.dataset.source);
  instance.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(evt) {
    const ESC_KEY_CODE = "Escape";
    if (evt.code === ESC_KEY_CODE) {
      instance.close();
    }
  }
}
