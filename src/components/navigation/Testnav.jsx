import { motion, useCycle } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const variants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const Testnav = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<motion.button
        initial={false}
			animate={isOpen ? 'open' : 'closed'}
			variants={variants}
			className="z-50 h-10 w-10 rounded-full bg-Deco"
		>
			M
		</motion.button>
	);
};
