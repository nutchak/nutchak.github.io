import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { easeInOut, motion, useScroll } from 'framer-motion';

const Button = ({ page, text }) => {
	return (
		<motion.button>
			<button className="text-text rounded-full bg-NewOrleans text-EbonyClay px-4 py-2 text-m font-bold">
				<Link to={page}>{text}</Link>
			</button>
		</motion.button>
	);
};

export default Button;
