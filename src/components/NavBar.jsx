import React, { useState, useEffect } from 'react';
import {
	useAnimate,
	stagger,
	motion,
	AnimateSharedLayout,
	AnimatePresence,
} from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/styles.js';

const nav = [
	{
		name: 'Home',
		path: '/home',
		color: 'Illusion',
	},
	{
		name: 'About',
		path: '/about',
		color: 'ButterCup',
	},
	/* {
		name: 'Education',
		path: '/education',
		color: 'CeruleanBlue',
	}, */
	{
		name: 'Projects',
		path: '/projects',
		color: 'CaribbeanGreen',
	},
	{
		name: 'Contact',
		path: '/contact',
		color: 'Trinidad',
	},
];

export default function NavBar() {
	const [selectedTab, setSelectedTab] = useState(nav[0]);

	return (
		<motion.nav className="h-1/10 absolute z-50 flex w-full items-center justify-between border-2 border-black bg-white px-32 py-6 font-RobotoMono text-2xl">
			{nav.map((navItem) => (
				<NavLink
					key={navItem.name}
					to={navItem.path}
					className={`list-none border-2 border-black shadow-nav xl:px-4 xl:py-2 active:bg-${navItem.color} `}
					onClick={() => setSelectedTab(navItem)}
				>
					<motion.li
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						className={navItem === selectedTab ? `bg-Deco` : ''}
					>
						{navItem.name}
					</motion.li>
				</NavLink>
			))}
		</motion.nav>
	);
}