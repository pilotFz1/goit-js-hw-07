const refs = {
createBtn: document.querySelector('#controls button[data-action="render"]'),
destroyBtn: document.querySelector('#controls button[data-action="destroy"]'),
input: document.querySelector('#controls input'),
root: document.querySelector('#boxes'),

}
const {createBtn, destroyBtn, input, root } = refs

const randomRgbColor = () => {
 const r = Math.round(Math.random()*256)
 const g = Math.round(Math.random()*256)
 const b = Math.round(Math.random()*256)

 return `rgb(${r},${g},${b})`

}

const INSTIAL_SIZE = 30
const STEP = 10

createBtn.addEventListener('click',() => handleCreate(+input.value))
destroyBtn.addEventListener('click', handleDestroy)

function handleCreate (amount) {
 const boxes = [...new Array(amount)]
 const arrBoxes = boxes.map((_,i) => createBox(i)).join('')
 root.insertAdjacentHTML('beforeend',arrBoxes)
}

function createBox(i) {
const size = `${i*STEP + INSTIAL_SIZE }px`
return `<div style = "width: ${size}; height:${size}; background-color:${randomRgbColor()}"></div>`
}

function handleDestroy() {
    root.innerHTML = ''
    input.value = ''
}