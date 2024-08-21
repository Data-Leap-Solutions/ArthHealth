import React, { useState } from 'react';
import './Contact.css'; // Ensure you have a CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const { firstName, lastName, email, message } = formData;

    return (
        <div id="contact" className="container">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Arth Physical</h2>
                    <p>
                        Excited to explore health and recovery? Share some details,
                        and we will connect with you soon. Eagerly looking forward to
                        your message!
                    </p>
                    <div className="contact-details">
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                        <p><strong>Fax:</strong> (123) 456-7891</p>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">Name <span className="required"></span></label>
                        <div className="name-fields">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span className="required"></span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message <span className="required"></span></label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="contact-button">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
