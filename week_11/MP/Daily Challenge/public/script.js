document
  .getElementById("btnRegister")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    const form = document.forms["register"];
    const formData = new FormData(form);
    const response = await fetch("/users/register");
    const data = await response.json();
    document.getElementById("textMessage").value = data.message;
  });
