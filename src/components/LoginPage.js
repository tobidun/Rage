import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Retrieve user data from local storage
    const savedUserData = JSON.parse(localStorage.getItem("user"));

    // Validate login data
    if (
      !savedUserData ||
      savedUserData.email !== loginData.email ||
      savedUserData.password !== loginData.password
    ) {
      alert("Invalid email or password");
      return;
    }
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
