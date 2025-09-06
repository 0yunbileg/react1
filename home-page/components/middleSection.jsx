import Image from "next/image";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const MiddleSection = () => {
    return (
        <div className="bg-white rounded-2xl p-4 grid grid-rows-[4fr_1fr] gap-4">
            <div className="bg-[#f5f5f5] p-4 rounded-2xl">1</div>
            <div className="px-4 py-2 flex justify-between items-center">
                <div className="flex gap-6 font-black text-[18px]">
                    <div className="self-end flex items-center justify-center bg-blue-300 w-[54px] h-[54px] rounded-full">
                        <Image src={"/images/image1.png"} alt="image1" width={28} height={28} />
                    </div>
                    <div>
                        <p>Justin Wales</p>
                        <p className="font-normal">Started 5m ago</p>
                    </div>
                </div>
                <div className="text-white bg-[#65DC78] flex gap-8 h-fit py-2 px-4 items-center rounded-full"><BsFillTelephoneOutboundFill />Join</div>
            </div>
        </div>
    )
}

export default MiddleSection;