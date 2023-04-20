import { parse, output } from './app.js';

const select = document.getElementsByTagName('select')[0];

const showOutput = input => {
  parse(input);
  document.getElementsByTagName('div')[0].innerHTML = `
  <b>Object output:</b>
  <pre>${JSON.stringify(output.object)}</pre>
  <b>String output:</b>
  <pre>${output.string}</pre>
  `;
};

showOutput(select.value);

select.addEventListener('change', () => showOutput(select.value));
