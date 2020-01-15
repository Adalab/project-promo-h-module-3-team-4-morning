const createCardApi = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const createCardFetch = (json) =>
    fetch(createCardApi, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function (resp) { return resp.json(); })
        .then(function (myJson) { console.log(myJson); })

export { createCardFetch };