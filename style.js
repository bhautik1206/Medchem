const commentForm = document.querySelector('.comment-box form');
const commentInput = document.querySelector('#comment');
const commentsContainer = document.querySelector('#comments');

commentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const comment = commentInput.value;
  if (comment !== '') {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerText = comment;
    commentsContainer.appendChild(commentElement);
    commentInput.value = '';
  }
});
