import React from 'react';
import ReactDOM from 'react-dom';

const NEW_DIV = (
  <div id="block">
    <button>X</button>
  </div>
);
let boxBtn = document.getElementById('makeBox');
let block = document.getElementById('block');

boxBtn.addEventListener("click", function() {
    makeABox();
  }, false);



function makeABox() {
  ReactDOM.render(
        NEW_DIV,
        document.getElementById('app')
      );

}
