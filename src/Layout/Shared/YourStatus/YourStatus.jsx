

import { useState } from 'react';

const CollapsibleCard = ({ title, children, isOpen, toggleCard }) => {
    return (
        <div className={`relative mb-4 overflow-hidden transition-all ${isOpen ? 'w-full transition-all ease-out duration-500' : 'w-auto transition-all ease-in duration-500'}`}>
            <div className={`flex flex-col bg-blue-500 text-white rounded-md`}>
                <div className="p-4 flex justify-between items-center cursor-pointer" onClick={toggleCard}>
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
        <div className="w-full mt-20 ">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold mb-4">Your Status</h2>
                {isOpen ? (
                    <span className="text-lg cursor-pointer" onClick={toggleCard}>▶</span>
                ) : (
                    <span className="text-lg cursor-pointer" onClick={toggleCard}>◀</span>
                )}

                <CollapsibleCard title="Your Status" isOpen={isOpen}>
                    <p className=''>Your status content goes here.</p>
                </CollapsibleCard>
            </div>

        </div>
    );
};

export default YourStatus;
