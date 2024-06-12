import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tags from './Tags.jsx';
const { mySkills } = require('../model/data.js');

const Introduction = () => {
    const navigate = useNavigate();

    const handleTagClick = (tag) => {
        // Update the URL
        navigate(`/tags/${tag}`);
    }

    return (
        <div className='detail'>
            <h1>Introduction</h1>

            <h2>My Mission</h2>
            <div className='project-card mission'>
                <div className="image-container content">
                    <img className="image profile" width="50px" src="/portfolio-react/assets/img/profile.jpg" alt="My profile in ACSII art" />
                </div>
                <div className='content'>
                    I am an engineering team leader embracing diversity and interdiscidivinary. I solve complex problems using engineering skills, processes, team development or software. 
                </div>
            </div>

            <h2>Skills and Experiences</h2>
            <div className='project-card mission nowrap'>
                <div className='content'>
                    Click on a skill to see the projects I have worked on:

                </div>
                <Tags
                tags={mySkills}
                clickable={true}
                handleTagClick={handleTagClick}
            />

            </div>

            <h2>Projects</h2>
            <div>
                <p>
                    <center>
                        <div
                            className='button'
                            onClick={() => navigate('/projects/')}>
                            Click here for an overview of my projects.
                        </div>


                    </center>
                </p>
            </div>

            <h2>Contact</h2>
            <div>
                <p>
                    <center>
                        <div
                            className='button'
                            onClick={() => navigate('/contact/')}>
                            Click here to get in touch with me.
                        </div>
                    </center>
                </p>
            </div>

        </div>
    );
};

export default Introduction;

