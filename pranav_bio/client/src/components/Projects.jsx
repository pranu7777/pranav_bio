import React, { useState } from 'react';
import Modal from './Modal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Wind Turbine Anomaly Detection",
            icon: "fa-fan",
            tech: "XGBoost | SARIMAX | Python",
            desc: "XGBoost + SARIMAX pipeline for fault detection, engineered features, and automated validation.",
            github: "https://github.com/pranu7777/wind_turbine_anomaly_detection",
            demo: "#"
        },
        {
            title: "Social Media Web Application",
            icon: "fa-users",
            tech: "FastAPI | Firebase | React",
            desc: "FastAPI + Firebase full-stack app with real-time sync and modular CRUD APIs.",
            github: "https://github.com/pranu7777/Social-media-app",
            demo: "#"
        },
        {
            title: "Logistics Dashboard",
            icon: "fa-chart-line",
            tech: "Tableau | SQL | Analytics",
            desc: "Tableau dashboards for shipment analysis, route performance, anomaly detection, KPI intelligence layers.",
            github: "https://github.com/pranu7777/Dashboard-of-logistic-data",
            demo: "#"
        },
        {
            title: "Room Booking App",
            icon: "fa-door-open",
            tech: "Firebase | FastAPI | Python",
            desc: "A full-stack application for managing room reservations. Functions include booking, deleting, and sharing rooms.",
            github: "https://github.com/pranu7777/Room-booking-app",
            demo: "#"
        },
        {
            title: "Car Selling App",
            icon: "fa-car",
            tech: "Firebase | FastAPI | Python",
            desc: "A marketplace platform for buying and selling cars. Users can list vehicles, browse inventory, and compare different models side-by-side.",
            github: "https://github.com/pranu7777/car-selling-app",
            demo: "#"
        },
        {
            title: "Virtual Mouse Hand Gesture",
            icon: "fa-mouse",
            tech: "OpenCV | MediaPipe | Python",
            desc: "A computer vision application that controls the mouse cursor using hand gestures. Enables touch-free interaction and can even be used for gaming.",
            github: "https://github.com/pranu7777/virtual-mouse-using-hand-gesture",
            demo: "#"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {/* Render Icons Only */}
                    {projects.map((project, index) => (
                        <div key={index} className="project-thumbnail glass" onClick={() => openModal(project)}>
                            <div className="thumbnail-icon">
                                <i className={`fas ${project.icon}`}></i>
                            </div>
                            <h3>{project.title}</h3>
                            <button className="btn-details">View Details</button>
                        </div>
                    ))}
                </div>

                {/* Modal Component */}
                <Modal
                    isOpen={!!selectedProject}
                    onClose={closeModal}
                    title={selectedProject?.title}
                >
                    {selectedProject && (
                        <div>
                            <p className="tech-stack">{selectedProject.tech}</p>
                            <p className="modal-desc">{selectedProject.desc}</p>
                            <div className="project-links">
                                <a href={selectedProject.github} className="btn btn-sm" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                                <a href={selectedProject.demo} className="btn btn-sm btn-outline"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
};

export default Projects;
