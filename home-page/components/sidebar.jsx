import { FaPowerOff, FaRegFolder } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { TbDashboard, TbArrowsExchange2, TbLifebuoy } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { MdMailOutline } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

import SidebarItem from "./sidebarItem";
import SidebarSection from "./sidebarSection";

const Sidebar = () => {
    const bankingSection = {
        text: "Banking",
        itemsArray: [
            {
                icon: TbDashboard,
                text: "Dashboard"
            },
            {
                icon: CiCalendarDate,
                text: "History"
            },
            {
                icon: VscGraph,
                text: "Analysis"
            },
            {
                icon: TbArrowsExchange2,
                text: "Finances"
            }
        ]
    }

    const servicesSection = {
        text: "Services",
        itemsArray: [
            {
                icon: MdMailOutline,
                text: "Messages"
            },
            {
                icon: FaRegFolder,
                text: "Documents"
            },
            {
                icon: PiSquaresFour,
                text: "Products"
            }
        ]
    }

    const othersSection = {
        text: "Others",
        itemsArray: [
            {
                icon: TbLifebuoy,
                text: "Help"
            },
            {
                icon: IoSettingsOutline,
                text: "Settings"
            }
        ]
    }

    return (
        <aside className="w-80 bg-white rounded-xl p-4 m-5 flex flex-col gap-5">
            <div className="flex items-center gap-2 border-b-1 border-gray-400 pb-4">
                <div className="bg-[url('/images/profile.jpg')] bg-cover bg-center w-15 h-15 rounded-xl"></div>
                <div>
                    <p className="font-bold">Oyunbileg Battulga</p>
                    <p className="flex items-center gap-2 text-[12px] text-gray-500">Session ends in 9 min 5s <TfiReload className="text-[#007E01]" /></p>
                </div>
                <div className="bg-[#007E01] flex items-center justify-center w-12 h-12 rounded-xl">
                    <FaPowerOff className="text-white w-5 h-5" />
                </div>
            </div>

            <div>
                <SidebarSection {...bankingSection} />
                <SidebarSection {...servicesSection} />
                <SidebarSection {...othersSection} />
            </div>
        </aside>
    )
}

export default Sidebar;