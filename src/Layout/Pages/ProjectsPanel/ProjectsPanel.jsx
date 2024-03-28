import React from 'react';
import ProjectCards from '../../Shared/ProjectCards/ProjectCards';
import YourStatus from '../../Shared/YourStatus/YourStatus';


const UpperTitle = ({ text }) => {
    return (
        <h2 className='text-2xl font-bold'>{text}</h2>
    )
}
const AssetItem = ({ name, imageUrl }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={imageUrl} alt={name} className="w-20 h-28" />
            <p className="mt-2 text-center">{name}</p>
        </div>
    );
};


const ProjectsPanel = () => {
    const img = "https://i.ibb.co/23vqMnr/collage-customer-experience-concept-23-2149367132.jpg"
    const assets = [
        { id: 1, name: 'Icons', imageUrl: 'https://i.ibb.co/9TknXYR/image.png' },
        { id: 2, name: 'Images', imageUrl: 'https://i.ibb.co/9TknXYR/image.png' },
        { id: 3, name: 'Sound Tracks', imageUrl: 'https://i.ibb.co/9TknXYR/image.png' },
        { id: 4, name: 'Videos', imageUrl: 'https://i.ibb.co/9TknXYR/image.png' },
        { id: 5, name: 'Illustrations', imageUrl: 'https://i.ibb.co/9TknXYR/image.png' },
        { id: 6, name: 'Animations', imageUrl: 'https://i.ibb.co/9TknXYR/image.png' },
        { id: 7, name: 'Scripts', imageUrl: 'https://i.ibb.co/9TknXYR/image.png' },
        { id: 8, name: 'Simulation Data', imageUrl: 'https://i.ibb.co/9TknXYR/image.png' },
    ];
    return (
        <div className='flex gap-x-5 justify-between w-full '>
            {/* concent div */}
            <div className='w-3/4 '>
                {/* overview updates part starts */}
                <UpperTitle text={"Overview Updates"}></UpperTitle>
                <div className='flex gap-x-10'>
                    <ProjectCards projectImg={img} projectTitle={"Update from management"}></ProjectCards>
                    <ProjectCards projectImg={img} projectTitle={"News & Events"}></ProjectCards>
                    <ProjectCards projectImg={img} projectTitle={"List Projects by you"}></ProjectCards>
                </div>
                {/* overview updates part ends */}

                {/* Ongoin project overview updates */}
                <UpperTitle text={"On-going project overview"}></UpperTitle>
                <div className='flex gap-x-10'>
                    <ProjectCards projectImg={img} projectTitle={"Clients Comments"}></ProjectCards>
                    <ProjectCards projectImg={img} projectTitle={"Senior Comments"}></ProjectCards>
                    <ProjectCards projectImg={img} projectTitle={"General Rules for project creation"}></ProjectCards>
                </div>

                {/* Assest and collaboration */}
                <UpperTitle text={"Asset & Collaboration"}></UpperTitle>
                <div className='flex gap-x-10'>
                    <ProjectCards projectImg={img} projectTitle={"Graphic Assets"}></ProjectCards>
                    <ProjectCards projectImg={img} projectTitle={"Documentation"}></ProjectCards>
                    <ProjectCards projectImg={img} projectTitle={"Collaboration requests"}></ProjectCards>
                </div>
                <div className='flex gap-x-10'>
                    <ProjectCards projectImg={img} projectTitle={"Coding assests"}></ProjectCards>
                    <ProjectCards projectImg={img} projectTitle={"Tips"}></ProjectCards>
                    <ProjectCards projectImg={img} projectTitle={"Collaboration with"}></ProjectCards>
                </div>
                <UpperTitle text={"Upcoming Projects"}></UpperTitle>
                <div className='bg-slate-300 flex items-center  justify-around w-full my-3 rounded-xl h-48'>
                    {assets.map(asset => (
                        <AssetItem key={asset.id} name={asset.name} imageUrl={asset.imageUrl} />
                    ))}
                </div>
            </div>
            {/* concent div ends*/}
            {/* your status div */}
            <div className='w-1/4'>
                <YourStatus></YourStatus>
            </div>

        </div>
    );
};

export default ProjectsPanel;