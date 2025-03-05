import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Code with Gemma",
            description: "This project introduces an AI-powered code compiler that provides real-time code compilation, error detection, and optimization recommendations. Developed using Python, Flask, HTML, and CSS, this compiler supports four major programming languages—Python, Java, C, and C++. It employs both online and offline AI models, Gemini and Ollama, for code analysis and suggestions.",
            image: "/assets/compiler.jpg",
            technologies: ["Python", "Flask", "Html" , "CSS"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Ashwithareddy12/code-with-Gemma.git"
        },
        // Add more projects following the same structure
        {
            title: "Portfolio website",
            description: "My Portfolio Website is a professionally designed platform that showcases my skills, projects, and experience as a software developer. It serves as a digital resume, highlighting my technical expertise, certifications, and achievements in a visually appealing and user-friendly manner.",
            image: "/assets/portfolio.jpg",
            technologies: ["React", "HTML", "javaScript" , "CSS"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Ashwithareddy12/My-Portfolio.git"
        },

        {
            title: "E-commerce website",
            description: "The E-Cart website is a full-stack e-commerce platform designed to provide a seamless shopping experience. It enables users to browse products, add them to a cart, and securely complete purchases.",
            image: "/assets/e-cart.jpg",
            technologies: ["Html", "CSS", "Javascript","MERN Full Stack"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Ashwithareddy12/E-cart.git"
        },

        {
            title: "Twitter Sentiment Analysis",
            description: "This project analyzes tweets to classify sentiments as positive, negative, or neutral using Natural Language Processing (NLP) techniques. It involves data collection via the Twitter API, text preprocessing, and applying machine learning models for sentiment classification.",
            image: "/assets/twitter.jpg",
            technologies: ["Python"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Ashwithareddy12/Twitter-Sentiment-analysis.git"
        },
    ];

    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;