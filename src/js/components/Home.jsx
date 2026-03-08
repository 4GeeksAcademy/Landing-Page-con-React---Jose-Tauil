import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";
import Footer from "./footer";

const Home = () => {

	const cards = [
		{ image: "https://picsum.photos/500/325", title: "Card title 1", description: "Lorem ipsum dolor sit amet" },
		{ image: "https://picsum.photos/500/325", title: "Card title 2", description: "Lorem ipsum dolor sit amet" },
		{ image: "https://picsum.photos/500/325", title: "Card title 3", description: "Lorem ipsum dolor sit amet" },
		{ image: "https://picsum.photos/500/325", title: "Card title 4", description: "Lorem ipsum dolor sit amet" },
	];

	return (
		<div>

			<Navbar />

			<Jumbotron />

			<div className="container">
				<div className="row">

					{cards.map((card, index) => (
						<Card
							key={index}
							image={card.image}
							title={card.title}
							description={card.description}
						/>
					))}

				</div>
			</div>

			<Footer />

		</div>
	);
};

export default Home;