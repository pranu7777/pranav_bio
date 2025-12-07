import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="name">Pranav Mundakkal</h1>
                    <h2 className="role">Data Analyst <span className="divider">|</span> ML Engineer <span className="divider">|</span>
                        Big Data Specialist</h2>
                    <p className="tagline">Transforming complex datasets into actionable insights.</p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="assets/resume.pdf" className="btn btn-outline" download>Download Resume <i
                            className="fas fa-download"></i></a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-container">
                        <img src="assets/profile.jpg" alt="Pranav Mundakkal"
                            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Pranav+Mundakkal&background=random&size=350'; }} />
                    </div>
                    <div className="blob"></div>
                </div>
            </div>
            <div className="scroll-down">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
