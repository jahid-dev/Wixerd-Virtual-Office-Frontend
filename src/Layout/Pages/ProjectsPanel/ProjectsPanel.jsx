
const ProjectItem = ({ title, imageSrc }) => {
    return (
        <span className="mb-3 mr-2"> 
            <div className="flex flex-col">
                <p>{title}</p>
            </div>
            <div className="grid justify-center">
                <img className="w-72 h-44 rounded-md shadow-sm" src={imageSrc} alt="" />
            </div>
        </span>
    );
};

const ProjectsPanel = () => {
    const defaultImageUrl = "https://i.ibb.co/23vqMnr/collage-customer-experience-concept-23-2149367132.jpg";
    return (
        <div>
            <h2 className="text-xl font-bold">Overview Updates</h2>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="Update from management" imageSrc={defaultImageUrl} />
                <ProjectItem title="News & Events" imageSrc={defaultImageUrl} />
                <ProjectItem title="List Projects by you" imageSrc={defaultImageUrl} />
            </div>

            <h2 className="text-xl font-bold">On-going Project overviews</h2>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="Clients comment" imageSrc={defaultImageUrl} />
                <ProjectItem title="Senior Comment" imageSrc={defaultImageUrl} />
                <ProjectItem title="General rules for project creation" imageSrc={defaultImageUrl} />
            </div>

            <h2 className="text-xl font-bold">Asset & Collaboration</h2>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="Graphic assets" imageSrc={defaultImageUrl} />
                <ProjectItem title="Documentation" imageSrc={defaultImageUrl} />
                <ProjectItem title="Collaboration requests" imageSrc={defaultImageUrl} />
            </div>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="Coding assets" imageSrc={defaultImageUrl} />
                <ProjectItem title="Tips" imageSrc={defaultImageUrl} />
                <ProjectItem title="Collaboration with" imageSrc={defaultImageUrl} />
            </div>

            <h2 className="text-xl font-bold">Upcoming Projects</h2>
            <div className="grid grid-cols-3 py-3">
                <div className="col-span-3 bg-blue-500 flex justify-center items-center h-44 rounded-md">
                    Upcoming Projects Box
                </div>
            </div>
        </div>
    );
};

export default ProjectsPanel;
