const block = document.querySelector('.block-1');
const blockL = document.querySelector('.block-2');
const blockC = document.querySelector('.block-3');
const btnW = document.querySelector('.warning');
const btnS = document.querySelector('.btn-success');

btnW.addEventListener('click', () => {
    block.classList.toggle("close");
})

btnS.addEventListener('click', () => {
    blockL.classList.toggle("change");
    blockC.classList.toggle("change");
})
