import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { circOut, motion, useScroll } from 'framer-motion';
import NavBar from '../components/Header';
import Layout from '../components/Layout';
import routeVariants from '../styles/variants.js';
import styles from '../styles/styles.js';
import ContentBox from '../components/ContentBox';
import AnimatedBackground from '../components/AnimatedBackground';
import Box from '../components/Box';
import ReactPlayer from 'react-player';

/*
<AnimatedBackground
			initial={{ y: '100vh' }}
			animate={{ y: '0vh' }}
			exit={{ y: '100vh', opacity: 1 }}
			className={`${styles.background} bg-Illusion`}
		> 

			<div
				id="card"
				className="my-40 flex h-4/5 w-4/5 flex-col items-center justify-center border-2 bg-[#0D6E2F]"
			>

				<div className="grid h-4/5 grid-cols-2 grid-rows-1">
					<div className="grid grid-cols-1 grid-rows-2">
						<div className="flex flex-col justify-center lg:px-12">
							<h2 className="text-subheading font-mono">Hello!</h2>
							<h1 className="font-RobotoMono text-heading">I'm Nutcha</h1>
						</div>
						
					</div>
					<div className="flex flex-col items-center justify-center  border-black">
						<h1 className="font-mono text-4xl">I'm waiting</h1>
						<ReactPlayer
							url={hams}
							playing={true}
							loop={true}
							muted={true}
							playsinline={true}
						/>
					</div>
				</div>
			</div>
		</AnimatedBackground>

 */

function scrollToSection(id) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

function Home() {
	useEffect(() => {
		scrollToSection('home');
	}, []);
	return (
		<div id="home" className={`${styles.container} pt-8`}>
			<motion.p
				initial={false}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 9 }}
				className={`${styles.title}`}
			>
				Home
			</motion.p>

			<motion.div
				id="container"
				className={`${styles.containerWrapper} bg-CeruleanBlue`}
			>
				{/* <div className="inline-flex  flex-col gap-4 tracking-wider">
					<div className="px-24 py-24 font-sans font-bold"> */}
				<h3 className="sm:text-3xl lg:text-6xl lg:py-2">Hello, I'm</h3>
				<h2 className="font-staatliches lg:text-8xl sm:text-4xl py-4 text-text-d hover:text-accent-d">
					Nutcha Kiraniphonphan
				</h2>
				<h3 className="text-body">I'm a developer.</h3>
				{/* </div>
				</div> */}
			</motion.div>
		</div>
	);
}
export default Home;
