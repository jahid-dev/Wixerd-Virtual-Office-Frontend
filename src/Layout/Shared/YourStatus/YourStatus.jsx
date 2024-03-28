import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";


const YourStatus = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold ">Your Status</p>
                <p className="bg-red-400 cursor-pointer inline-block p-3 rounded-full text-white text-2xl">
                    <TbSquareRoundedArrowRightFilled></TbSquareRoundedArrowRightFilled>
                </p>

            </div>
            <div className='max-w-48 mt-14 bg-red-600'>

            </div>
        </div>
    );
};

export default YourStatus