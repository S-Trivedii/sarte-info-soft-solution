import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        formData
      );
      console.log("Sign up successful:", response.data);
    } catch (err) {
      console.error("Error registering user", err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={onChange}
          required
        />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
          required
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={onChange}
          required
        />
        <button type="submit">SignUp</button>
      </form>
      {/* <Link to="/create-user">SignUp</Link> */}
    </div>
  );
};

export default SignUp;
