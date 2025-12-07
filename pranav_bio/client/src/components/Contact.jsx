import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error sending message.');
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container glass">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out for collaborations or just a friendly hello.</p>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>mundakkalpranav979@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+353 89 226 2078</span>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/pranu7777" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {status || 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
