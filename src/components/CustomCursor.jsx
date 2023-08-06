import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


/**
 * Custom cursor component
 * When hovering over a link, the cursor will change color
 * 
 * @returns {JSX.Element}
 */
export default function CustomCursor() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	/* console.log(location);
	console.log(location.pathname);
	console.log(location.key);
	console.log(location.state); */
	const [cursorVariant, setCursorVariant] = useState('default');

	useEffect(() => {
		const mouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', mouseMove);
		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
			backgroundColor: '#F291D0',
		},
		text: {
			height: 150,
			width: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			mixBlendMode: 'difference',
		},
	};

	const textEnter = () => setCursorVariant('text');
	const textLeave = () => setCursorVariant('default');

	return (
		<div onMouseEnter={textEnter} onMouseLeave={textLeave}>
			<motion.div
				id="cursor"
				variants={variants}
				animate={cursorVariant}
				className=""
			></motion.div>
		</div>
	);
}
