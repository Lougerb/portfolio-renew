export default ({ content }) => {
	const hoverF = (e) => {
		const rect = e.target.getBoundingClientRect();
		// mouse position
		const mPosX = e.clientX - rect.left;
		const mPosY = e.clientY - rect.top;
		// middle of element
		const midX = e.target.clientWidth / 2;
		const midY = e.target.clientHeight / 2;
		// offset

		const dRotate = 10;

		const offsetX = ((mPosX - midX) / midX) * dRotate;
		const offsetY = ((mPosY - midY) / midY) * dRotate;

		const defaultPerspective = 0;

		e.target.style.setProperty(
			"transform",
			`perspective(500rem) rotateX(${
				-defaultPerspective + -1 * offsetY
			}deg) rotateY(${defaultPerspective + offsetX}deg)`
		);
	};

	const hoverLeave = (e) => {
		e.target.style.setProperty(
			"transform",
			`perspective(500rem) rotateX(0deg) rotateY(0deg)`
		);
	};
	return (
		<>
			<li className="works__card">
				<div className="works__card__wrapper">
					{/* FOR DESKTOP */}
					<div className="works__card__desktop works__card__wrapper-perspective">
						<div
							className="works__card__desktop__img works__card__perspective"
							onMouseMove={hoverF}
							onMouseLeave={hoverLeave}
						>
							{content}
						</div>
					</div>
					{/* FOR MOBILE */}
					<div className="works__card__mobile works__card__wrapper-perspective">
						<div
							className="works__card__mobile__img works__card__perspective"
							onMouseMove={hoverF}
							onMouseLeave={hoverLeave}
						>
							SAMPLE TEXT
						</div>
					</div>
				</div>
			</li>
		</>
	);
};
