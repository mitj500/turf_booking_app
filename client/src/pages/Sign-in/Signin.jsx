import React from "react";
import axios from "axios";
import Cookies from "js-cookie"; // Make sure to install js-cookie package
function signin() {
  const [email, Setemail] = React.useState("");
  const [password, Setpassword] = React.useState("");
  const [showPassword, SetshowPassword] = React.useState(false);

  function handleLogin(e) {
    axios
      .post("http://localhost:3000/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const type = response.data.user.role;
        const token = response.data.token; // Assuming the token is returned in the response
        Cookies.set("token", token); // Store the token in localStorage
        alert("User login successfully");
        if (type === "user") {
          window.location.href = "/user";
        } else if (type === "renter") {
          window.location.href = "/renter";
        }
      })
      .catch((error) => {
        console.error("Error login user:", error);
        alert(error.response.data.message);
      });
    e.preventDefault();

    // Here you would typically send the user data to your backend API for registration
  }

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => Setemail(e.target.value)}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="password"
        value={password}
        onChange={(e) => Setpassword(e.target.value)}
      />
      <button onClick={() => SetshowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      <button onClick={handleLogin}>Sign In</button>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default signin;
