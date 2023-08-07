import React from 'react';
import NavBar from './Header';
import { motion } from 'framer-motion';

function Layout({ children }) {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center">
			{/* Navbar */}
			<nav className="">
				<NavBar />
			</nav>
			{/* Page content */}
			<motion.div
				initial={false ? { height: '0%' } : { y: '100%', opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.75, ease: 'easeInOut' }}
				exit={{ opacity: 0 }}
			>
				<main>{children}</main>
			</motion.div>
		</div>
	);
}

export default Layout;
