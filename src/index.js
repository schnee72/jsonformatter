import './index.css';
require('./favicon.ico');

/*eslint no-console: "off"*/

const textArea = global.document.getElementById('textArea');
const format = global.document.getElementById('format');
const copy = global.document.getElementById('copy');
const message = global.document.getElementById('message');

format.onclick = () => {
  message.innerHTML = '';
  let val = textArea.value;

  try {
    let obj = JSON.parse(val);
    textArea.value = JSON.stringify(obj, undefined, 2);
  } catch (e) {
    error(e);
  }
}

copy.onclick = () => {
  message.innerHTML = '';
  textArea.select();

  try {
    message.className = 'yellow';
    message.innerHTML = global.document.execCommand('copy') ? 'Copied!' : 'Nothing copied.';
  } catch (e) {
    error(e);
  }
}

const error = (e) => {
  message.className = 'red';
  message.innerHTML = e;
}
