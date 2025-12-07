import React from 'react';

const Projects = () => {
    return (
        <section id="projects" class="section projects-section">
            <div class="container">
                <h2 class="section-title">Projects</h2>
                <div class="projects-grid">
                    {/* Project 1 */}
                    <div class="project-card glass">
                        <div class="project-content">
                            <h3>Wind Turbine Anomaly Detection</h3>
                            <p class="tech-stack">XGBoost | SARIMAX | Python</p>
                            <p>XGBoost + SARIMAX pipeline for fault detection, engineered features, and automated validation.</p>
                            <div class="project-links">
                                <a href="https://github.com/pranu7777/wind_turbine_anomaly_detection" class="btn btn-sm"><i class="fab fa-github"></i> GitHub</a>
                                <a href="#" class="btn btn-sm btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div class="project-card glass">
                        <div class="project-content">
                            <h3>Social Media Web Application</h3>
                            <p class="tech-stack">FastAPI | Firebase | React</p>
                            <p>FastAPI + Firebase full-stack app with real-time sync and modular CRUD APIs.</p>
                            <div class="project-links">
                                <a href="https://github.com/pranu7777/Social-media-app" class="btn btn-sm"><i class="fab fa-github"></i> GitHub</a>
                                <a href="#" class="btn btn-sm btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div class="project-card glass">
                        <div class="project-content">
                            <h3>Logistics Dashboard</h3>
                            <p class="tech-stack">Tableau | SQL | Analytics</p>
                            <p>Tableau dashboards for shipment analysis, route performance, anomaly detection, KPI intelligence layers.</p>
                            <div class="project-links">
                                <a href="https://github.com/pranu7777/Dashboard-of-logistic-data" class="btn btn-sm"><i class="fab fa-github"></i> GitHub</a>
                                <a href="#" class="btn btn-sm btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    </div>
                    {/* Project 4 */}
                    <div class="project-card glass">
                        <div class="project-content">
                            <h3>Room Booking App</h3>
                            <p class="tech-stack">Firebase | FastAPI | Python | HTML | CSS</p>
                            <p>A full-stack application for managing room reservations. Functions include booking, deleting, and sharing rooms.</p>
                            <div class="project-links">
                                <a href="https://github.com/pranu7777/Room-booking-app" class="btn btn-sm"><i class="fab fa-github"></i> GitHub</a>
                                <a href="#" class="btn btn-sm btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    </div>
                    {/* Project 5 */}
                    <div class="project-card glass">
                        <div class="project-content">
                            <h3>Car Selling App</h3>
                            <p class="tech-stack">Firebase | FastAPI | Python | HTML | CSS</p>
                            <p>A marketplace platform for buying and selling cars. Users can list vehicles, browse inventory, and compare different models side-by-side.</p>
                            <div class="project-links">
                                <a href="https://github.com/pranu7777/car-selling-app" class="btn btn-sm"><i class="fab fa-github"></i> GitHub</a>
                                <a href="#" class="btn btn-sm btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    </div>
                    {/* Project 6 */}
                    <div class="project-card glass">
                        <div class="project-content">
                            <h3>Virtual Mouse Hand Gesture</h3>
                            <p class="tech-stack">OpenCV | MediaPipe | Python</p>
                            <p>A computer vision application that controls the mouse cursor using hand gestures. Enables touch-free interaction and can even be used for gaming.</p>
                            <div class="project-links">
                                <a href="https://github.com/pranu7777/virtual-mouse-using-hand-gesture" class="btn btn-sm"><i class="fab fa-github"></i> GitHub</a>
                                <a href="#" class="btn btn-sm btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
