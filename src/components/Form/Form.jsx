import React, { useState } from "react";
import supabase from "./path/to/supabase"; // Adjust the path based on your file structure

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("contacts")
        .insert([formData]);

      if (error) {
        console.error(error);
      } else {
        console.log("Contact form data inserted:", data);
        // Reset the form after successful submission
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          cols={50}
          placeholder="Type your message here..."
        />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
