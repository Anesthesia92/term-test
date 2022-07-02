const item = document.querySelector('.form');

const submitForm = (e) => {
    e.preventDefault();
    const dataItem = new FormData(item);
    const json = JSON.stringify(Object.fromEntries(dataItem.entries()));
    displayData(json);
};

function displayData(json) {
    const formElement = document.createElement('p');
    formElement.classList.add('json');
    formElement.textContent = json;
    item.insertAdjacentElement('beforeEnd', formElement);
}

item.addEventListener('submit', submitForm);

fetch('/js/server.js')
    .then(response => {
        if (response.ok) {
            alert('response is ok');
        }
    })
    .catch((err) => console.log(err));
