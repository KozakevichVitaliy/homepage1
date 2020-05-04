document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  document.getElementById('guitar').addEventListener('click', function () {
    this.childNodes[2].play();
  });
  let linkGame = (e) => {
    let question = confirm('Do u realy wanna play the game??');
    if (!question) e.preventDefault();
  };
  document.getElementById('dinosaur').addEventListener('click', linkGame);
});
