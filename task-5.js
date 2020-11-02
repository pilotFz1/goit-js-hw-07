const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};
const { input, span } = refs;
const defaultName = 'незнакомец';

input.addEventListener('input', handleChangeInput)

function handleChangeInput({ target }) {
  const value = target.value

  span.textContent = value ? value : defaultName
}
