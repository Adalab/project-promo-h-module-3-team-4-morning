

function updatePreview() {
  const lsArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (i < 2) {
      if (!!inputArr[i].value === false) {
        previewArr[i].innerHTML = defaultPreviewArr[i];
      } else {
        previewArr[i].innerHTML = inputArr[i].value;
      }
    } else if (!!inputArr[i].value === false) {
      previewArr[i].href = `${hrefArr[i]}${defaultPreviewArr[i]}`;
      colorIConsCard[i - 2].classList.add('filter');
    } else {
      previewArr[i].href = `${hrefArr[i]}${inputArr[i].value}`;
      colorIConsCard[i - 2].classList.remove('filter');
    }
    lsObj[inputArr[i].id] = inputArr[i].value;
    lsArr.push(inputArr[i].value);
  }
  twitterBtn.classList.add('hidden');
}

