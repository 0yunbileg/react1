import { TbHexagonLetterNFilled } from "react-icons/tb";
import { LiaMouseSolid } from "react-icons/lia";
import { FaHome, FaBoxOpen, FaWallet } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import MenuItem from "../menuItem";

const Header = () => {
    const menuItems = [
        {
            icon: FaHome,
            text: "Home"
        },
        {
            icon: FaBoxOpen,
            text: "Services"
        },
        {
            icon: FaWallet,
            text: "Pricing"
        },
        {
            icon: LiaMouseSolid,
            text: "Features"
        }
    ]
    return (
        <header className="flex items-center justify-between rounded-full bg-white p-2 m-5">
            <div className="">
                <TbHexagonLetterNFilled className="w-8 h-8" />
            </div>

            <div className="flex items-center gap-4">
                {menuItems.map((menuItem) =>
                    <MenuItem {...menuItem} />
                )}
            </div>
            <div className="flex">
                <p className="bg-[#DEF15E] py-1 px-2 rounded-full">Open Account</p>
                <GoArrowUpRight className="bg-black text-white p-1 rounded-full w-8 h-8" />
            </div>
        </header>
    )
}

export default Header;