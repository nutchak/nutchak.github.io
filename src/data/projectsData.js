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
			'Causal inference of Real wage gaps between immigrants and non-immigrants in the United States in 2019.',
		category: 'Data Sciences',
		description:
			'The purpose of the project is to find causal inferences. The data is from the Current Population Survey (CPS) in 2019. The project is written in R. The packages used are dplyr, ggplot2, and KableExtra.',
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
			'The framework chosen for this project is React. The website is hosted on GitHub Pages. The code is written in JavaScript, HTML, and CSS. The website is responsive.(?)',
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
