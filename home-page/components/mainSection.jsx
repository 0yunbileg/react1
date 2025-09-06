import ClubSection from "./clubSection"
import FocusSection from "./focusSection"
import BottomLeftSection from "./bottomLeftSection"
import TopMiddleSection from "./topMiddleSection"
import BottomMiddleSection from "./bottomMiddleSection"
import MiddleSection from "./middleSection"

const MainSection = () => {
    return (
        <section className="grid grid-cols-3 w-420 h-240 border-1 m5 p-4 gap-4">
            <div className="grid grid-rows-[2fr_1fr_1fr] w-[100%] h-[100%] gap-4">
                <ClubSection />
                <FocusSection />
                <BottomLeftSection />
            </div>
            <div className="grid grid-rows-[1fr_2fr_1fr] w-[100%] h-[100%] gap-4">
                <TopMiddleSection />
                <MiddleSection />
                <BottomMiddleSection />
            </div>
            <div className="grid grid-rows-[1fr_1fr_2fr] border-1 w-[100%] h-[100%] gap-4">
                <div className="border-1 w-[100%] h-[100%]"></div>
                <div className="border-1 w-[100%] h-[100%]"></div>
                <div className="border-1 w-[100%] h-[100%]"></div>
            </div>
        </section>
    )
}

export default MainSection