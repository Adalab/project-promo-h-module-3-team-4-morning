/* eslint-disable no-inner-declarations */
'use strict';

const collapsibleArr = document.querySelectorAll('.collapsible');
const fieldsetArr = document.querySelectorAll('fieldset');

for (let i = 0; i < collapsibleArr.length; i++) {
  collapsibleArr[i].addEventListener('click', toggleItem);

  function toggleItem() {
    toggle(i);
  }
}

function toggle(itemIndex) {
  const sel = fieldsetArr[itemIndex];
  const col = collapsibleArr[itemIndex];
  const initialStatus = sel.classList.contains('hidden');
  fieldsetArr[0].classList.add('hidden');
  collapsibleArr[0].classList.remove('open');
  fieldsetArr[1].classList.add('hidden');
  collapsibleArr[1].classList.remove('open');
  fieldsetArr[2].classList.add('hidden');
  collapsibleArr[2].classList.remove('open');
  if (initialStatus) {
    sel.classList.remove('hidden');
    col.classList.add('open');
  } else {
    sel.classList.add('hidden');
    col.classList.remove('open');
  }
}
