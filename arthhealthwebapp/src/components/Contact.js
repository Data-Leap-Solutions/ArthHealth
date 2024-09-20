import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setIsSubmitted(false);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be 10 digits";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: ''
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
            setIsSubmitted(false);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => setIsSubmitted(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    const { firstName, lastName, email, phoneNumber, message } = formData;

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
                {isSubmitted && <div className="alert-banner">Sent!</div>}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">Name <span className="required-asterisk">*</span></label>
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
                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={handleChange}
                                required
                            />
                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span className="required-asterisk">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number <span className="required-asterisk">*</span></label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message <span className="required-asterisk">*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={handleChange}
                            required
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit" className="contact-button">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
