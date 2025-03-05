import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';  // For LeetCode icon
import './Home.css';

const Home = () => {
    const handleResumeDownload = () => {
        const resumeUrl = '/assets/Ashwitha_resume.pdf';
        window.open(resumeUrl, '_blank');
    };

    return (
        <div className="home-container">
            <div className="content-wrapper">
                <div className="text-content">
                    <motion.h3 
                        className="greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Hello, It's Me
                    </motion.h3>
                    
                    <motion.h1 
                        className="name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Ashwitha Antakala
                    </motion.h1>
                    
                    <motion.h2 
                        className="role"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="highlight">
                            Aspiring Software Engineer | AI & ML Enthusiast 
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        className="description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                       I love turning ideas into impactful, real-world solutions—whether it's creating seamless digital experiences, optimizing performance, or building scalable applications. Adaptability and continuous learning drive me, allowing me to quickly grasp new concepts and thrive in any environment.
                       With a passion for innovation and problem-solving, I embrace challenges and explore new possibilities.


                        <br /><br />
                        Explore my projects, dive into my work, and let's build something amazing together!
                    </motion.p>

                    <motion.div 
                        className="social-links"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="https://github.com/Ashwithareddy12" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="social-icon"
                        >
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/ashwitha-antakala-028555252/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="social-icon"
                        >
                            <FaLinkedinIn />
                        </a>
                        
                        <a href="https://leetcode.com/u/ashwithareddy12/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="social-icon"
                        >
                            <SiLeetcode />
                        </a>
                        
                    </motion.div>

                    <motion.button 
                        className="download-cv"
                        onClick={handleResumeDownload}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.button>
                </div>

                <motion.div 
                    className="profile-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="profile-image">
                        <img 
                            src="/assets/profile.jpg"
                            alt="Ashwitha Antakala"
                            loading="eager"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;

