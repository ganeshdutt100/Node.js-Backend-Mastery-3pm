import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/saveUser",
        formData,
      );
      alert("DataSaved in MongoDB");
      setFormData({ name: "", email: "" });
    } catch (err) {
      console.log("Error:", err);
      alert("Error");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name "
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <button type="submit">save to db</button>
      </form>
    </div>
  );
};

export default Form;
