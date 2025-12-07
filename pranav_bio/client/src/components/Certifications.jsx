import React from 'react';

const Certifications = () => {
    return (
        <section id="certifications" class="section">
            <div class="container">
                <h2 class="section-title">Certifications</h2>
                <div class="cert-grid">
                    <div class="cert-card glass">
                        <i class="fas fa-certificate cert-icon"></i>
                        <h3>Google Data Analytics</h3>
                        <span class="year">2025</span>
                    </div>
                    <div class="cert-card glass">
                        <i class="fas fa-certificate cert-icon"></i>
                        <h3>Udemy Data Analytics Bootcamp</h3>
                        <span class="year">2025</span>
                    </div>
                    <div class="cert-card glass">
                        <i class="fas fa-certificate cert-icon"></i>
                        <h3>Deloitte Data Analytics Simulation</h3>
                        <span class="year">2025</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
