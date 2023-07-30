import React from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	Routes,
	useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Education from './routes/Education';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import FrontPage from './routes/FrontPage';

function LocationProvider({ children }) {
	return <AnimatePresence>{children}</AnimatePresence>;
}

function AnimatedRoute() {
	const location = useLocation();

	return (
		<Routes location={location} key={location.key}>
			<Route index element={<FrontPage />} />
			<Route path="/home" element={<Home />} />
			<Route path="/education" element={<Education />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default function App({ Components, pageProps }) {
	return (
		<div className="w-full overflow-hidden">
			<BrowserRouter>
				<NavBar />
				<LocationProvider>
					<AnimatedRoute />
				</LocationProvider>
			</BrowserRouter>
		</div>
	);
}
