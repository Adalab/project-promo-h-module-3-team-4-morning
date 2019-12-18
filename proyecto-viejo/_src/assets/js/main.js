'use strict';

function handler() {
  updateLocalStorage();
  updatePreview();
  updatePalette();
  checkForm();
}

getFromLocalStorage();
