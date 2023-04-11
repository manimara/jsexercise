// Import stylesheets
import './style.css';
//import "./e2.js";
// import "./e3.js";
import './e4.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function search(obj, key) {
  // console.log(obj);
  if (obj && obj.name == key) {
    console.log(obj);
    return obj;
  } else {
    if (obj && obj.children) {
      let f = obj.children;
      f.forEach((child) => search(child, key));
    }
  }
  return;
}

var obj = {
  name: 'main',
  children: [
    {
      name: 'A',
      children: [
        {
          name: 'A-A',
          children: [
            {
              name: 'A-A-A',
            },
            {
              name: 'A-A-B',
            },
          ],
        },
      ],
    },
    {
      name: 'B',
    },
  ],
};

//search(obj, "A-A-B");

class ToolTip extends HTMLElement {
  constructor() {
    super();
    console.log(`I am Web component`);
  }

  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?) ';
    tooltipIcon.addEventListener('mouseenter', this._showTooltip);
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip);
    this.appendChild(tooltipIcon);
  }
  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = 'This is tooltip text';
    this.appendChild(this._tooltipContainer);
  }
  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }
}

customElements.define('mm-tooltip', ToolTip);
