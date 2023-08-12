import React, { useState } from 'react';
import { AnimatePresence, circOut, motion } from 'framer-motion';
import projectsData from '../data/projectsData.js';
import styles from '../styles/styles.js';
import AnimatedBackground from './AnimatedBackground.jsx';
import Card from './Card.jsx';
import '../App.css';
import ReactPlayer from 'react-player';
import { AiFillGithub } from 'react-icons/ai';


/*

	const [selectedTab, setSelectedTab] = useState(projectsData[0]);

	return (
		<AnimatedBackground
			initial={{ y: '100vh' }}
			animate={{ y: '0vh' }}
			exit={{ y: '100vh', opacity: 1 }}
			className={`${styles.background} bg-background-l`}
		>
			TODO: Change the name to contentbox (or better name that describes the component)

			<Card
				title="projects"
				color="bg-white"
				children={
					<div
						id="project-wrapper"
						className="flex flex-auto p-4 text-text-l"
					>
						<div
							id="project-title-wrapper"
							className="w-2/4 flex-auto list-none p-6"
						>
							<ul id="left" className="p-6 text-4xl">
								{projectsData.map((project) => (
									<motion.li
										key={project.title}
										animate={{}}
										transition={{ duration: 0.2 }}
										className={
											project === selectedTab
												? `${project.color} text-5xl transition-colors`
												: ''
										}
										onClick={() => setSelectedTab(project)}
									>
										{`${project.category}`}

										{project === selectedTab ? (
											<motion.div className={`bg-accent-l`}></motion.div>
										) : null}
									</motion.li>
								))}
							</ul>
						</div>
						<div
							id="project-content"
							className="flex w-3/4 p-6"
						>
							<AnimatePresence mode="wait">
								<motion.div
									key={selectedTab ? selectedTab.title : 'empty'}
									initial={{ y: 10, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -10, opacity: 0 }}
									transition={{ duration: 0.2 }}
									className="p-6 font-mono text-2xl"
								>
									<div className="">
										<p className="pb-4 text-fontxl">
											{selectedTab ? selectedTab.title : ''}
										</p>
										<p className="py-4">
											{selectedTab ? selectedTab.description : ''}
										</p>
										<p className="py-4">
											{selectedTab ? selectedTab.link : ''}
										</p>
										<p>
											<img src=".././assets/github-mark.svg" alt="github-logo" />
											
										</p>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				}
			/>
		</AnimatedBackground>

 */

const Projects = () => {
	const [selectedTab, setSelectedTab] = useState(projectsData[0]);
	return (
		<div id="projects" className={`${styles.container}`}>
			<motion.p
				initial={`text: self-start`}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 9 }}
				className={`${styles.title}`}
			>
				Projects
			</motion.p>
			<motion.div
				id="about-wrapper"
				className={`${styles.containerWrapper} bg-ButterCup `}
			>
				<motion.div className="flex flex-col gap-8 lg:flex-row">
					<div id="project-title-wrapper" className="w-2/4 flex-auto list-none">
						<ul id="left" className="text-2xl lg:text-3xl">
							{projectsData.map((project) => (
								<motion.li
									key={project.title}
									animate={{}}
									transition={{ duration: 0.2 }}
									className={
										project === selectedTab
											? `${project.color} text-3xl transition-colors lg:text-5xl`
											: ''
									}
									onClick={() => setSelectedTab(project)}
								>
									<h2 className="py-2">{`${project.category}`}</h2>

									{project === selectedTab ? (
										<motion.div className={`bg-accent-l`}></motion.div>
									) : null}
								</motion.li>
							))}
						</ul>
					</div>
					<div id="project-content" className="flex  w-3/4">
						<AnimatePresence mode="wait">
							<motion.div
								key={selectedTab ? selectedTab.title : 'empty'}
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -10, opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="font-mono text-2xl"
							>
								<div className="">
									<h3 className="pb-4 text-2xl lg:text-3xl">
										{selectedTab ? selectedTab.title : ''}
									</h3>
									<div className="min-h-max py-4 text-base lg:text-xl">
										<p className="">
											{selectedTab ? selectedTab.description : ''}
										</p>

										<p className="pt-8">
											<a href={selectedTab.link}>
												<AiFillGithub />
											</a>
										</p>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Projects;
