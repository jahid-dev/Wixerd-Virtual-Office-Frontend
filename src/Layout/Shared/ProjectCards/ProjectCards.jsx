import React from 'react';

const ProjectCards = ({ BigTitle, projectTitle, projectImg }) => {
    return (
        <div className='mb-7'>
            <p className='text-xl font-semibold mt-2 mb-3'>{projectTitle}</p>
            <img className='w-[18vw] rounded-xl' src={projectImg} alt="" />
        </div>
    );
};

export default ProjectCards;