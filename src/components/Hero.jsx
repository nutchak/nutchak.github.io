import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedTextCharacter from '../scripts/AnimatedTextCharacter';
const texts = ['Hello World!', 'Welcome to the Shuffle Effect!', 'Enjoy!'];

const ShufflingText = () => {
	const [textIndex, setTextIndex] = useState(0);
	const [shuffledText, setShuffledText] = useState('');
	const [originalText, setOriginalText] = useState(texts[textIndex]);

	useEffect(() => {
		let interval;

		if (shuffledText !== originalText) {
			let currentIndex = 0;
			interval = setInterval(() => {
				if (currentIndex >= originalText.length) {
					clearInterval(interval);
					setShuffledText(originalText);
				} else {
					setShuffledText(
						(prevShuffle) =>
							prevShuffle.slice(0, currentIndex) +
							originalText[currentIndex] +
							shuffleString(prevShuffle.slice(currentIndex + 1)),
					);
					currentIndex++;
				}
			}, 100);
		} else {
			setTimeout(() => {
				setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
				setOriginalText(texts[(textIndex + 1) % texts.length]);
				setShuffledText(shuffleString(originalText));
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [shuffledText, originalText]);

	function shuffleString(string) {
		const chars = string.split('');
		for (let i = chars.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[chars[i], chars[j]] = [chars[j], chars[i]];
		}
		return chars.join('');
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<p>{shuffledText}</p>
		</motion.div>
	);
};

export default function Hero() {
	// create loading screen ->
	// create blank canvas -> color
	// create animated welcome text
	// create animated navigation down arrow
	// create transition from hero to home page

	const text = 'Hello, World!';
	const letters = text.split('');

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.1 }}
			exit={{ translateY: 100, opacity: 0 }}
			className={`flex h-screen w-full flex-col items-center justify-center text-center font-mono text-display`}
		>
			<h1>
				<AnimatedTextCharacter text={text} fontSize="10rem" />
			</h1>

			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.1 }}
				exit={{ translateY: 100, opacity: 0 }}
				whileHover={{ scale: 1.2 }}
				className={`bg-Deco p-4`}
			>

					<p className={`text-5xl`}>Let's go!</p>

			</motion.button>
		</motion.div>
	);
}
