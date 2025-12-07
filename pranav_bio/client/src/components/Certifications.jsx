import React from 'react';

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="cert-grid">
                    <div className="cert-card glass">
                        <i className="fas fa-certificate cert-icon"></i>
                        <h3>Google Data Analytics</h3>
                        <span className="year">2025</span>
                    </div>
                    <div className="cert-card glass">
                        <i className="fas fa-certificate cert-icon"></i>
                        <h3>Udemy Data Analytics Bootcamp</h3>
                        <span className="year">2025</span>
                    </div>
                    <div className="cert-card glass">
                        <i className="fas fa-certificate cert-icon"></i>
                        <h3>Deloitte Data Analytics Simulation</h3>
                        <span className="year">2025</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
