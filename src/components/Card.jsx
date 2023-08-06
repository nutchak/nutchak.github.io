import React from 'react';
import ContentBox from './ContentBox';

/* Card inside the page content */
export default function Card({ title, color, children }) {
	return (
		<>
			<h1 className="flex-end flex font-mono text-display">
				{title.toUpperCase()}
			</h1>
			<div
				className={`my-40 flex h-4/5 w-4/5 flex-col flex-auto border-2 border-FrenchRose p-8 ${color}`}
			>
				{/* Content box */}
				{children}
			</div>
		</>
	);
}
