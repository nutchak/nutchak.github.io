import React from 'react';
import ContentBox from './ContentBox';

/* Card inside the page content */
export default function Card({ title, children }) {
	return (
		<div
			id="card"
			className="my-40 flex w-4/5 flex-col items-center justify-center border-2 border-black bg-secondary-l p-8"
		>
			<h1 className="font-mono text-heading">{title}</h1>
			{/* Content box */}
			{children}
		</div>
	);
}
