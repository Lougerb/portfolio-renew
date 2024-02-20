import React, {useEffect, useMemo, useState}  from "react";
import Icon_android from "../../../../assets/img/index/icon-android.svg";
import Icon_css3 from "../../../../assets/img/index/icon-css3.svg";
import Icon_sass from "../../../../assets/img/index/icon-sass.svg";
import Icon_js from "../../../../assets/img/index/icon-js.svg";
import Icon_html_tag from "../../../../assets/img/index/icon-html-tag.svg";
import Icon_php from "../../../../assets/img/index/icon-php.svg";
import Icon_wordpress from "../../../../assets/img/index/icon-wordpress.svg";
import Icon_github from "../../../../assets/img/index/icon-github.svg";
import IntroIcon from "./Icon/IntroIcon";


const imageBatch1 = [Icon_android, Icon_css3, Icon_sass, Icon_js];
const imageBatch2 = [Icon_html_tag, Icon_php, Icon_wordpress, Icon_github];

export default () => {
	const renderImages =(arr, altKey)=>{
		return arr.map((image, index)=>{
			return (
			<React.Fragment key={altKey+index}>
				<IntroIcon image={image} id={index}/>
			</React.Fragment>
			);
		})
	};

	useEffect(()=>{
		// 
	},[])


	return (
		<>
			<section className="home-section intro"  >
				<div className="layout">
					<h1 className="intro__title">
						<span className="intro__title__t1">
							JOE MAMA
						</span>
						<span className="intro__title__t2">
							TAGA LUTO
						</span>
					</h1>
				</div>
				<div className="intro__animated-bg">
					<div className="intro__animated-bg__frame intro__animated-bg__frame--1">
						<ul className="intro__animated-bg__frame__items">
							{renderImages(imageBatch1, 10)}
						</ul>
					</div>
					<div className="intro__animated-bg__frame intro__animated-bg__frame--2">
						<ul className="intro__animated-bg__frame__items">
							{renderImages(imageBatch2, 20)}
						</ul>
					</div>
				</div>
				<div className="intro__animated-bg bigger-animated-bg">
					<div className="intro__animated-bg__frame intro__animated-bg__frame--1">
						<ul className="intro__animated-bg__frame__items">
							{renderImages(imageBatch1, 30)}
						</ul>
					</div>
					<div className="intro__animated-bg__frame intro__animated-bg__frame--2">
						<ul className="intro__animated-bg__frame__items">
							{renderImages(imageBatch2, 40)}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};
