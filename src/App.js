import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
	return (
		<div>
			<h1>Just a heading</h1>
			<Pet name="Halini" animal="Fish" breed="Rawas" />
			<Pet name="Gurba" animal="Cat" breed="Persian" />
			<Pet name="Musk" animal="Bird" breed="African Grey Parrot" />
		</div>
	);
};

render(<App />, document.querySelector('#root'));
