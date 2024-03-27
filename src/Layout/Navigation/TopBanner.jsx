import logo from '../../../Assests/logo_1.png'
import NotificationPanel from '../NotificationPanel/NotificationPanel';

const TopBanner = () => {
    return (
        <div className='flex p-6  pb-14 fixed w-full z-10 border h-[12vh]  top-0 bg-white border-red-500 justify-between items-center'>
            <div>
                <img className='w-[12vw]' src={logo} alt="" />
            </div>
            <div>
                <h1 className='text-5xl text-center font-bold  leading-none tracking-wider'>Dashboard</h1>
            </div>
            <div>
                <NotificationPanel></NotificationPanel>
            </div>
        </div>
    );
};

export default TopBanner;