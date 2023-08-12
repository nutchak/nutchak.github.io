const projects = [
	{
		title: 'Travelling salesman problem',
		category: 'Machine Learning',
		description: [
			'I implement search algorithms, such as exhausive search and hill climbing.',
			' Genetic algorithm is also implemented to solve the problem with different approaches.',
			' The code is written in Python. Pandas is used to handle dataframes. Matplotlib is used to plot the results.',
		],
		link: 'https://github.com/nutchak/travelling-salesman-problem.git' /* TODO: Create repository for this projects */,
		language: 'Python',
		algorithms: ['Exhausive search', 'Hill climbing'],
		Tools: ['Pandas', 'Matplotlib'],
		color: 'bg-CeruleanBlue',
	},
	{
		title:
			'Causal inference of the "real wage" gap between immigrants and non-immigrants in the United States.',
		category: 'Data Sciences',
		description:
			'The aim of the project was to identify causal relationships leading to wage gaps between immigrants and non-immigrants in the data from the 2019 Current Population Survey (CPS). The project is written in R, using the packages dplyr, ggplot2, and KableExtra.',
		link: 'https://nutchak.github.io/causal-inference-wage-gap/',
		language: 'R' /* TODO: Make the repository readable(?) */,
		algorithms: [],
		Tools: ['DataTables', 'ggplot2', 'dplyr', 'KableExtra'],
		color: 'bg-CaribbeanGreen',
	},
	{
		title: 'My personal website',
		category: 'Web Development',
		description: [
			'You are looking at it: My personal website!',
			'I chose to use the React framework to make this website, and to host it on GitHub Pages. In this project I have written JavaScript, HTML, and CSS with the goal of making a responsive web page. The project is documented in this README.md.',
			'The documentation of the web development is in the README.md',
		],
		link: 'https://github.com/nutchak/nutchak.github.io',
		language: ['JavaScript', 'HTML', 'CSS'],
		algorithms: [],
		Tools: ['VS Code', 'GitHub Pages'],
		color: 'bg-Trinidad',
	},
];

export default projects;
