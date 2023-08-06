import React from 'react';
import { Link } from 'react-router-dom';
import { circOut, motion, useScroll } from 'framer-motion';
import NavBar from '../components/NavBar';
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

function Home() {
	return (
		<div className="w-full flex flex-col items-center justify-center font-sans xl:pt-12 xl:pb-24">
			<motion.p
				initial={`text: self-start`}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 9 }}
				className="self-end font-staatliches text-9xl"
			>
				Home
			</motion.p>

			<motion.div
				id="card"
				className="flex w-4/5 flex-col items-center justify-center bg-CeruleanBlue font-sans text-Concrete"
			>
				<div className="inline-flex  flex-col gap-4 tracking-wider">
						<div className="px-24 py-24 font-sans font-bold">
							<h3 className="py-8 text-8xl">Hello, I'm</h3>
							<h2 className="py-8 font-staatliches text-9xl">
								Nutcha Kiraniphonphan
							</h2>
							<h3 className="text-body">I'm a developer.</h3>
						</div>
				</div>
			</motion.div>
		</div>
	);
}
export default Home;
