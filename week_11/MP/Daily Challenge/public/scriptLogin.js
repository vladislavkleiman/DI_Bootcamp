const username = document.getElementById("usernameLogin");
const password = document.getElementById("passwordLogin");

document
  .getElementById("formLogin")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const myData = {
      username: username.value,
      password: password.value,
    };
    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    });
    const data = await response.json();
    document.getElementById("textMessage1").value = data.message;
  });
