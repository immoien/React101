import React from 'react';

class Carousel extends React.Component {
	state = {
		photos: [],
		active: 0,
	};

	static getDerivedStateFromProps({ media }) {
		let photos = ['https://via.placeholder.com/600x600'];
		if (media.length) {
			photos = media.map(({ large }) => large);
		}
		return { photos };
	}

	handelIndexClick = (event) => {
		this.setState({
			active: +event.target.dataset.index,
		});
	};

	render() {
		const { photos, active } = this.state;

		return (
			<div className="carousel">
				<img src={photos[active]} alt="animal" />
				<div className="carousel-smaller">
					{photos.map((photo, index) => (
						// eslint-disable-next-line
						<img
							key={photo}
							onClick={this.handelIndexClick}
							data-index={index}
							src={photo}
							className={index === active ? 'active' : ''}
							alt="animal thubnail"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
