import Intro from "./Intro/Intro";
import Greeting from "./Greeting/Greeting";
import About from "./About/About";
import Works from "./Works/Works";
import Particles from "../../Components/Particles/Particles";
function Home() {
	return (
		<div className="home">
			<Particles/>
			{/* INTRO */}
			<Intro />

			{/* TELL TIME: 12:00PM - GOOD MORNING ANIMATION */}
			<Greeting />

			{/* ABOUT */}
			<About />

			{/* WORKS AND PROJECTS */}
			<Works />

			{/* EXPERIENCE */}

			{/* CONTACT */}
		</div>
	);
}

export default Home;
