import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [hasAccount, setHasAccount] = useState(false);

  const navigate = useNavigate();

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Validate signup data
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(signupData);
    // Save signup data to local storage
    localStorage.setItem("user", JSON.stringify(signupData));
    navigate("/login");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const toggleHasAccount = () => {
    setHasAccount(!hasAccount); // Toggle the value of hasAccount
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignupSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={signupData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" onClick={toggleHasAccount}>
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
