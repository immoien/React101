import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
	return (
		<div>
			<h1>Just a heading</h1>
			<SearchParams />
		</div>
	);
};

render(<App />, document.querySelector('#root'));
