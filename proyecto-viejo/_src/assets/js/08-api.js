const responseURL = document.querySelector('.js-response');


function sendData() {
  let inputs = Array.from(formValidation.elements);
  let json = getJSONFromInputs(inputs);
  json.skills = ['JavaScript', 'React'];
  if (fr.result !== null) {
    json.photo = fr.result;
  } else {
    json.photo = lsObj.image;
  }
  json.palette = lsObj.palette;
  sendRequest(json);
}

function loadPhoto() {
  const myFile = document.querySelector('#img-selector').files[0];
  if (myFile !== undefined) {
    fr.addEventListener('load', sendData);
    fr.readAsDataURL(myFile);
  } else {
    sendData();
  }
}

function getJSONFromInputs(inputs) {
  return inputs.reduce(function (acc, val) {
    if (val.nodeName !== 'BUTTON') {
      acc[val.name] = val.value;
    }
    return acc;
  }, {});
}

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  const btnTwitter = document.querySelector('.js-button-twitter');
  if (result.success) {
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    btnTwitter.href = 'https://twitter.com/share?text=' + 'Quiero enseñar mi tarjeta de contacto' + '&url=' + result.cardURL + '&hashtags=' + 'tarjetavisita,html,css,javascript,businesscard,card,profile';
    twitterBtn.classList.remove('hidden');
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

createAllowCard.addEventListener('click', loadPhoto);
