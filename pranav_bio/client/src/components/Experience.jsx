import React from 'react';

const Experience = () => {
    return (
        <section id="experience" class="section experience-section">
            <div class="container">
                <h2 class="section-title">Experience</h2>
                <div class="timeline">
                    {/* Experience 1 */}
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content glass">
                            <span class="date">Jan 2024 – Jan 2025</span>
                            <h3>Data Analyst</h3>
                            <p class="company">QBay Career</p>
                            <ul class="experience-list">
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
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content glass">
                            <span class="date">Jun 2023 – Dec 2023</span>
                            <h3>Web App Developer Intern</h3>
                            <p class="company">Mentika</p>
                            <ul class="experience-list">
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
