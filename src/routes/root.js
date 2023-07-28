import React from 'react';
import { Link, useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './home';
import About from './about';
import ErrorPage from './error';

export default function Root() {
	const element = useRoutes([
		{
			path: '/routes/home',
			element: <Home />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/routes/about',
					element: <About />,
					errorElement: <ErrorPage />,
				},
			],
		},
	]);
	const location = useLocation();
	if (!element) return null;

	return (
		<AnimatePresence mode="wait" initial={false}>
			<div className="flex h-screen w-screen flex-col items-center justify-center bg-accent">
				<h1 className="text-9xl text-text">Root</h1>
				<h2 className="text-7xl">Hello world!</h2>
				<Link to="/routes/home">Home</Link>
				<motion.div
					className="h-24 w-24 bg-primary"
					animate={{
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 180, 180, 0],
						borderRadius: ['0%', '0%', '50%', '50%', '0%'],
					}}
					transition={{
						duration: 2,
						ease: 'easeInOut',
						times: [0, 0.2, 0.5, 0.8, 1],
						repeat: Infinity,
						repeatDelay: 1,
					}}
				/>
			</div>
			{React.cloneElement(element, { key: location.pathname })}
		</AnimatePresence>
	);
}
