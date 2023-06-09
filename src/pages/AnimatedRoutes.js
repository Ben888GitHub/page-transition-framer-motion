import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import FadeRoute from './FadeRoute';
import { AnimatePresence } from 'framer-motion';
function AnimatedRoutes() {
	const location = useLocation();
	return (
		// AnimatePresence is a must for every page
		<AnimatePresence exitBeforeEnter>
			<Routes key={location.pathname} location={location}>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/fade-route" element={<FadeRoute />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
