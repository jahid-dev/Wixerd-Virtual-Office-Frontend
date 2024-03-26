import { useState } from 'react';

// Shared CollapsibleCard component
const CollapsibleCard = ({ title, children, isOpen }) => {
    return (
        <div className={`relative mb-4 overflow-hidden transition-all ${isOpen ? 'w-full' : 'w-10'} ease-in-out duration-500`}>
            <div className={`flex flex-col bg-blue-500 text-white rounded-md`}>
                <div className="p-4 flex justify-between items-center cursor-pointer">
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <div className={`p-4 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const YourStatus = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full relative">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2 className="text-xl font-bold">Your Status</h2>
                <span className="text-lg cursor-pointer" onClick={toggleCard}>
                    {isOpen ? (
                        <span>&#x25B6;</span>
                    ) : (
                        <span>&#x25C0;</span>
                    )}
                </span>
                <CollapsibleCard title="Your Status" isOpen={isOpen}>
                <p>Your status content goes here.</p>
            </CollapsibleCard>
            </div>
        </div>
    );
};

export default YourStatus;
