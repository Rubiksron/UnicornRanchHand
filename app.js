'use strict';

var unicorns = [];

function Unicorn(name) {
  this.name = name;
  this.location = 'barn';
  unicorns.push(this);
};

new Unicorn('sparky', unicorns);
new Unicorn('joe', unicorns);
new Unicorn('dim', unicorns);

var submitButton = document.getElementById('form');
submitButton.addEventListener('submit', updateData);

function updateData(e){
  e.preventDefault();
  var unicorn = e.target.unicorn.value;
  var to = e.target.to.value;

  for ( var i = 0; i < unicorns.length; i++) {
    if(unicorn == unicorns[i].name) {
      unicorns[i].location = to;
      console.log(unicorns[i].name);
      console.log(unicorns[i].location);
    }
  }

  localStorage.setItem('unicorns', JSON.stringify(unicorns));
  location.reload();
};

if(localStorage.unicorns) {
  unicorns = JSON.parse(localStorage.unicorns);
  console.log('data received from local storage.');
}

function populateList() {
  var unicornsListEl = document.getElementById('unicornsList');

  for( var i = 0; i < unicorns.length; i++ ) {
    var liEl = document.createElement('li');
    liEl.textContent = unicorns[i].name + ' is currently at: ' + unicorns[i].location;
    unicornsListEl.appendChild(liEl);
  }
};
populateList();
