import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/styles.js';

export default function NavBar() {
	return (
		<nav className="absolute w-full z-50 flex items-center justify-between px-6 py-4 font-mono text-2xl sm:px-16 sm:py-12">
			<NavLink to="/home" className="">
				Home
			</NavLink>
			<NavLink to="/education" className="">
				Education
			</NavLink>
			<NavLink to="/projects" className="">
				Projects
			</NavLink>
			<NavLink to="/about" className="">
				About
			</NavLink>
			<NavLink to="/contact" className="">
				Contact
			</NavLink>
		</nav>
	);
}
