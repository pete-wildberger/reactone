import React from 'react';
import ReactDOM from 'react-dom';

const NEW_DIV = (
  <div className="block">
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
}
