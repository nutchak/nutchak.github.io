import React, { useState, useEffect } from 'react';
import {
	useAnimate,
	stagger,
	motion,
	AnimateSharedLayout,
	AnimatePresence,
} from 'framer-motion';
import nav from '../data/navData';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const menu = {
	open: {
		opacity: 1,
		transition: { duration: 0.5, staggerChildren: 0.1 },
	},
	closed: { opacity: 0, transition: { ease: 'linear' } },
};

const burger = {};

const link = {
	/* hover: {scale: 1,
								textDecoration: 'underline',
,
								color: `${navItem.color}`,} */
};
/*
<svg viewBox="0 0 100 80" width="40" height="40" className="fill-current">
	<rect width="100" height="20"></rect>
	<rect y="30" width="100" height="20"></rect>
	<rect y="60" width="100" height="20"></rect>
</svg>; */

function Header() {
	const [selectedTab, setSelectedTab] = useState(nav[0]);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="sticky top-0 z-50 inline-flex h-12 w-full items-center justify-between bg-CodGrey px-16 py-1 font-inter text-xl font-bold lg:px-24 lg:py-2 lg:text-2xl">
			<li className="list-none">
				<a href="/#" className="">
					<h1 className="text-2xl lg:text-3xl">BY NUTCHA</h1>
				</a>
			</li>
			<motion.button
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				id="menu-burger"
				className={`z-50 flex h-10 w-10 items-center justify-center bg-CodGrey lg:hidden`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
			</motion.button>
			<motion.div

				initial={false}
				animate={isOpen ? menu.open : menu.closed}
				transition={{}}
				className={`absolute right-0 top-12 z-40 max-h-fit w-5/12 flex-col bg-CodGrey lg:hidden
				${isOpen ? `flex` : `hidden`}
				`}
			>
				{nav.map((navItem) => (
					<motion.ul
						key={navItem.name}
						initial={false}
						
						className={`flex flex-col justify-items-end bg-CodGrey px-4 py-2`}
						onClick={() => setSelectedTab(navItem)}
					>
						<motion.li
							whileHover={{
								
							}}
							className={`
							${navItem === selectedTab ? `${navItem.color}` : ''}`}
						>
							<a href={`#${navItem.path}`}>{navItem.name.toUpperCase()}</a>
						</motion.li>
					</motion.ul>
				))}
			</motion.div>

			<div className="hidden lg:block">
				{nav.map((navItem) => (
					<ul
						key={navItem.name}
						className={`inline-flex list-none items-center pl-8 xl:pl-12`}
						onClick={() => setSelectedTab(navItem)}
					>
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1 }}
							className={`${
								navItem === selectedTab ? `${navItem.color}` : ''
							}  `}
						>
							<a href={`#${navItem.path}`}>{navItem.name.toUpperCase()}</a>
						</motion.li>
					</ul>
				))}
			</div>
		</div>
	);
}

export default Header;

/* export default function NavBar() {
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(nav[0]);

	return (
		<motion.nav className="sticky top-0 z-40 flex h-auto w-full items-center justify-between font-inter text-xl font-bold xl:px-32 xl:py-4 bg-CodGrey">
			<div className="">
				<Link to="/" className="inline-flex list-none xl:px-10">
					<h1 className="">BY NUTCHA</h1>
				</Link>
			</div>
			<div className="">
				{nav.map((navItem) => (
					<NavLink
						key={navItem.name}
						to={navItem.path}
						className={`inline-flex list-none xl:px-10 `}
						onClick={() => setSelectedTab(navItem)}
					>
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							className={navItem === selectedTab ? `${navItem.color}` : ''}
						>
							{navItem.name.toUpperCase()}
						</motion.li>
					</NavLink>
				))}
			</div>
		</motion.nav>
	);
} */

/**
 * 
 * <div className="">
				<li className="list-none">
					<a href="/" className="inline-flex list-none xl:px-10">
						<h1 className="">BY NUTCHA</h1>
					</a>
				</li>
				<Link to="/" className="inline-flex list-none xl:px-10">
					<h1 className="">BY NUTCHA</h1>
				</Link>
			</div>
			<div className="">
				{nav.map((navItem) => (
					<ul className="" >
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							className={navItem === selectedTab ? `${navItem.color}` : ''}
						>
							<a
								href={`${navItem.path}`}
								onClick={() => setSelectedTab(navItem)}
							>
								{navItem.name.toUpperCase()}
							</a>
						</motion.li>
					</ul>
				))}
			</div>
 * 
 */

/**
div className="">
				<Link to="/" className="inline-flex list-none xl:px-10">
					<h1 className="">BY NUTCHA</h1>
				</Link>
			</div>
			<div className="">
				{nav.map((navItem) => (
					<NavLink
						key={navItem.name}
						to={navItem.path}
						className={`inline-flex list-none xl:px-10 `}
						onClick={() => setSelectedTab(navItem)}
					>
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							className={navItem === selectedTab ? `${navItem.color}` : ''}
						>
							{navItem.name.toUpperCase()}
						</motion.li>
					</NavLink>
				))}
			</div>


 */

/* <Link
						key={navItem.name}
						to={navItem.path}
						className={`inline-flex list-none xl:px-10 `}
						onClick={() => setSelectedTab(navItem)}
					>
						<motion.li
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							className={navItem === selectedTab ? `${navItem.color}` : ''}
						>
							{navItem.name.toUpperCase()}
						</motion.li>
					</Link> */
