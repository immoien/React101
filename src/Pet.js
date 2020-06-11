import React from 'react';
export default function Pet({ animal, name, breed, media, location, id }) {
	let hero = 'https://via.placeholder.com/300x300';
	if (media.length) {
		hero = media[0].small;
	}

	return (
		<a href={`/details/${id}`} className="pet">
			<div className="image-container">
				<img src={hero} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</a>
	);
}
