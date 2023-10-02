const form = document.forms[0];
console.log(form);


console.log(form.fname, form.lname);


console.log(form.firstname, form.lastname);


form.addEventListener("submit", e => {
    e.preventDefault();
    let name_value = form.fname.value;
    let last_name_value = form.lname.value;


    if (name_value && last_name_value) { 
        const name_li = document.createElement("li");
        const lastname_li = document.createElement("li");
        name_li.innerText = `${name_value}`;
        lastname_li.innerText = `${last_name_value}`;
        const ul = document.querySelector("ul.usersAnswer"); 
        ul.append(name_li, lastname_li);
        form.fname.value = "";
        form.lname.value = "";
    }
});



