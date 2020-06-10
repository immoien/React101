const Pet = ({ name, animal, breed }) => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, name),
		React.createElement('h2', {}, animal),
		React.createElement('h2', {}, breed),
	]);
};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, 'Just a heading.'),
		React.createElement(Pet, {
			name: 'Halini',
			animal: 'Fish',
			breed: 'Rawas',
		}),
		React.createElement(Pet, {
			name: 'Gurba',
			animal: 'Cat',
			breed: 'Persian',
		}),
		React.createElement(Pet, {
			name: 'Musk',
			animal: 'Bird',
			breed: 'African Grey Parrot',
		}),
	]);
};
ReactDOM.render(React.createElement(App), document.querySelector('#root'));
