import { AnimatePresence, circOut, motion } from 'framer-motion';
import React, { useState } from 'react';
import routeVariants from '../styles/variants.js';
import styles from '../styles/styles.js';
import ContentBox from '../components/ContentBox.jsx';
import AnimatedBackground from '../components/AnimatedBackground';
import Card from '../components/Card.jsx';
import degreeData from '../data/degreeData.js';
import ReactPlayer from 'react-player';
import hams from '../assets/hams.mp4';
/* 
const [selectedTab, setSelectedTab] = useState(degreeData[0]);

	return (
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
							<p className="text-l align-center">
								I am a programmer with bachelor's degrees in{' '}
								<strong>Computer Science</strong> and <strong>Economics</strong>
								🎉.
								<br />I <strong>love</strong> Machine Learning and Econometrics.
								Why, you ask? Well, I love the idea of digging into heaps of
								data and finding those little golden nuggets of insight that can
								change the way we see things.
								<br />
								Feel free to stick around and check out my portfolio. It's where
								I showcase how I put my passion and degrees to work to decipher
								the fascinating stories data has to tell.
								<br />
								Enjoy the journey!
							</p>
							<p>
								Information about the studies and subjects I took are listed
								below.
							</p>
						</div>
						<div className="border border-FrenchRose">
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

*/

function About() {
	return (
		<div className="flex w-full flex-col items-center justify-center font-sans xl:pb-24 xl:pt-12">
			<motion.p
				initial={`text: self-start`}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 9 }}
				className="self-end font-staatliches text-9xl"
			>
				About me
			</motion.p>
			<motion.div
				id="about-wrapper"
				className="flex w-4/5 flex-col items-center justify-center bg-CaribbeanGreen font-sans text-black xl:px-24 xl:py-12"
			>
				<div className="flex flex-row">
					<div className="flex flex-col gap-6 text-xl">
						<p className="">
							I am a developer with bachelor's degrees in Computer Science and
							Economics🎉.
						</p>
						<p className="">
							I'm orginally from Thailand. I moved to Norway in 2011 to
							study and I've been here ever since!
						</p>
						<p className="">I love Machine Learning and Econometrics.</p>
						<p className="text-2xl">Why, you ask?</p>
						<p>
							Well, I love the idea of digging into heaps of data,
							
							and finding those little golden nuggets of insight that can change
							the way we see things.
						</p>
						<p className="">
							Feel free to stick around and check out my portfolio. It's where I
							showcase how I put my passion and degrees to work to decipher the
							fascinating stories data has to tell. Enjoy the journey!
						</p>
					</div>
					<div className="flex flex-col items-center justify-center  border-black">
						<h1 className="font-mono text-4xl">Some cursed hamster</h1>
						<ReactPlayer
							url={hams}
							playing={true}
							loop={true}
							muted={true}
							playsinline={true}
						/>
					</div>
				</div>
				<div className="pt-12">
					{/* To studies */}
					<p className="">Information about the studies Click here.</p>
				</div>
			</motion.div>
		</div>
	);
}

export default About;
