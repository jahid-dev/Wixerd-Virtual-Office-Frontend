import YourStatus from "../../Shared/YourStatus/YourStatus";


const ProjectItem = ({ title, imageSrc }) => {
    return (
        <span className="mb-3 mr-2"> 
            <div className="flex flex-col">
                <p>{title}</p>
            </div>
            <div className="mx-auto">
                <img className="w-72 h-44 rounded-md shadow-sm" src={imageSrc} alt="" />
            </div>
        </span>
    );
};

const OnGoingProjects = () => {
    const defaultImageUrl = "https://i.ibb.co/23vqMnr/collage-customer-experience-concept-23-2149367132.jpg";
    return (
        <div className="flex">
            <div className="flex-grow">
            <h2 className="text-xl font-bold">On-going Project overviews</h2>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="Clients comment" imageSrc={defaultImageUrl} />
                <ProjectItem title="Senior Comment" imageSrc={defaultImageUrl} />
                <ProjectItem title="General rules for project creation" imageSrc={defaultImageUrl} />
            </div>

            <h2 className="text-xl font-bold">Project name</h2>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="project overview" imageSrc={defaultImageUrl} />
                <ProjectItem title="Assets" imageSrc={defaultImageUrl} />
                <ProjectItem title="Documentation" imageSrc={defaultImageUrl} />
            </div>
            <h2 className="text-xl font-bold">Project name</h2>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="project overview" imageSrc={defaultImageUrl} />
                <ProjectItem title="Assets" imageSrc={defaultImageUrl} />
                <ProjectItem title="Documentation" imageSrc={defaultImageUrl} />
            </div>
            <h2 className="text-xl font-bold">Project name</h2>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="project overview" imageSrc={defaultImageUrl} />
                <ProjectItem title="Assets" imageSrc={defaultImageUrl} />
                <ProjectItem title="Documentation" imageSrc={defaultImageUrl} />
            </div>
            <h2 className="text-xl font-bold">Project name</h2>
            <div className="grid grid-cols-3 gap-2 py-3">
                <ProjectItem title="project overview" imageSrc={defaultImageUrl} />
                <ProjectItem title="Assets" imageSrc={defaultImageUrl} />
                <ProjectItem title="Documentation" imageSrc={defaultImageUrl} />
            </div>
            </div>
            <div className="w-1/4 pl-4">
                <YourStatus />
            </div>
        </div>
    );
};

export default OnGoingProjects;