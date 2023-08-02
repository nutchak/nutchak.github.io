import { AnimatePresence, circOut, motion } from 'framer-motion';
import React, { useState } from 'react';
import routeVariants from '../styles/variants.js';
import styles from '../styles/styles.js';
import ContentBox from '../components/ContentBox.jsx';
import AnimatedBackground from '../components/AnimatedBackground';
import Card from '../components/Card.jsx';
import degreeData from '../data/degreeData.js';

function About() {
	const [selectedTab, setSelectedTab] = useState(degreeData[0]);

	return (
		/* Background */
		<AnimatedBackground
			initial={{ y: '100vh' }}
			animate={{ y: '0vh' }}
			exit={{ y: '100vh', opacity: 1 }}
			className={`${styles.background}`}
		>
			<Card
				title="about me"
				color="bg-white"
				children={
					<div
						id="about-wrapper"
						className="flex flex-auto flex-col bg-Dallas p-4 text-text-l"
					>
						<div className="flex flex-col">
							<h2 className="text-subheading">I'm Nutcha.</h2>
							<p>
								I recently graduated from University of Oslo, with Bachelor
								degree in Computer Science and Economics.
							</p>
							<p>
								Information about the studies and subjects I took are listed
								below.
							</p>
						</div>
						<div className='border border-FrenchRose'>
							<nav id="content-nav" className="bg-Deco ">
								<ul className="m-0 grid grid-cols-2 justify-items-center border-2 border-black p-0">
									{degreeData.map((degree) => (
										<li
											key={degree.degreeName}
											className=""
											onClick={() => setSelectedTab(degree)}
										>
											{`${degree.degreeName}`}
											{degree === selectedTab ? (
												<motion.div
													initial={{ scale: 1 }}
													whileFocus={{ scale: 1.1 }}
												/>
											) : null}
										</li>
									))}
								</ul>
							</nav>
							<main>
								<AnimatePresence mode="wait">
									<motion.div
										key={selectedTab ? selectedTab.degreeName : 'empty'}
										initial={{ y: 10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -10, opacity: 0 }}
										transition={{ duration: 0.2 }}
										className="p-6 "
									>
										{selectedTab ? selectedTab.degreeName : '😋'}
										{selectedTab ? selectedTab.degreeInformation : '😋'}
										{selectedTab ? selectedTab.degreeText : '😋'}
									</motion.div>
								</AnimatePresence>
							</main>
						</div>
					</div>
				}
			/>
		</AnimatedBackground>
	);
}

export default About;
