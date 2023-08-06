import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import degreeData from '../data/degreeData.js';

export default function ContentBox() {
	const [selectedTab, setSelectedTab] = useState(degreeData[0]);

	return (
		<div
			id="content"
			className=" bg-white"
		>
			<nav id="content-nav" className="bg-Deco ">
				<ul className="m-0 grid grid-cols-2 justify-items-center p-0">
					{degreeData.map((degree) => (
						<li
							key={degree.degreeName}
							className=" font-mono text-nav"
							onClick={() => setSelectedTab(degree)}
						>
							{`${degree.degreeName}`}
							{degree === selectedTab ? (
								<motion.div
									initial={{ scale: 1 }}
									whileFocus={{ scale: 1.1 }}
								/>
							) : null}
						</li>
					))}
				</ul>
			</nav>
			<main>
				<AnimatePresence mode="wait">
					<motion.div
						key={selectedTab ? selectedTab.degreeName : 'empty'}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="font-mono text-2xl"
					>
						{selectedTab ? selectedTab.degreeName : '😋'}
						{selectedTab ? selectedTab.degreeInformation : '😋'}
						{selectedTab ? selectedTab.degreeText : '😋'}
					</motion.div>
				</AnimatePresence>
			</main>
		</div>
	);
}
