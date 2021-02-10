/* eslint-disable no-console */
/* eslint-disable no-global-assign */
/* global data */
/* exported data */

var $inputURL = document.querySelector('#url');
var $img = document.querySelector('.square-img');

$inputURL.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

var $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var entryObj = {};
  entryObj.title = $form.elements.title.value;
  entryObj.src = $form.elements.url.value;
  entryObj.textArea = $form.elements.imgdescription.value;
  entryObj.entryId = data.nextEntryId;

  data.entries.unshift(entryObj);
  data.nextEntryId++;

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $form.reset();
});

var treeResult = treeMaker(data.entries[0]);

var rowElement = document.querySelector('main');

rowElement.appendChild(treeResult);

function treeMaker(entry) {

  var ulElement = document.createElement('ul');
  ulElement.setAttribute('class', 'entry-list');

  var liImg = document.createElement('li');
  liImg.setAttribute('class', 'entry-item');
  ulElement.appendChild(liImg);

  var imgTag = document.createElement('img');
  imgTag.setAttribute('class', 'img-entry');
  imgTag.setAttribute('src', entry.src);
  liImg.appendChild(imgTag);

  var columnRight = document.createElement('div');
  columnRight.setAttribute('class', 'entry-column');
  ulElement.appendChild(columnRight);

  var liTitle = document.createElement('li');
  liTitle.setAttribute('class', 'entry-item');
  columnRight.appendChild(liTitle);

  var divTitle = document.createElement('div');
  divTitle.setAttribute('class', 'title-entry');
  divTitle.textContent = entry.title;
  liTitle.appendChild(divTitle);

  var liDescription = document.createElement('li');
  liDescription.setAttribute('class', 'entry-item');
  columnRight.appendChild(liDescription);

  var divDescription = document.createElement('div');
  divDescription.setAttribute('class', 'description-entry');
  divDescription.textContent = entry.textArea;
  liDescription.appendChild(divDescription);

  console.log(ulElement);
  return ulElement;
}
