import {showBigPicture} from './big-picture';

const container = document.querySelector('.pictures');
const pictureSample = document.querySelector('#picture').content.querySelector('.picture');
const frag = document.createDocumentFragment();

function renderPictures(pictures) {
  for(const picture of pictures){
    const pictureElement = createPictureElement(picture);
    frag.appendChild(pictureElement);
  }
  container.append(frag);
}

function createPictureElement(picture){
  const el = pictureSample.cloneNode(true);
  el.querySelector('.picture__img').src = picture.url;
  el.querySelector('.picture__comments').textContent = picture.comments.length;
  el.querySelector('.picture__likes').textContent = picture.likes;
  el.addEventListener('click', ()=>{
    showBigPicture(picture);
  });
  return el;
}
export {renderPictures};
