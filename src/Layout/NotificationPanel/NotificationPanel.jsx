import email from '../../../Assests/email.png'
import logout from '../../../Assests/logout.png'
import notification from '../../../Assests/notification.png'
import user from '../../../Assests/User_Icon.png'
const NotificationPanel = () => {
    return (
        <div className='flex justify-center items-center gap-x-5'>
            <img className='w-[2vw]'  src={logout} alt="" />
            <img className='w-[2vw]'  src={email} alt="" />
            <img className='w-[2vw]'  src={notification} alt="" />
            <img className='w-[2vw]'  src={user} alt="" />
        </div>
    );
};

export default NotificationPanel;