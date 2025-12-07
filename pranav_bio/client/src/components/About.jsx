import React from 'react';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-card glass">
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
                    <div className="about-stats">
                        <div className="stat-card glass">
                            <i className="fas fa-brain"></i>
                            <span>Machine Learning</span>
                        </div>
                        <div className="stat-card glass">
                            <i className="fas fa-database"></i>
                            <span>Big Data</span>
                        </div>
                        <div className="stat-card glass">
                            <i className="fas fa-chart-line"></i>
                            <span>Analytics</span>
                        </div>
                        <div className="stat-card glass">
                            <i className="fas fa-cloud"></i>
                            <span>Cloud</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
