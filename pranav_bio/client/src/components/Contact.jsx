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
        <section id="contact" class="section contact-section">
            <div class="container">
                <h2 class="section-title">Get In Touch</h2>
                <div class="contact-container glass">
                    <div class="contact-info">
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out for collaborations or just a friendly hello.</p>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>mundakkalpranav979@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+353 89 226 2078</span>
                        </div>
                        <div class="social-links">
                            <a href="https://github.com/pranu7777" target="_blank"><i class="fab fa-github"></i></a>
                            <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <form class="contact-form" onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            {status || 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
