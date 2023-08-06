import { circOut, motion } from 'framer-motion';
import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import styles from '../styles/styles.js';

import ContentBox from '../components/ContentBox.jsx';
import AnimatedBackground from '../components/AnimatedBackground';
import { AiFillLinkedin } from 'react-icons/ai';

/*
<AnimatedBackground
			initial={{ y: '100vh' }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
			className="left-0 top-0 m-0 flex h-screen items-center justify-center bg-secondary-l p-0"
		>

			<Card
				title="contact"
				color=""
				children={
					<div className="flex h-4/5 w-4/5 flex-col items-center justify-center border-2 border-black">
						<h1 className="text-heading">Contact</h1>

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

*/

function ContactPage() {
	return (
		<div className="flex w-full flex-col items-center justify-center font-sans xl:py-24">
			<motion.p className="self-end font-staatliches text-9xl">
				Contact
			</motion.p>
			<motion.div
				id="about-wrapper"
				className="w-4/5 flex flex-col items-center justify-center bg-Trinidad py-12 font-sans text-2xl xl:px-24"
			>
				<div>
					<h2 className="text-4xl">You can reach me at</h2>
				</div>
				<div className="py-4">
					<p className="py-4">Phone: +47 91 18 59 89</p>
					<p className="py-4">Email: nutchakirani@gmail.com</p>
					<p className="py-4">LinkedIn: www.linkedin.com/in/nutchak</p>
				</div>
			</motion.div>
		</div>
	);
}

export default ContactPage;
