import "./hero.css"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="heroDiv" style={{ backgroundImage: `url(/images/heroBackground.jpg)` }}>

            <div className="heroOverlay" />

            <div className="heroContentWrapper">
                <div className="heroImgWrapper" style={{ backgroundImage: `url(/images/hero.jpg)` }}>
                </div>
                <div className="heroTextWrapper">
                    <p className="heroNew">Шинэ</p>
                    <p className="heroCategory">Чөлөөт</p>
                    <p className="heroTitle">{"“БОНЗ-ын үнэлгээний цахим платформын нээлтийн арга хэмжээ”-г тоймлох нь".toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;