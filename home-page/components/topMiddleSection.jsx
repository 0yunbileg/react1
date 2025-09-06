import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const TopMiddleSection = () => {
    return (
        <div className="grid grid-cols-2 gap-4  w-[100%] h-[100%]">
            <div className="p-8 flex flex-col justify-between bg-white rounded-2xl">
                <div className="self-end flex items-center justify-center bg-blue-300 w-[66px] h-[66px] rounded-full">
                    <Image src={"/images/image1.png"} alt="image1" width={30} height={30} />
                </div>
                <p className="text-[40px]">05</p>
                <p className="font-black text-[20px]">New Task</p>
            </div>

            <div className="p-8 flex flex-col justify-between bg-white rounded-2xl">
                <div className="w-[100%] text-center">
                    <p className="text-[26px] font-black">Design App</p>
                    <p className="text-[18px]">09:00-12:00</p>
                </div>
                <div className="flex w-[100%] justify-between items-center">
                    <p className="text-gray-500">New Task</p>
                    <div className="bg-gray-200 rounded-full p-2">
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMiddleSection;