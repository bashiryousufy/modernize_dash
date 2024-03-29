import logo from '../assets/images/logo.png';
import profilePic from '../assets/images/profile_pic.png';
import { FiSearch } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useNotifications } from '../hooks/useNotifications';
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [currentUser] = useCurrentUser();
    const [notifications] = useNotifications();

    return (
        <div className='fixed flex items-center bg-white shadow-md h-12 w-screen z-10'>

            <button data-drawer-target="sidebar" data-drawer-toggle="sidebar" aria-controls="sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-slate-400">
                <IoMenu />
            </button>

            <div className="flex items-center ml-4">
                <img src={logo} alt="logo" className="h-7 w-7" />
                <h1 className="text-black ml-1.5 font-bold">Modernize</h1>
            </div>

            <div className="hidden sm:flex items-center ml-28 mr-auto gap-2.5">
                <FiSearch className='icon' />
                <input type="text" placeholder='Search...' className="!outline-none text-xs" />
            </div>

            <div className='hidden sm:flex items-center'>
                <div className="flex gap-4">
                    <BiCommentDetail className='icon' />
                    <div className="relative">
                        <FaRegBell className='icon' />
                        <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-xs">{notifications.length}</div>
                    </div>
                </div>
                <div className='flex items-center ml-10 mr-4'>
                    <img className="w-7 h-7 rounded-full bg-slate-300" src={profilePic} alt="Profile Pic"></img>
                    <div className='text-slate-500 text-sm ml-3'>{currentUser.name}</div>
                    <RiArrowDropDownLine className='icon ml-3' size={30} />
                </div>
            </div>

        </div>
    )
}

export default Header