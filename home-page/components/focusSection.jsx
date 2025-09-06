import { IoBed } from "react-icons/io5";
import { GiMeditation } from "react-icons/gi";

const FocusSection = () => {
    return (
        <div className="grid grid-cols-2 bg-white rounded-2xl w-[100%] h-[100%]">
            <div className="p-8 border-r-1 border-gray-300">
                <div className="border-1 border-gray-300 p-1.5 w-fit rounded-full">
                    <div className="bg-[#4EB3FC] w-fit p-3 rounded-full">
                        <IoBed className="bg-[#4EB3FC]" size={30} color="white" />
                    </div>
                </div>
                <p className="text-[18px] mt-8">Bedtime</p>
                <p className="text-gray-500 mt-2">21:00 - 06:00 A.m</p>
            </div>

            <div className="p-8">
                <div className="border-1 border-gray-300 p-1.5 w-fit rounded-full">
                    <div className="bg-[#EE5544] w-fit p-3 rounded-full">
                        <GiMeditation className="bg-[#EE5544]" size={30} color="white" />
                    </div>
                </div>
                <p className="text-[18px] mt-8">Daily Yoga</p>
                <p className="text-gray-500 mt-2">06:15 - 07:00 A.m</p>
            </div>
        </div>
    )
}

export default FocusSection;