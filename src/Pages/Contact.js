import React, { useState } from 'react';
import { db } from '../config/firebase'; // Import Firebase Firestore
import { collection, addDoc } from 'firebase/firestore';
import "../styles/Contact.css"


const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document to the "contacts" collection in Firestore
      await addDoc(collection(db, 'contacts'), formData);
      console.log("doc added")
      setIsSubmitted(true);
      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    
    <div className="contact-form">
      {isSubmitted ? (
        <h3>Thank you for your message!</h3>
      ) : (
        <>
         
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="Subject"> Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
    
  );
};

export default Contact;
