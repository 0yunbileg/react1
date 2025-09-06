import { PiParallelogramBold } from "react-icons/pi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";

const ClubSection = () => {
    return (
        <div className="grid grid-rows-2 p-4 gap-4 bg-white rounded-2xl w-[100%] h-[100%]">
            <div className="flex flex-col justify-between w-[100%] h-[100%] p-4">
                <div className="flex justify-between">
                    <div>
                        <p className="text-4xl">Club Meeting</p>
                        <p className="mt-2 font-semibold">09:00-12:30</p>
                    </div>
                    <div><PiParallelogramBold size={40} /></div>
                </div>
                <div>
                    <p>Design and research for a user roadmap in a design project that I have to do with friends.</p>
                </div>
            </div>
            <div className="flex justify-between p-4 bg-[#f5f5f5] rounded-2xl w-[100%] h-[100%]">
                <div className="flex flex-col p-4 gap-10">
                    <p className="flex items-center gap-2 text-[22px]"><FaRegFolderClosed />Category</p>
                    <p className="text-xl">Personal</p>
                </div>
                <div className="flex flex-col p-4 w-[40%]">
                    <p className="flex items-center gap-2 text-[22px]"><BsPeople />With</p>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ClubSection;