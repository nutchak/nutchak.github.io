import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
	Outlet,
} from 'react-router-dom';
/* import ReactDOM from 'react-dom/client'; */
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
); */

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

/* const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'home',
				element: <Home />,
				errorElement: <ErrorPage />,
			},
		],
	},
]); */

// 'root' route
ReactDOM.render(
	<React.StrictMode>
		<App />
		{/* <RouterProvider router={router} /> */}
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
