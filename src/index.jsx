import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter,
	HashRouter,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

/* const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/about', element: <About /> },
	{ path: '/projects', element: <Projects /> },
	{ path: '/contact', element: <Contact /> },
]); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
