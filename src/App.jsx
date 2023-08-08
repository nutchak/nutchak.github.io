import React, { useEffect, useRef, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	useLocation,
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import './App.css';
import Home from './routes/Home';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import NavBar from './components/Header';
import { Footer } from './routes/Footer';
import Header from './components/Header';

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

function Section({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<section ref={ref}>
			<span
				style={{
					transform: isInView ? 'none' : 'translateX(-200px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
				}}
			>
				{children}
			</span>
		</section>
	);
}


function App() {
	return (
		<div className="grid w-full grid-cols-1 items-center bg-background-d text-Concrete">
			<Header />
			<Section>
				<Home />
			</Section>

			<Section>
				<About />
			</Section>

			<Section>
				<Projects />
			</Section>

			<Section>
				<Contact />
			</Section>

			<Footer />
		</div>
	);
}
export default App;
