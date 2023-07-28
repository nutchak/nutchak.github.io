import React from 'react';
import {
	animate,
	circInOut,
	circOut,
	motion,
	useIsPresent,
} from 'framer-motion';
import AnimatedTextWord from '../scripts/AnimatedTextWord';
import AnimatedTextCharacter from '../scripts/AnimatedTextCharacter';
import Button from '../components/Button';
import Card from '../components/Card';

function FrontPage() {
	const isPresent = useIsPresent();
	return (
		<motion.div
			initial={false}
			animate={{ y: '0vh' }}
			transition={{ duration: 1, ease: circOut }}
			exit={{ y: '100vh', opacity: 1 }}
			className="left-0 top-0 m-0 flex h-screen flex-col items-center justify-center bg-EbonyClay p-0 text-NewOrleans"
		>
			<AnimatedTextCharacter text="Hello, world!🎉" fontSize={'9rem'} />
			<div>
				<motion.button whileHover={{ scale: 1.2 }}>
					<Button page="/home" text="Welcome!" />
				</motion.button>
			</div>
		</motion.div>
	);
}

export default FrontPage;
