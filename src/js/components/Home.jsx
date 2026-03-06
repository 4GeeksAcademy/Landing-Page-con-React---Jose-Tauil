import React from "react";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
    {
        image: "https://picsum.photos/id/79/200/300",
        title: "Card title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Explicabo magni sapiente,tempore debitis beatae culpanatus architecto.",
    },
    {
        image: "https://picsum.photos/id/79/200/300",
        title: "Card title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Explicabo magni sapiente,tempore debitis beatae culpanatus architecto.",
    },
    {
        image: "https://picsum.photos/id/79/200/300",
        title: "Card title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Explicabo magni sapiente,tempore debitis beatae culpanatus architecto.",
    },
    {
        image: "https://picsum.photos/id/79/200/300",
        title: "Card title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Explicabo magni sapiente,tempore debitis beatae culpanatus architecto.",
    }
];

const Home = () => {
    return (
        <div className="text-center mt-5">
            <div className="container">
                <div className="row">
                    {cards.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <Card cards={item} />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;