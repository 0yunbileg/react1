const BottomMiddleSection = () => {
    return (
        <div className="grid p-4 grid-cols-2 bg-white rounded-2xl">
            <div className="p-4 bg-[#f5f5f5] rounded-2xl flex flex-col justify-between">
                <div className="">
                    <p className="text-[30px]">CS Study</p>
                    <p className="text-[20px] mt-2">09:00 - 12:30</p>
                </div>
                <div className="flex w-[100%] justify-between items-center">
                    <p className="text-[18px]">Personal</p>
                    <p className="font-black">Now</p>
                </div>
            </div>

            <div className="p-4 flex flex-col justify-between">
                <div className="">
                    <p className="text-[30px]">UX Writing</p>
                    <p className="text-[20px] mt-2">13:00 - 15:00</p>
                </div>
                <div className="flex w-[100%] justify-between items-center">
                    <p className="text-[18px]">Work</p>
                    <p className="font-black text-purple-500">Next</p>
                </div>
            </div>
        </div>
    )
}

export default BottomMiddleSection;