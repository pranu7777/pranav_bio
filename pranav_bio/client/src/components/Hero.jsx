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
                </div>
        </section>
    );
};

export default Hero;
