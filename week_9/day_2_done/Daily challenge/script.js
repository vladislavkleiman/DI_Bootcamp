document.getElementById('info').addEventListener('submit', getData)

function getData(e){
    e.preventDefault();
    let formData = new FormData(document.getElementById('info'));
    console.log(formData);
    console.log(Object.fromEntries(formData));
    let jsonFormData = JSON.stringify(Object.fromEntries(formData),null,2)
    console.log(jsonFormData);
}