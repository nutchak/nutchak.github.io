import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
	NavLink,
	Outlet,
	BrowserRouter,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import NavBar from './components/NavBar';
import Home from './routes/Home';

import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';

import { BackgroundColorProvider } from './contexts/BackgroundColorContext';
import Card from './components/Card';
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import { Footer } from './routes/Footer';

import { useRouteError } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';

function LocationProvider({ children }) {
	return <AnimatePresence>{children}</AnimatePresence>;
}

/**
 * <BackgroundColorProvider>
			<Routes location={location} key={location.key}>
				<Route index element={<FrontPage />} />
				<Route index element={<Home />} />
				<Route path="/education" element={<Education />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BackgroundColorProvider>
 */

/* function AnimatedRoute() {
	const location = useLocation();

	return (
		<BrowserRouter>
			<Routes location={location} key={location.key}>
				<Route index element={<FrontPage />} />
				<Route index element={<Home />} />
				<Route path="/education" element={<Education />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);

	<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
} */

export default function App() {
	const location = useLocation();

	return (
		<div>
			<div className="flex w-full flex-col items-center bg-CodGrey text-Concrete">
				{/* <CustomCursor /> */}
				<NavBar />
				<Outlet />
				<Footer />
				{/* <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes> */}
			</div>
		</div>
	);
}
