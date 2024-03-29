import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const YourStatus = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="mt-2 relative ">
            <div className="flex mb-4 justify-between ">
                <p></p>
                <p onClick={() => setOpen(!open)} className="bg-red-400 mr-2 relative right-0 cursor-pointer inline-block p-3 rounded-full text-white text-2xl">
                    <IoMdArrowRoundForward></IoMdArrowRoundForward>
                </p>
            </div>
            <div className={`rounded-lg overflow-hidden absolute right-0 transition-all duration-700  h-screen bg-gray-200 ${open ? "w-16" : "w-[27rem]"}`}>

                <p className="text-black  overflow-hidden text-xl text-center">Your Status Lies here</p>
            </div>
        </div>
    );
};

export default YourStatus