import {resetEffects} from './effect';

const fileField = document.querySelector('#upload-file');
const chancelButton = document.querySelector('#upload-cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const checkHashTags = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const buttonUpload = document.querySelector('#upload-submit');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const photoPreview = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');


const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const onFileInputChange = () => {
  const file = fileField.files[0];
  if (file && isValidType(file)) {
    photoPreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });    
  }
  showModal();
};

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
  onFileInputChange();
});

chancelButton.addEventListener('click', () =>{
  hideModal();
});

form.addEventListener('click', () => {
  pristine.validate();
});

const blockSubmitButton = () => {
  buttonUpload.disabled = true;
  buttonUpload.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  buttonUpload.disabled = false;
  buttonUpload.textContent = 'Опубликовать';
};

const initFormValidation = (onSubmit) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      await onSubmit(new FormData(form));
      unblockSubmitButton();
      closeForm();
    }
  });
};



export { initFormValidation};