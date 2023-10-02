const input = document.forms[0].input;

let inputValue = "";

input.addEventListener("input", e => {
    e.preventDefault();

    if (e.target.value.match(/^[A-Za-z]+$/)) {
        inputValue = e.target.value;
    } else {
        e.target.value = inputValue;
    }
});