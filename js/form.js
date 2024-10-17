import {resetEffects} from './effect';
const fileField = document.querySelector('#upload-file');
const chancelButton = document.querySelector('#upload-cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const checkHashTags = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const buttonUpload = document.querySelector('#upload-submit');

const onEscDown = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideModal();
    }
  });
};

const showModal = ()=>{
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscDown);
};

const validateTags = (value) =>{
  const hashTags = value.trim().toLowerCase().split(/\s+/);
  if(hashTags.length > 5) {
    return false;
  }
  for(let i = 0; i < hashTags.length; i++){
    if(!checkHashTags.test(hashTags[i])){
      return false;
    }
  }
  const uniqueHashTags = new Set(hashTags);
  return uniqueHashTags.size === hashTags.length;
};

const pristine = new Pristine(form,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass:  'img-upload__field-wrapper--error',
});

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);

function hideModal (){
  const activeField = hashtagField === document.activeElement || commentField === document.activeElement;
  if(!activeField){
    uploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscDown);
    form.reset();
    resetEffects();
  }
}

fileField.addEventListener('change', () => {
  showModal();
});

chancelButton.addEventListener('click', () =>{
  hideModal();
});

form.addEventListener('click', () => {
  pristine.validate();
});

buttonUpload.addEventListener('click', (evt) => {
  pristine.validate();
  evt.preventDefault();
});

