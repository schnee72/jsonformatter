import './index.css';
require('./favicon.ico');

/*eslint no-console: "off"*/

const textArea = global.document.getElementById('textArea');
const format = global.document.getElementById('format');
const copy = global.document.getElementById('copy');
const message = global.document.getElementById('message');

format.onclick = () => {
  clear();
  let val = textArea.value;
  if (val === '') {
    return;
  }
  try {
    val = JSON.stringify(JSON.parse(val), undefined, 2);
  } catch (e) {
    error(`${e}`);
  }
}

copy.onclick = () => {
  clear();
  if (textArea.value === '') {
    return;
  }
  textArea.setSelectionRange(0, textArea.value.length);
  try {
    message.innerHTML = global.document.execCommand('copy') ? 'Copied!' : 'Nothing copied.';
    message.className = 'yellow';
    setTimeout(clear, 3500);
  } catch (e) {
    error(e);
  }
}

const error = (e) => {
  message.className = 'red';
  message.innerHTML = e;
  setTimeout(clear, 5000);
}

const clear = () => message.innerHTML = '';
