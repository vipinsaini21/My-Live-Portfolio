import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Programming from "./Programming";
import "./skills.css";
import Wealth from "./Wealth";

const Skills = () => {
	return (
		<section className='skills section' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<span className='section__subtitle'>My Technical Level</span>
			<div className='skills__container container grid'>
				<Programming />
				<Frontend />
				<Backend />
				<Wealth />
			</div>
		</section>
	);
};

export default Skills;
