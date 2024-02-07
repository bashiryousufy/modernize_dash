import React from 'react';
import { Link } from 'react-router-dom';

export interface SidebarMenuItemProps {
    icon: React.ReactNode;
    title: string;
    route: string;
    notifications?: number;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ icon, title, route, notifications }) => {
    return (
        <Link to={route} className="flex items-center p-2 text-gray-900 rounded-md  hover:bg-blue-600 group pb-4">
            <div className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                {icon}
            </div>
            <span className="flex-1 ms-3 whitespace-nowrap hover:text-white text-gray-500 text-xs pl-2">{title}</span>
            {notifications !== undefined && (
                <span className="inline-flex items-center justify-center w-0.2 h-1 p-2 ms-3 text-xs font-semibold bg-slate-900 text-slate-200 rounded-full ">{notifications}</span>
            )}
        </Link>
    );
}

export default SidebarMenuItem;
