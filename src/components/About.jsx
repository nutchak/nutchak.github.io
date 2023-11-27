import {  motion } from 'framer-motion';
import React from 'react';
import styles from '../styles/styles.js';


function About() {
	return (
		<div id="about" className={`${styles.container}`}>
			<motion.p
				initial={`text: self-start`}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 9 }}
				className={`${styles.title}`}
			>
				About me
			</motion.p>
			<motion.div
				id="about-wrapper"
				className={`${styles.containerWrapper} bg-CaribbeanGreen`}
			>
				<div className="lg:grid-rows flex flex-col text-xl text-CodGrey lg:grid lg:grid-cols-2">
					<div className="">
						<p className="pb-4">I love Machine Learning and Econometrics.</p>
						<p className="py-4 text-2xl">Why, you ask?</p>
						<p className="py-4">
							Well, I love the idea of digging into heaps of data, and finding
							those little golden nuggets of insight that can change the way we
							see things.
						</p>
						<p className="py-4 text-2xl">Wait! That's not all!</p>
						<p className="py-4">
							I also love backend, frontend, data engineering, and the list goes
							on and on!
						</p>
						<p className="py-4">
							Let me introduce myself first. I am a developer with two bachelor's degrees in Computer Science and
							Economics from University of Oslo.
						</p>
						<p className="py-4">
							Feel free to stick around and check out my portfolio. It's where I
							showcase how I put my passion and degrees to work to decipher the
							fascinating stories data has to tell. Enjoy the journey!
						</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						{/* <h1 className="font-mono text-2xl py-4">Some cursed hamster</h1>
						<ReactPlayer 
							url={hams}
							playing={true}
							loop={true}
							muted={true}
							playsinline={true}
						/> */}
					</div>
				</div>
				{/* <div className="place-self-center">
					
					<p className="text-2xl">
						Information about the studies 👉 <span>Click here</span>
					</p>
				</div> */}
			</motion.div>
		</div>
	);
}

export default About;
