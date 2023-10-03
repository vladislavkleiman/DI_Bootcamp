const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameLogin = document.getElementById("usernameLogin");
const passwordLogin = document.getElementById("passwordLogin");

document
  .getElementById("formInfo")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const myData = {
      username: username.value,
      password: password.value,
    };
    const response = await fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    });
    const data = await response.json();
    document.getElementById("textMessage").value = data.message;
  });
