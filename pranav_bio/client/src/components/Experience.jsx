import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {/* Experience 1 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass">
                            <span className="date">Jan 2024 – Jan 2025</span>
                            <h3>Data Analyst</h3>
                            <p className="company">QBay Career</p>
                            <ul className="experience-list">
                                <li>Learner performance & trend analysis</li>
                                <li>SQL + Python anomaly investigation</li>
                                <li>Automated ETL workflows (20% time saved)</li>
                                <li>Interactive dashboards (Power BI/Tableau)</li>
                                <li>Cross-team collaboration & data documentation</li>
                                <li>Mentored junior analysts</li>
                            </ul>
                        </div>
                    </div>
                    {/* Experience 2 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass">
                            <span className="date">Jun 2023 – Dec 2023</span>
                            <h3>Web App Developer Intern</h3>
                            <p className="company">Mentika</p>
                            <ul className="experience-list">
                                <li>Responsive web apps using FastAPI</li>
                                <li>Firebase integration</li>
                                <li>Bug fixing, performance optimization</li>
                                <li>Documentation and feature mapping</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
