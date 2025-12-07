import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav class={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div class="container nav-content">
                <a href="#" class="logo">PM<span class="dot">.</span></a>
                <ul class={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                    <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    <li>
                        <button id="theme-toggle" aria-label="Toggle Dark Mode" onClick={toggleTheme}>
                            <i class={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                    </li>
                </ul>
                <div class="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <i class={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
