import React from 'react';

function scrollToSection(id) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

export default scrollToSection;