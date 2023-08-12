import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

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
	const isInView = useInView(ref, { once: true });

	return (
		<motion.section ref={ref}
		initial={{ opacity: 0 }}
		animate={{ translateY: isInView ? 0 : 100, opacity: isInView ? 1 : 0}}
		transition={{ duration: 1}}>

				{children}

		</motion.section>
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
