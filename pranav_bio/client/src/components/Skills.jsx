import React from 'react';

const Skills = () => {
    return (
        <section id="skills" class="section skills-section">
            <div class="container">
                <h2 class="section-title">Skills</h2>
                <div class="skills-grid">
                    <div class="skill-category glass">
                        <h3><i class="fas fa-code"></i> Programming & Data</h3>
                        <div class="skill-items">
                            <span class="skill-tag">Python</span>
                            <span class="skill-tag">R</span>
                            <span class="skill-tag">SQL</span>
                            <span class="skill-tag">C</span>
                            <span class="skill-tag">HTML/CSS</span>
                            <span class="skill-tag">JavaScript</span>
                        </div>
                    </div>
                    <div class="skill-category glass">
                        <h3><i class="fas fa-robot"></i> Machine Learning</h3>
                        <div class="skill-items">
                            <span class="skill-tag">Scikit-learn</span>
                            <span class="skill-tag">XGBoost</span>
                            <span class="skill-tag">TensorFlow</span>
                            <span class="skill-tag">NLP</span>
                            <span class="skill-tag">Time-Series</span>
                        </div>
                    </div>
                    <div class="skill-category glass">
                        <h3><i class="fas fa-server"></i> Big Data</h3>
                        <div class="skill-items">
                            <span class="skill-tag">Apache Spark</span>
                            <span class="skill-tag">Hadoop</span>
                            <span class="skill-tag">Cassandra</span>
                        </div>
                    </div>
                    <div class="skill-category glass">
                        <h3><i class="fas fa-cloud"></i> Cloud</h3>
                        <div class="skill-items">
                            <span class="skill-tag">AWS</span>
                            <span class="skill-tag">Google Cloud</span>
                            <span class="skill-tag">Firebase</span>
                        </div>
                    </div>
                    <div class="skill-category glass">
                        <h3><i class="fas fa-chart-pie"></i> Visualization</h3>
                        <div class="skill-items">
                            <span class="skill-tag">Tableau</span>
                            <span class="skill-tag">Power BI</span>
                            <span class="skill-tag">Matplotlib</span>
                            <span class="skill-tag">Seaborn</span>
                        </div>
                    </div>
                    <div class="skill-category glass">
                        <h3><i class="fas fa-tools"></i> Tools</h3>
                        <div class="skill-items">
                            <span class="skill-tag">Git</span>
                            <span class="skill-tag">Docker</span>
                            <span class="skill-tag">VS Code</span>
                            <span class="skill-tag">Jupyter</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
