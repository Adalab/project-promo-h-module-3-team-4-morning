const createAllowCard = document.querySelector('.js-share__btn');
const formValidation = document.querySelector('.js-form-container');



function checkForm() {
  if (formValidation.checkValidity() === true) {
    createAllowCard.classList.remove('filter');
  } else {
    createAllowCard.classList.add('filter');
  }
}

const twitterActive = function () {
  if (formValidation.checkValidity() === false) {
    twitterBtn.classList.add('hidden');
  }
};

function createButtonHandler(event) {
  event.preventDefault();
  twitterActive();
}
createAllowCard.addEventListener('click', createButtonHandler);
