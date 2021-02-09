/* eslint-disable no-global-assign */
/* global data */
/* exported data */

var $inputURL = document.querySelector('#url');
var $img = document.querySelector('.square-img');

$inputURL.addEventListener('input', function (event) {
  $img.setAttribute('src', event.target.value);
});

var $title = document.querySelector('#title');
var $textArea = document.querySelector('#textarea');
var $form = document.querySelector('.form');

var prevData = localStorage.getItem('jv-local-storage');

if (prevData !== null) {
  data = JSON.parse(prevData);
}

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var entryObj = {};
  entryObj.title = $title.value;
  entryObj.src = $img.getAttribute('src');
  entryObj.textArea = $textArea.value;
  entryObj.dataEntry = data.nextEntryId;

  data.entries.push(entryObj);

  data.nextEntryId++;

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $form.reset();
});

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('jv-local-storage', dataJSON);
});
