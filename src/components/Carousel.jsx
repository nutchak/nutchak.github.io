import React from 'react';
import { motion } from 'framer-motion';

export default function Carousel({ images }) {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === images.length ? 0 : prevIndex + 1,
		);
	};
	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
		);
	};
	const handleDotClick = (index) => {
		setCurrentIndex(index);
	};
}
