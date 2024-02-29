import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default () => {
	return (
		<>
			<section className="home-section about">
				<h2 className="head2 about-h2">Lorem</h2>
				<div className="about__list">
					<div className="about__section about__section--1">
						<p className="about__entry">
							<span className="about__entry__txt1">
								Hi! I'm Lorem, nice to meet you!
							</span>
							<span className="about__entry__txt2">
								I am a Front end developer who love making
								interractive websites!
							</span>
						</p>
					</div>
					<div className="about__section about__section--2">
						<p className="about__entry">
							<span className="about__entry__txt1">
								I’m a self-taught developer!
							</span>
						</p>
					</div>
					<div className="about__section about__section--3">
						<p className="about__entry">
							<span className="about__entry__txt1">
								I create websites using: <br />
								HTML, SCSS, PHP, Laravel, Wordpress, Javascript
								and Jquery!
							</span>
						</p>
					</div>
					<div className="about__section about__section--4">
						<p className="about__entry">
							<span className="about__entry__txt1">
								For website design, I have worked on using:
								<br />
								Photoshop, Figma, XD and Illustrator
							</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
