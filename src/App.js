import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
	const themeHook = useState('darkblue');
	return (
		<React.StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<div>
					<header>
						<Link to="/">Just a heading</Link>
					</header>
					<Router>
						<SearchParams path="/" />
						<Details path="/details/:id" />
					</Router>
				</div>
			</ThemeContext.Provider>
		</React.StrictMode>
	);
};

render(<App />, document.querySelector('#root'));
