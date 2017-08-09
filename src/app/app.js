import React from 'react';
import ReactDOM from 'react-dom';

const NEW_DIV = (
  <div id="block">
    <button>X</button>
  </div>
);
let boxBtn = document.getElementById('makeBox');


boxBtn.addEventListener("click", function() {
    makeABox();
  }, false);



function makeABox() {
  ReactDOM.render(
        NEW_DIV,
        document.getElementById('app')
      );
      let block = document.getElementById('block');
      block.addEventListener("click", function() {
          this.style.backgroundColor = 'black';
        }, false);
}
