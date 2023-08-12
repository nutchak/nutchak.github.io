import { circOut, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import styles from '../styles/styles.js';

import ContentBox from './ContentBox.jsx';
import AnimatedBackground from './AnimatedBackground.jsx';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

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
function scrollToSection(id) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	} else {
		console.error(`Element with ID ${id} not found`);
	}
}

function ContactPage() {
	/* useEffect(() => {
		scrollToSection('contact');
	}, []); */
	return (
		<div id="contact" className={`${styles.container}`}>
			<motion.p className={`${styles.title}`}>Contact</motion.p>
			<motion.div
				id="contact-wrapper"
				className={`${styles.containerWrapper} bg-Trinidad`}
			>
				<div className="flex flex-col items-center justify-center">
					<div>
						<h2 className="text-3xl font-bold ">You can reach me at</h2>
					</div>
					<div className="py-4">
						<p className="py-4">Phone: +47 91 18 59 89</p>
						<p className="py-4">Email: nutchakirani@gmail.com</p>
						<p className="inline-flex gap-4 py-4">
							<span>
								<a href="https://www.linkedin.com/in/nutchak">
									<AiFillLinkedin />
								</a>
							</span>
							<span>
								<a href="https://github.com/nutchak">
									<AiFillGithub />
								</a>
							</span>
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default ContactPage;
