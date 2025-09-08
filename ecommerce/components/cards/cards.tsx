import CardItem from "./cardItem";

const CardsSection = () => {
    console.log('CardItem:', CardItem);
    return (
        <div className="container grid gap-4 grid-cols-4">
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
    )
}

export default CardsSection;