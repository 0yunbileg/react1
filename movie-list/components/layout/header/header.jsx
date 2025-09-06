import Menu from "./menu";
import Search from "../../search";
import { FaCheese } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex fixed top-0 left-0 z-3 bg-[#000000] w-[100%] h-16 items-center justify-around px-6 text-white">
            <div className="flex items-center gap-3 text-[20px] font-bold">
                <FaCheese size={30} />Movie Site
            </div>
            <Menu />
        </div>
    )
}

export default Header;