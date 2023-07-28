import React from 'react';
import { circOut, motion } from 'framer-motion';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import routeVariants from '../styles/variants.js';
import styles from '../styles/styles.js';
import ContentBox from '../components/ContentBox';

const Education = () => {
	return (
		/* Background */
		<motion.div
			initial={{ y: '100vh' }}
			animate={{ y: '0vh' }}
			transition={{ duration: 1, ease: circOut }}
			exit={{ y: '100vh', opacity: 1 }}
			className="left-0 top-0 m-0 flex h-screen items-center justify-center bg-Sandybrown p-0"
		>
			{/* Card */}
			<div
				id="card"
				className="my-40 flex w-4/5 flex-col items-center justify-center border-2 border-black bg-secondary-l p-8"
			>
				<h1 className="font-mono text-heading">Education</h1>
				{/* Content box */}

				<ContentBox />
			</div>
		</motion.div>
	);
};

export default Education;
