import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	useLocation,
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

function App() {
	return (
		<div className="grid w-full grid-cols-1 items-center bg-background-d text-Concrete">
			<Header />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
export default App;
