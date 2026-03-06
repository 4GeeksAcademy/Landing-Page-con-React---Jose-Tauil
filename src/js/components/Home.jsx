import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



const Home = () => {
	return (
		<div>
			<Navbar />

			<Jumbotron />

			
		</div>
	);
};

export default Home;