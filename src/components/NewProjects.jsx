import React, { useState } from 'react';
import projectsData from '../data/projectsData';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/styles';
import { AiFillGithub } from 'react-icons/ai';



export default function NewProjects() {
	const [selectedTab, setSelectedTab] = useState(projectsData[0]);
	const [open, setOpen] = useState(false);

    const toggle = () => {
			setOpen(!open);
			return (
				<div>
					<button onClick={toggle}>Toggle</button>
					{open && <div>HEEEEEEEEEEEy</div>}
				</div>
			);
		};

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
				className={`${styles.containerWrapper} list-none bg-ButterCup`}
			>
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

						{/* {project === selectedTab ? (
							<motion.div className={`bg-accent-l`}></motion.div>
						) : null} */}
					</motion.li>
				))}
				<div>
					{selectedTab && (
						<div className="">
							<h3 className="pb-4 text-2xl lg:text-3xl">
								{selectedTab ? selectedTab.title : ''}
							</h3>
							<div className="min-h-max py-4 text-base lg:text-xl">
								<p className="">{selectedTab ? selectedTab.description : ''}</p>

								<p className="pt-8">
									<a href={selectedTab.link}>
										<AiFillGithub />
									</a>
								</p>
							</div>
						</div>
					)}
				</div>
			</motion.div>
		</div>
	);
}
