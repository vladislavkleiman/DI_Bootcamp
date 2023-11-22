import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Create an instance of useNavigate

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/profitdiary/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      if (data.userId) {
        localStorage.setItem("userId", data.userId);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="mainLogin">
      <form className="formLogin" name="formLogin" onSubmit={handleLogin}>
        <label className="username" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          className="inputUsername"
          name="username"
          onChange={handleInputChange}
        />
        <label className="password" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          className="inputPassword"
          name="password"
          onChange={handleInputChange}
        />
        <button type="submit" className="login">
          Login
        </button>

        <button className="register">Register</button>
      </form>
    </div>
  );
};

export default LoginComponent;
