import { IoBed } from "react-icons/io5";
import { GiMeditation } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";

const BottomLeftSection = () => {
    return (
        <div className="grid grid-cols-2 gap-4  w-[100%] h-[100%]">
            <div className="p-8 flex flex-col justify-between bg-white rounded-2xl">
                <p className="font-black">21 June</p>
                <p className="text-[30px] w-[60%]">Reading Book</p>
                <div className="font-bold flex w-[100%] justify-between items-center">
                    <p>Done</p>
                    <div className="bg-black rounded-full p-1">
                        <FaCheck color="white" className="bg-black rounded-full" />
                    </div>
                </div>
            </div>

            <div className="p-8 flex flex-col justify-between bg-white rounded-2xl">
                <div className="self-end border-1 border-gray-300 p-1.5 w-fit rounded-full">
                    <div className="bg-[#63DD7B] w-fit p-3 rounded-full">
                        <IoIosVideocam className="bg-[#63DD7B]" size={30} color="white" />
                    </div>
                </div>
                <p className="text-[18px] mt-8">30 Min</p>
                <p className="font-black">Meeting Team</p>
            </div>
        </div>
    )
}

export default BottomLeftSection;