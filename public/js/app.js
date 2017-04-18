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
    if (i >= 30) {
      break;
    }
    let image = document.createElement('img');
    image.src = responseText.images[i].display_sizes[0].uri;
    document.querySelector('#img-container').appendChild(image);
  }
}

function clearImgs() {
  const imgContainer = document.querySelector('#img-container');
  if (imgContainer) {
    while (imgContainer.firstChild) {
      imgContainer.removeChild(imgContainer.firstChild);
    }
  }
}

document.querySelector('#btn-search').addEventListener('click', () => {
  clearImgs();
  const input = document.querySelector('#input-search');
  document.cookie = `search=${input.value}`;
  getGettyData(addImagesToDOM, `https://api.gettyimages.com/v3/search/images?phrase=${input.value}`, {'Api-Key': API_KEY});
});

// TODO: Make this less hacky by parsing the cookie string
if (document.cookie) {
  document.querySelector('#input-search').value = document.cookie.slice(7);
  getGettyData(addImagesToDOM, `https://api.gettyimages.com/v3/search/images?phrase=${document.cookie.slice(7)}`, {'Api-Key': API_KEY});
}


