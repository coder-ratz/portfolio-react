import React, { useState } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectShort from './ProjectShort';
import ProjectImg from './ProjectImg';
import Tags from './Tags';

const ProjectCard = ({  key, 
                        project,
                        handleOpenProjectDetails,
                        handleTagClick} 
                    ) => {
    const [imgIsLandscape, setImgIsLandscape] = useState(false);

    return (
        <div className='project-card' onDoubleClick={() => handleOpenProjectDetails(project.id)}>
            <ProjectTitle project={project} handleOpenProjectDetails={handleOpenProjectDetails} />
            <div className={imgIsLandscape ? 'img-box landscape' : 'img-container'}>
                <div className='img-content'>
                    <ProjectImg project={project} setIsLandscape={setImgIsLandscape} />
                </div>

                <div className='img-content'>
                    <ProjectShort project={project} />
                </div>
            </div>
            <div><Tags 
                tags={project.tags}
                clickable={true}
                handleTagClick={handleTagClick} /></div>
        </div>
    );
}

export default ProjectCard;