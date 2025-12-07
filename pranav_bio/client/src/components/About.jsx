import React from 'react';

const About = () => {
    return (
        <section id="about" class="section about-section">
            <div class="container">
                <h2 class="section-title">About Me</h2>
                <div class="about-grid">
                    <div class="about-card glass">
                        <h3>Background</h3>
                        <p>
                            I hold an <strong>MSc in Big Data Management & Analytics</strong> from Griffith College Dublin
                            and a <strong>BTech in Computer Science Engineering</strong> from Sahrdaya College, India.
                        </p>
                        <p>
                            I am a results-driven data professional with experience in data pipelines, machine learning, ETL
                            automation, statistical analysis, BI dashboards, cloud platforms, and anomaly detection. My
                            passion lies in solving complex problems to improve business outcomes.
                        </p>
                    </div>
                    <div class="about-stats">
                        <div class="stat-card glass">
                            <i class="fas fa-brain"></i>
                            <span>Machine Learning</span>
                        </div>
                        <div class="stat-card glass">
                            <i class="fas fa-database"></i>
                            <span>Big Data</span>
                        </div>
                        <div class="stat-card glass">
                            <i class="fas fa-chart-line"></i>
                            <span>Analytics</span>
                        </div>
                        <div class="stat-card glass">
                            <i class="fas fa-cloud"></i>
                            <span>Cloud</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
