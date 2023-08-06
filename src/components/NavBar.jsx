import React, { useState, useEffect } from 'react';
import {
	useAnimate,
	stagger,
	motion,
	AnimateSharedLayout,
	AnimatePresence,
} from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from '../styles/styles.js';

const nav = [
	{
		name: 'Home',
		path: '/',
		color: 'bg-CeruleanBlue',
	},
	{
		name: 'About',
		path: '/about',
		color: 'bg-CaribbeanGreen',
	},
	/* {
		name: 'Education',
		path: '/education',
		color: 'CeruleanBlue',
	}, */
	{
		name: 'Projects',
		path: '/projects',
		color: 'bg-ButterCup',
	},
	{
		name: 'Contact',
		path: '/contact',
		color: 'bg-Trinidad',
	},
];

export default function NavBar() {
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(nav[0]);

	return (
		<motion.nav className="sticky top-0 z-40 flex h-auto w-full items-center justify-between font-inter text-xl font-bold xl:px-32 xl:py-4 bg-CodGrey">
			<div className="">
				<Link to="/" className="inline-flex list-none xl:px-10">
					<h1 className="">BY NUTCHA</h1>
				</Link>
			</div>
			<div className="">
				{nav.map((navItem) => (
					<NavLink
						key={navItem.name}
						to={navItem.path}
						className={`inline-flex list-none xl:px-10 `}
						onClick={() => setSelectedTab(navItem)}
					>
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							className={navItem === selectedTab ? `${navItem.color}` : ''}
						>
							{navItem.name.toUpperCase()}
						</motion.li>
					</NavLink>
				))}
			</div>
		</motion.nav>
	);
}

/**
 * 
 * <div className="">
				<li className="list-none">
					<a href="/" className="inline-flex list-none xl:px-10">
						<h1 className="">BY NUTCHA</h1>
					</a>
				</li>
				<Link to="/" className="inline-flex list-none xl:px-10">
					<h1 className="">BY NUTCHA</h1>
				</Link>
			</div>
			<div className="">
				{nav.map((navItem) => (
					<ul className="" >
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							className={navItem === selectedTab ? `${navItem.color}` : ''}
						>
							<a
								href={`${navItem.path}`}
								onClick={() => setSelectedTab(navItem)}
							>
								{navItem.name.toUpperCase()}
							</a>
						</motion.li>
					</ul>
				))}
			</div>
 * 
 */

/**
div className="">
				<Link to="/" className="inline-flex list-none xl:px-10">
					<h1 className="">BY NUTCHA</h1>
				</Link>
			</div>
			<div className="">
				{nav.map((navItem) => (
					<NavLink
						key={navItem.name}
						to={navItem.path}
						className={`inline-flex list-none xl:px-10 `}
						onClick={() => setSelectedTab(navItem)}
					>
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							className={navItem === selectedTab ? `${navItem.color}` : ''}
						>
							{navItem.name.toUpperCase()}
						</motion.li>
					</NavLink>
				))}
			</div>


 */


				/* <Link
						key={navItem.name}
						to={navItem.path}
						className={`inline-flex list-none xl:px-10 `}
						onClick={() => setSelectedTab(navItem)}
					>
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							className={navItem === selectedTab ? `${navItem.color}` : ''}
						>
							{navItem.name.toUpperCase()}
						</motion.li>
					</Link> */

