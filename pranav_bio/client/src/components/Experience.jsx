import React, { useState } from 'react';
import Modal from './Modal';

const Experience = () => {
    const [selectedExp, setSelectedExp] = useState(null);

    const experiences = [
        {
            title: "Data Analyst",
            company: "QBay Career",
            date: "Jan 2024 – Jan 2025",
            icon: "fa-chart-pie",
            details: [
                "Learner performance & trend analysis",
                "SQL + Python anomaly investigation",
                "Automated ETL workflows (20% time saved)",
                "Interactive dashboards (Power BI/Tableau)",
                "Cross-team collaboration & data documentation",
                "Mentored junior analysts"
            ]
        },
        {
            title: "Web App Developer Intern",
            company: "Mentika",
            date: "Jun 2023 – Dec 2023",
            icon: "fa-code",
            details: [
                "Responsive web apps using FastAPI",
                "Firebase integration",
                "Bug fixing, performance optimization",
                "Documentation and feature mapping"
            ]
        }
    ];

    const openModal = (exp) => {
        setSelectedExp(exp);
    };

    const closeModal = () => {
        setSelectedExp(null);
    };

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-grid">
                    {/* Render Icons Only */}
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-thumbnail glass" onClick={() => openModal(exp)}>
                            <div className="thumbnail-icon">
                                <i className={`fas ${exp.icon}`}></i>
                            </div>
                            <h3>{exp.title}</h3>
                            <p className="company-sm">{exp.company}</p>
                            <span className="date-sm">{exp.date}</span>
                            <button className="btn-details">View Role</button>
                        </div>
                    ))}
                </div>

                {/* Modal Component */}
                <Modal
                    isOpen={!!selectedExp}
                    onClose={closeModal}
                    title={selectedExp?.title}
                >
                    {selectedExp && (
                        <div>
                            <p className="modal-subtitle">{selectedExp.company} | <span className="modal-date">{selectedExp.date}</span></p>
                            <ul className="experience-list-modal">
                                {selectedExp.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
};

export default Experience;
