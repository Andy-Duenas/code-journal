/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var prevData = localStorage.getItem('jv-local-storage');

if (prevData !== null) {
  data = JSON.parse(prevData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('jv-local-storage', dataJSON);
});
