import { useState, useEffect } from "react";
import AnimationBG from "./AnimationBG";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {
	const [time, setTime] = useState("00:00:00");
	const [greet, setGreet] = useState("Good morning!");
	const [hour, setHour] = useState('');

	useEffect(() => {
        AOS.init();

		// update

		const dTime = new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
		const currentHour = new Date().getHours();

		switch (true) {
			case currentHour < 12:
				setGreet("Good Morning!");
				setHour('morning');
				break;
			case 11 < currentHour && currentHour < 18:
				setGreet("Good Afternoon!");
				setHour('afternoon');
				break;
			case 17 < currentHour && currentHour < 24:
				setGreet("Good Evening!");
				setHour('evening');
				break;
		}
		setInterval(() => {
			setTime(dTime);
		}, 1000);
      }, []);	


	return (
		<>
			<section className="home-section greeting">
				<AnimationBG currentTime={hour}/>
				<div className="greeting__wrapper" data-aos="fade-up">
					<p className="greeting__time">It's {time}</p>
					<p className="greeting__txt">{greet}</p>
				</div>
			</section>
		</>
	);
};
