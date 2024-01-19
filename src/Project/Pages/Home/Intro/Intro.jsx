const imgDir = (page) => {
	return "src/assets/img/" + page;
};

export default () => {
	return (
		<>
			<section className="home-section intro">
				<div className="layout">
					<h1 className="intro__title">
						<span className="intro__title__t1">
							LOUEIN GERALD BALING
						</span>
						<span className="intro__title__t2">
							FRONT END DEVELOPER
						</span>
					</h1>
				</div>
				<div className="intro__animated-bg">
					<div className="intro__animated-bg__frame intro__animated-bg__frame--1">
						<div className="intro__animated-bg__frame__items">
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--1">
								<img
									src={imgDir("/index/icon-html5.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--2">
								<img
									src={imgDir("/index/icon-css3.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--3">
								<img
									src={imgDir("/index/icon-sass.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--4">
								<img
									src={imgDir("/index/icon-js.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
						</div>
					</div>
					<div className="intro__animated-bg__frame intro__animated-bg__frame--2">
						<div className="intro__animated-bg__frame__items">
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--1">
								<img
									src={imgDir("/index/icon-html-tag.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--2">
								<img
									src={imgDir("/index/icon-php.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--3">
								<img
									src={imgDir("/index/icon-wordpress.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--4">
								<img
									src={imgDir("/index/icon-github.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="intro__animated-bg bigger-animated-bg">
					<div className="intro__animated-bg__frame intro__animated-bg__frame--1">
						<div className="intro__animated-bg__frame__items">
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--1">
								<img
									src={imgDir("/index/icon-html5.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--2">
								<img
									src={imgDir("/index/icon-css3.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--3">
								<img
									src={imgDir("/index/icon-sass.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--4">
								<img
									src={imgDir("/index/icon-js.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
						</div>
					</div>
					<div className="intro__animated-bg__frame intro__animated-bg__frame--2">
						<div className="intro__animated-bg__frame__items">
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--1">
								<img
									src={imgDir("/index/icon-html-tag.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--2">
								<img
									src={imgDir("/index/icon-php.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--3">
								<img
									src={imgDir("/index/icon-wordpress.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
							<div className="intro__animated-bg__frame__items__item intro__animated-bg__frame__items__item--4">
								<img
									src={imgDir("/index/icon-github.svg")}
									alt=""
									className="intro__animated-bg__frame__items__item__icon"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
