const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const comments = document.querySelector('.social__comments');
const deleteButton = bigPicture.querySelector('#picture-cancel');

const createComments = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  commentElement.classList.add('social__comment');
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;

  return commentElement;
};

const renderComments = (data) => {
  for(const comment of data){
    const commentElement = createComments(comment);
    comments.appendChild(commentElement);
  }
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  comments.innerHTML = '';
};

const chancelButton = (button) => {
  button.addEventListener('click', ()=>{
    hideBigPicture();
  });
};

const renderPictureDetails = (data) => {
  bigPicture.querySelector('.big-picture__img img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__caption').textContent = data.description;
};

const onEscDown = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideBigPicture();
    }
  });
};


const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  comments.innerHTML = '';
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  renderPictureDetails(data);
  renderComments(data.comments);
  onEscDown();
  chancelButton(deleteButton);
};

export {showBigPicture};


