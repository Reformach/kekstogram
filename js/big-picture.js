const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const comments = document.querySelector('.social__comments');
const deleteButton = bigPicture.querySelector('#picture-cancel');
const commentLoader = document.querySelector('.comments-loader');
const commentsCounter = document.querySelector('.social__comment-shown-count');
const COMMENTS_PER_PORTION = 5;

let commentsShown = 0;
let commentsList = [];

const createComments = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  commentElement.classList.add('social__comment');
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;

  return commentElement;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;
  if(commentsShown >= commentsList.length) {
    commentLoader.classList.add('hidden');
    commentsShown = commentsList.length;
    commentsCounter.textContent = commentsShown;
  }else{
    commentLoader.classList.remove('hidden');
    commentsCounter.textContent = commentsShown;
  }
  for(let i = 0; i < commentsShown; i++){
    const commentElement = createComments(commentsList[i]);
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
  commentsList = data.comments;
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  comments.innerHTML = '';
  renderPictureDetails(data);
  commentsShown = 0;
  renderComments();
  onEscDown();
  chancelButton(deleteButton);
};

commentLoader.addEventListener('click', () => {
  renderComments();
});

export {showBigPicture};


