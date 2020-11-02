const inputRef = document.querySelector("#validation-input")

const dataLength = +inputRef.dataset.length

inputRef.addEventListener('blur', handleBlurInput)

function handleBlurInput({ currentTarget }) {
  const currentValueLength = currentTarget.value.length;

  currentValueLength === dataLength
    ? (inputRef.classList.add("valid"), inputRef.classList.remove("invalid"))
    : (inputRef.classList.add("invalid"), inputRef.classList.remove("valid"));
}
