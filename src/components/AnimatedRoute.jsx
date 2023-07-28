import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../routes/About';
import FrontPage from '../routes/FrontPage';
import Home from '../routes/Home';
import Education from '../routes/Education';
import Projects from '../routes/Projects';
import Contact from '../routes/Contact';
import { AnimatePresence } from 'framer-motion';
import NavBar from './NavBar';

/* function LocationProvider({ children }) {
	const location = useLocation();
	return <AnimatePresence>{children}</AnimatePresence>
}

export default function AnimatedRoute() {
	const location = useLocation();
	return (
			<Routes location={location} key={location.key}>
				<Route path="/" element={<FrontPage />} />
				<Route path="/" element={<Home />} />
				<Route path="/education" element={<Education />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
	);
} */
