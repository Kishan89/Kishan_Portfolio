import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    terms: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/kishan895737@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "First Name": formData.firstName,
            "Last Name": formData.lastName,
            Email: formData.email,
            Phone: formData.phone,
            Topic: formData.topic,
            Message: formData.message,
          }),
        }
      );

      const result = await res.json();
      if (result.success === "true") {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          topic: "",
          message: "",
          terms: false,
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out for collaborations, project opportunities, or
          any queries.
        </p>
        <p>Let’s connect and create something impactful together!</p>
      </div>

      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            name="topic"
            className="contact--input text-md"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select One...</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Competitive Programming">
              Competitive Programming
            </option>
            <option value="React Native">React Native</option>
            <option value="Others">Others (write below)</option>
          </select>
        </label>

        <label className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            rows="8"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <label className="checkbox--label">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <span className="text-sm">I accept the terms</span>
        </label>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
        {status && <p style={{ marginTop: "10px" }}>{status}</p>}
      </form>
    </section>
  );
}
