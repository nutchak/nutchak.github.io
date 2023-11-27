import React, { useEffect } from 'react';
import { circOut, motion, useScroll } from 'framer-motion';
import styles from '../styles/styles.js';

function Home() {
	return (
		<div id="home" className={`${styles.container} pt-12 lg:pt-16`}>
			<motion.p
				initial={{ x: 0, opacity: 1 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: circOut }}
				className={`${styles.title}`}
			>
				Home
			</motion.p>
			<motion.div
				id="container"
				className={`${styles.containerWrapper} bg-CeruleanBlue`}
			>
				<h3 className="text-2xl">Hello, I'm</h3>
				<h2 className="py-4 font-staatliches text-4xl text-text-d lg:text-9xl">
					Nutcha Kiraniphonphan
				</h2>
				<h3 className="text-base">an inspiring developer✨</h3>
			</motion.div>
		</div>
	);
}
export default Home;
