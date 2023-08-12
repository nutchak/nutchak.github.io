import React from 'react';
import { Link, NavLink, useRouteError } from 'react-router-dom';

function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			{/* <Link to="/">Return to Home</Link> */}
		</div>
	);
}

export default Error;
