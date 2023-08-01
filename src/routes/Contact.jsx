import { circOut, motion } from 'framer-motion';
import React from 'react';
import routeVariants from '../styles/variants.js';
import styles from '../styles/styles.js';
import ContentBox from '../components/ContentBox.jsx';
import AnimatedBackground from '../components/AnimatedBackground';

function Contact() {
	return (
		/* Background */
		<AnimatedBackground
            initial={{ y: '100vh' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="left-0 top-0 m-0 flex h-screen items-center justify-center bg-secondary-l p-0"
        >
			{/* Card */}
			<div
				id="card"
				className="my-40 flex w-4/5 flex-col items-center justify-center border-2 border-black bg-secondary-l p-8"
			>
				<h1 className="font-mono text-heading">Contact</h1>
				{/* Content box */}

				<ContentBox />
			</div>
		</AnimatedBackground>
	);
}

export default Contact;
