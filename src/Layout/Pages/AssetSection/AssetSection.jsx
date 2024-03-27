import PropTypes from 'prop-types';
import YourStatus from '../../Shared/YourStatus/YourStatus';

const ProjectItem = ({ title, imageSrc }) => {
    return (
        <div className="mb-3 mr-2">
            <div className="flex flex-col">
                <p>{title}</p>
            </div>
            <div className="flex justify-center">
                <img className="w-72 h-44 rounded-md shadow-sm" src={imageSrc} alt={title} />
            </div>
        </div>
    );
};

const AssetItem = ({ name, imageUrl }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={imageUrl} alt={name} className="w-20 h-28" />
            <p className="mt-2 text-center">{name}</p>
        </div>
    );
};

const AssetSection = () => {
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

    const defaultImageUrl = "https://i.ibb.co/23vqMnr/collage-customer-experience-concept-23-2149367132.jpg";

    return (
        <div className='flex'> 
            <div className='flex-grow'>
                <h2 className="text-2xl font-bold mb-4">Assets Library</h2>
                <div className="grid grid-cols-8 gap-4">
                    {assets.map(asset => (
                        <AssetItem key={asset.id} name={asset.name} imageUrl={asset.imageUrl} />
                    ))}
                </div>
                <div className="flex">
                    <div className="flex-grow">
                        <h2 className="text-xl font-bold mt-3">Requested Assets</h2>
                        <div className="flex gap-2 py-3">
                            <ProjectItem title="Requests" imageSrc={defaultImageUrl} />
                            <ProjectItem title="Received requests" imageSrc={defaultImageUrl} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Manage an Asset Pack</h2>
                    <div className="grid grid-cols-3 py-3">
                        <div className="col-span-3 bg-blue-500 flex justify-center items-center h-44 rounded-md">
                            Asset
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 pl-4">
                <YourStatus /> 
            </div>
        </div>
    );
};


ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};


AssetItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default AssetSection;
