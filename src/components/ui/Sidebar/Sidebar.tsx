import { FiHome } from "react-icons/fi";
import SidebarMenuItem, { SidebarMenuItemProps } from "./SideBarMenuItem"
import { GoListUnordered } from "react-icons/go";
import { IoPricetagOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { TfiBarChart } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

const Sidebar = () => {
    const orders = Array.from({ length: 16 });

    const sideMenuItems: SidebarMenuItemProps[] = [
        {
            icon: <FiHome />,
            route: "/",
            title: "Dashboard",
        },
        {
            icon: <GoListUnordered />,
            route: "/orders",
            title: "Orders",
            notifications: orders.length,
        },
        {
            icon: <IoPricetagOutline />,
            route: "/products",
            title: "Products",
        },
        {
            icon: <CiFolderOn />,
            route: "/categories",
            title: "Categories",
        },
        {
            icon: <HiOutlineUsers />,
            route: "/customers",
            title: "Customers",
        },
        {
            icon: <TfiBarChart />,
            route: "/reports",
            title: "Reports",
        },
        {
            icon: <FaRegStar />,
            route: "/coupons",
            title: "Coupons",
        },
        {
            icon: <BiCommentDetail />,
            route: "/inbox",
            title: "Inbox",
        }
    ];

    return (
        <aside className="fixed left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r" aria-label="Sidebar">
            <div className="h-full px-2 py-4">
                {sideMenuItems.map((menuItem) => (
                    <SidebarMenuItem
                        icon={menuItem.icon}
                        route={menuItem.route}
                        title={menuItem.title}
                        notifications={menuItem.notifications}
                    />
                ))}
            </div>
        </aside>
    )
}

export default Sidebar
