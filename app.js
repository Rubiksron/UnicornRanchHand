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

};
