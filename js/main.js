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

  $entryformDiv.className = 'hidden';
  $entriesDiv.className = 'entries';
  data.view = 'entries';
  $ulElement.prepend(treeMaker(entryObj));
  $form.reset();
});

function treeMaker(entry) {

  var liImg = document.createElement('li');
  liImg.setAttribute('class', 'entry-item');
  $ulElement.appendChild(liImg);

  var container = document.createElement('div');
  container.setAttribute('class', 'container-column');
  liImg.appendChild(container);

  var imgTag = document.createElement('img');
  imgTag.setAttribute('class', 'img-entry');
  imgTag.setAttribute('src', entry.src);
  container.appendChild(imgTag);

  var columnRight = document.createElement('div');
  columnRight.setAttribute('class', 'entry-column');
  container.appendChild(columnRight);

  var divTitle = document.createElement('div');
  divTitle.setAttribute('class', 'title-entry');
  divTitle.textContent = entry.title;
  columnRight.appendChild(divTitle);

  var divDescription = document.createElement('div');
  divDescription.setAttribute('class', 'description-entry');
  divDescription.textContent = entry.textArea;
  columnRight.appendChild(divDescription);

  return liImg;
}
var $ulElement = document.querySelector('.entry-list');
var tree;
function addToTree(event) {
  for (var i = 0; i < data.entries.length; i++) {
    tree = treeMaker(data.entries[i]);
    $ulElement.appendChild(tree);
  }
}

window.addEventListener('DOMContentLoaded', addToTree);

var $entriesLink = document.querySelector('a');
var $newEntryButton = document.querySelector('.new-entry-button');
var $entriesDiv = document.querySelector('.entries');
var $entryformDiv = document.querySelector('.entry-form');

if (data.view === 'entry-form') {
  $entriesDiv.className = 'hidden';
}
if (data.view === 'entries') {
  $entryformDiv.className = 'hidden';
}

$entriesLink.addEventListener('click', function (event) {
  $entryformDiv.className = 'hidden';
  $entriesDiv.className = 'entries';
  data.view = 'entries';
});

$newEntryButton.addEventListener('click', function (event) {
  $entriesDiv.className = 'hidden';
  $entryformDiv.className = 'entries';
  data.view = 'entry-form';
});
