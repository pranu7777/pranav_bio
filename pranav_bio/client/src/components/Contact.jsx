import React, { useState } from 'react';

import JSEncrypt from 'jsencrypt';
import { PUBLIC_KEY } from '../publicKey';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [useEncryption, setUseEncryption] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Processing...');

        let finalMessage = formData.message;

        if (useEncryption) {
            const encrypt = new JSEncrypt();
            encrypt.setPublicKey(PUBLIC_KEY);
            const encrypted = encrypt.encrypt(formData.message);
            if (!encrypted) {
                setStatus('Encryption failed. Message too long?');
                return;
            }
            finalMessage = `[ENCRYPTED]: ${encrypted}`;
        }

        // Since we don't have a live backend on GitHub Pages, we'll simulate sending
        // and log the result to console or alert the user.
        console.log("Sending Message:", { ...formData, message: finalMessage });

        // Simulate network delay
        setTimeout(() => {
            setStatus('Message "Sent" (Check Console for Output)');
            alert(`Message Sent! \n\n${useEncryption ? 'Encrypted Content:\n' + finalMessage : 'Content:\n' + finalMessage}\n\n(Note: Backend is offline on GitHub Pages, so this is a simulation. Copy the encrypted text if needed!)`);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 5000);
        }, 1000);
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
                            <a href="https://www.linkedin.com/in/pranav-mundakkal-829730191/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
                        </div>

                        <div className="form-group checkbox-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <input
                                type="checkbox"
                                id="encrypt"
                                checked={useEncryption}
                                onChange={(e) => setUseEncryption(e.target.checked)}
                                style={{ width: 'auto' }}
                            />
                            <label htmlFor="encrypt" style={{ marginBottom: 0, cursor: 'pointer' }}>Encrypt Message (RSA)</label>
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
