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
import hams from '../assets/hams.mp4';

function Home() {
	return (
		/* Background */
		<AnimatedBackground
			initial={{ y: '100vh' }}
			animate={{ y: '0vh' }}
			exit={{ y: '100vh', opacity: 1 }}
			className={`${styles.background} bg-Illusion`}
		>
			{/* Card */}
			<div
				id="card"
				className="my-40 flex h-4/5 w-4/5 flex-col items-center justify-center border-2 bg-[#0D6E2F]"
			>
				{/* Content box */}

				<div className="grid h-4/5 grid-cols-2 grid-rows-1">
					<div className="grid grid-cols-1 grid-rows-2">
						<div className="flex flex-col justify-center lg:px-12">
							<h2 className="font-mono text-subheading">Hello!</h2>
							<h1 className="font-RobotoMono text-heading">I'm Nutcha</h1>
						</div>
						<p className="text-l align-center">
							I am a programmer with bachelor's degrees in{' '}
							<strong>Computer Science</strong> and <strong>Economics</strong>
							🎉.
							<br />I <strong>love</strong> Machine Learning and Econometrics.
							Why, you ask? Well, I love the idea of digging into heaps of data
							and finding those little golden nuggets of insight that can change
							the way we see things.
							<br />
							Feel free to stick around and check out my portfolio. It's where I
							showcase how I put my passion and degrees to work to decipher the
							fascinating stories data has to tell.
							<br />
							Enjoy the journey!
						</p>
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
	);
}
export default Home;
