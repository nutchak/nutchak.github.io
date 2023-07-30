import React from 'react';
import { Link } from 'react-router-dom';
import { circOut, motion, useScroll } from 'framer-motion';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import routeVariants from '../styles/variants.js';
import styles from '../styles/styles.js';
import ContentBox from '../components/ContentBox';
import AnimatedBackground from '../components/AnimatedBackground';

function Home() {
	return (
		/* Background */
		<AnimatedBackground
			initial={{ y: '100vh' }}
			animate={{ y: '0vh' }}
			transition={{ duration: 1, ease: circOut }}
			exit={{ y: '100vh', opacity: 1 }}
			className="left-0 top-0 m-0 flex h-screen items-center justify-center bg-NewOrleans p-0"
		>
			{/* Card */}
			<div
				id="card"
				className="my-40 flex w-4/5 flex-col items-center justify-center border-2 border-black bg-secondary-l p-8"
			>
				<h1 className="font-mono text-heading">Home</h1>
				{/* Content box */}

				<ContentBox />
			</div>
		</AnimatedBackground>
	);
}
export default Home;
