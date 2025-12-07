import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category glass">
                        <h3><i className="fas fa-code"></i> Programming & Data</h3>
                        <div className="skill-items">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">R</span>
                            <span className="skill-tag">SQL</span>
                            <span className="skill-tag">C</span>
                            <span className="skill-tag">HTML/CSS</span>
                            <span className="skill-tag">JavaScript</span>
                        </div>
                    </div>
                    <div className="skill-category glass">
                        <h3><i className="fas fa-robot"></i> Machine Learning</h3>
                        <div className="skill-items">
                            <span className="skill-tag">Scikit-learn</span>
                            <span className="skill-tag">XGBoost</span>
                            <span className="skill-tag">TensorFlow</span>
                            <span className="skill-tag">NLP</span>
                            <span className="skill-tag">Time-Series</span>
                        </div>
                    </div>
                    <div className="skill-category glass">
                        <h3><i className="fas fa-server"></i> Big Data</h3>
                        <div className="skill-items">
                            <span className="skill-tag">Apache Spark</span>
                            <span className="skill-tag">Hadoop</span>
                            <span className="skill-tag">Cassandra</span>
                        </div>
                    </div>
                    <div className="skill-category glass">
                        <h3><i className="fas fa-cloud"></i> Cloud</h3>
                        <div className="skill-items">
                            <span className="skill-tag">AWS</span>
                            <span className="skill-tag">Google Cloud</span>
                            <span className="skill-tag">Firebase</span>
                        </div>
                    </div>
                    <div className="skill-category glass">
                        <h3><i className="fas fa-chart-pie"></i> Visualization</h3>
                        <div className="skill-items">
                            <span className="skill-tag">Tableau</span>
                            <span className="skill-tag">Power BI</span>
                            <span className="skill-tag">Matplotlib</span>
                            <span className="skill-tag">Seaborn</span>
                        </div>
                    </div>
                    <div className="skill-category glass">
                        <h3><i className="fas fa-tools"></i> Tools</h3>
                        <div className="skill-items">
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">Docker</span>
                            <span className="skill-tag">VS Code</span>
                            <span className="skill-tag">Jupyter</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
