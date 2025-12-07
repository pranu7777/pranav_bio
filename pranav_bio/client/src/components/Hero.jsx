import React from 'react';

const Hero = () => {
    return (
        <section id="hero" class="hero">
            <div class="container hero-content">
                <div class="hero-text">
                    <p class="greeting">Hello, I'm</p>
                    <h1 class="name">Pranav Mundakkal</h1>
                    <h2 class="role">Data Analyst <span class="divider">|</span> ML Engineer <span class="divider">|</span>
                        Big Data Specialist</h2>
                    <p class="tagline">Transforming complex datasets into actionable insights.</p>
                    <div class="cta-buttons">
                        <a href="#projects" class="btn btn-primary">View Projects</a>
                        <a href="/assets/resume.pdf" class="btn btn-outline" download>Download Resume <i
                            class="fas fa-download"></i></a>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="hero-image-container">
                        <img src="/assets/profile.jpg" alt="Pranav Mundakkal"
                            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Pranav+Mundakkal&background=random&size=350'; }} />
                    </div>
                    <div class="blob"></div>
                </div>
            </div>
            <div class="scroll-down">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
