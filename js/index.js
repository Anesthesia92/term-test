const item = document.querySelector('.form');

const submitForm = (e) => {
    e.preventDefault();
    const dataItem = new FormData(item);
    const json = JSON.stringify(Object.fromEntries(dataItem.entries()));
    displayData(json);
};

function displayData(json) {
    const formDataElement = document.createElement('p');
    formDataElement.classList.add('link');
    formDataElement.textContent = json;
    item.insertAdjacentElement('beforeend', formDataElement);
}

item.addEventListener('submit', submitForm);

fetch('server.js')
    .then(response => {
        if (response.ok) {
            alert('response is resolve');
        }
    })
    .catch((err) => console.log(err));
