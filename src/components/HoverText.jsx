import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function InvertColor(color) {
	return color === 'CornflowerBlue' ? '#F2F2F2' : 'CornflowerBlue';
}

/**
 * Custom cursor component
 * When hovering over a link, the cursor will change color
 * 
 * @param {string} text
 * @returns {JSX.Element}
 */
export default function HoverText({ text }) {

	const letters = Array.from(text);

	const [hovered, setHovered] = useState(false);

	return (
		<motion.div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="relative bg-Deco"
		>
			{letters.map((letter, index) => (
				<motion.span
					key={index}
					className="inline-block bg-Azalea3 font-display text-display"
					initial={{ y: 0 }}
					animate={{
						color: hovered ? '#F2F2F2' : 'CornflowerBlue',
						transition: {
							duration: 1,
							type: 'spring',
							damping: 12,
							stiffness: 100,
						},
					}}
				>
					{letter === ' ' ? '\u00A0' : letter}
				</motion.span>
			))}
		</motion.div>
	);
}
