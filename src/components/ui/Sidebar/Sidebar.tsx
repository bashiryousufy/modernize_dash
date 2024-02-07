import { FiHome } from "react-icons/fi";
import SidebarMenuItem, { SidebarMenuItemProps } from "./SideBarMenuItem"
import { GoListUnordered } from "react-icons/go";
import { IoPricetagOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { TfiBarChart } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";
import { IoRibbonOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

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

    const otherInformationItemMenus: SidebarMenuItemProps[] = [
        {
            icon: <GoQuestion />,
            route: "/knowledge-base",
            title: "Knowledge Base",
        },
        {
            icon: <IoRibbonOutline />,
            route: "/product-updates",
            title: "Product Updates",
        },
    ];

    const settingsItemMenus: SidebarMenuItemProps[] = [
        {
            icon: <FaRegUser />,
            route: "/personal-settings",
            title: "Personal Settings",
        },
        {
            icon: <IoSettingsOutline />,
            route: "/global-settings",
            title: "Global Settings",
        },
    ];

    return (
        <aside id="sidebar" className="sm:bg-neutral-100 fixed top-12 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r " style={{ backgroundColor: '#F5F6FA' }} aria-label="Sidebar">

            <div className="h-full px-2 py-6">

                {sideMenuItems.map((menuItem) => (
                    <SidebarMenuItem
                        icon={menuItem.icon}
                        route={menuItem.route}
                        title={menuItem.title}
                        notifications={menuItem.notifications}
                    />
                ))}

                <div className="py-2">
                    <span className="text-xs px-2 text-slate-400 font-extralight">Other Information</span>

                    <div className="pt-2">
                        {otherInformationItemMenus.map((menuItem) => (
                            <SidebarMenuItem
                                icon={menuItem.icon}
                                route={menuItem.route}
                                title={menuItem.title}
                                notifications={menuItem.notifications}
                            />
                        ))}
                    </div>

                </div>

                <div className="py-2">
                    <span className="text-xs px-2 text-slate-400 font-extralight">Settings</span>

                    <div className="pt-2">
                        {settingsItemMenus.map((menuItem) => (
                            <SidebarMenuItem
                                icon={menuItem.icon}
                                route={menuItem.route}
                                title={menuItem.title}
                                notifications={menuItem.notifications}
                            />
                        ))}
                    </div>

                </div>

            </div>

        </aside>
    )
}

export default Sidebar
