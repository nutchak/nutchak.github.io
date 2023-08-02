import { circOut, motion } from 'framer-motion';
import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import styles from '../styles/styles.js';

import ContentBox from '../components/ContentBox.jsx';
import AnimatedBackground from '../components/AnimatedBackground';

function ContactPage() {
	return (
		/* Background */
		<AnimatedBackground
			initial={{ y: '100vh' }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
			className="left-0 top-0 m-0 flex h-screen items-center justify-center bg-secondary-l p-0"
		>
			{/* Card */}
			<Card
				title="contact"
				color=""
				children={
					<div className="flex h-4/5 w-4/5 flex-col items-center justify-center border-2 border-black">
						<h1 className="text-heading">Contact</h1>
						{/* SoMe icons */}
						<h2 className="py-8">You can reach me at</h2>
						<div>
							<p>Phone: +47 91 18 59 89</p>
							<p>Email: nutchakirani@gmail.com</p>
							<p>LinkedIn: www.linkedin.com/in/nutchak</p>
						</div>
					</div>
				}
			/>
		</AnimatedBackground>
	);
}

export default ContactPage;
