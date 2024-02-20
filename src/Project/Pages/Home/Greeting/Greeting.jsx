import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {
	const [time, setTime] = useState("00:00:00");
	const [greet, setGreet] = useState("Good morning!");

	useEffect(() => {
        AOS.init();
      }, []);	

	// update
	setInterval(() => {
		const dTime = new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
		const currentHour = new Date().getHours();

		switch (true) {
			case currentHour < 12:
				setGreet("Good Morning!");
				break;
			case 11 < currentHour && currentHour < 18:
				setGreet("Good Afternoon!");
				break;
			case 17 < currentHour && currentHour < 24:
				setGreet("Good Evening!");
				break;
		}

		setTime(dTime);
	}, 1000);

	return (
		<>
			<section className="home-section greeting">
				<div className="greeting__wrapper"   data-aos="fade-up">
					<p className="greeting__time">It's {time}</p>
					<p className="greeting__txt">{greet}</p>
				</div>
			</section>
		</>
	);
};
