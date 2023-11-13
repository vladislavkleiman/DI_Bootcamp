import React from "react";
import "../../styles/Login.css";

const LoginComponent = () => {
  return (
    <div className="mainLogin">
      <form className="formLogin" name="formLogin">
        <label className="username" for="username">
          Username:
        </label>
        <input type="text" className="inputUsername" name="username" />
        <label className="password" for="password">
          Password:
        </label>
        <input type="text" className="inputPassword" name="password" />
        <button className="login">Login</button>
        <button className="register">Register</button>
      </form>
    </div>
  );
};

export default LoginComponent;
