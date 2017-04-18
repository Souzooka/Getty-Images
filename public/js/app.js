/*jshint esversion:6*/

function getGettyData(callback, query, headers = {}) {
  const xhr = new XMLHttpRequest();
  const headerKeys = Object.keys(headers);
  const headerValues = Object.values(headers);
  xhr.open("GET", query);

  for (let i = 0; i < headerKeys.length; ++i) {
    xhr.setRequestHeader(headerKeys[i], headerValues[i]);
  }

  xhr.addEventListener('load', callback);
  xhr.send();
}

function addImagesToDOM() {
  const responseText = JSON.parse(this.responseText);
  for (let i = 0; i < responseText.result_count; ++i) {
    if (i > 30) {
      break;
    }
    let image = document.createElement('img');
    image.src = responseText.images[i].display_sizes[0].uri;
    console.log(document.querySelector('#img-container'));
    document.querySelector('#img-container').appendChild(image);
  }
}

document.querySelector('#btn-search').addEventListener('click', () => {
  const input = document.querySelector('#input-search');
  getGettyData(addImagesToDOM, `https://api.gettyimages.com/v3/search/images?phrase=${input.value}`, {'Api-Key': API_KEY});
});


