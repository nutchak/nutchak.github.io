import React from 'react';
import { circOut, motion } from 'framer-motion';
import styles from '../styles/styles.js';
import ContentBox from './ContentBox.jsx';
import AnimatedBackground from './AnimatedBackground.jsx';
import Card from './Card.jsx';

const Education = () => {
	return (
		/* Background */
		<AnimatedBackground
			initial={{ y: '100vh' }}
			animate={{ y: '0vh' }}
			exit={{ y: '100vh', opacity: 1 }}
			className={`${styles.background} bg-CeruleanBlue`}
		>
			{/* #CDC526 */}
			<Card
				title="EDUCATION"
				color="bg-white"
				children={
					<div className="flex items-center justify-center">
						<ContentBox />
					</div>
				}
			/>
		</AnimatedBackground>
	);
};

export default Education;
