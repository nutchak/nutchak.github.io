import React, { useState } from "react";
import { motion } from "framer-motion";
import nav from "../data/navData";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const variants = {
	open: {
		clipPath: 'circle(100px at 200px 200px)',
		opacity: 1,
		transition: { duration: 0.5, staggerChildren: 0.1 },
	},
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		opacity: 0,
		transition: { ease: 'linear' },
	},
};


export default function Navigation() {
	const [selectedTab, setSelectedTab] = useState(nav[0]);
	const [isOpen, setIsOpen] = useState(false);
    return (
			<div className="h-auto w-screen font-staatliches text-8xl flex flex-col">
				<motion.nav
					initial={false}
					animate={isOpen ? 'open' : 'closed'}
					id="menu-burger"
					className={`z-50 flex h-40 w-40 items-center justify-center bg-CaribbeanGreen`}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
					{isOpen ? <nav className=" bg-Deco ">
						<ul>
							<motion.li >
								<a href="#home">home</a>
							</motion.li>
							<li>
								<a href="#about">about</a>
							</li>
							<li>
								<a href="#projects">projects</a>
							</li>
							<li>
								<a href="#contact">contact</a>
							</li>
						</ul>
					</nav>: ""}
				</motion.nav>
			</div>
		);
}