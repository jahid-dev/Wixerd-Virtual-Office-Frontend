import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ToTheTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Add an event listener to track the scroll position
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 4) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });


    };
    return (
        <div className={`fixed bottom-5  right-10 ${showButton ? 'block' : 'hidden'}`}>
            <button onClick={handleTop} className="btn btn-success hover:btn-warning">
                <FaArrowCircleUp className="text-5xl text-red-950" />
            </button>
        </div>
    );
};

export default ToTheTop;