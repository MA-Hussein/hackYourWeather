import React from 'react';

const WeatherCard = ({ name, country, main, description, minTemp, maxTemp, lat, lon }) => {
	const kelvinToCelcius = (kelvin) => {
		return (kelvin - 273).toFixed(2);
	};
	return (
		<div className="main">
			<h3>
				{name} {country}
			</h3>
			<div className="weatherMain">
				<h5>{main}</h5>
				<p> {description} </p>
			</div>
			<p> min temp: {kelvinToCelcius(minTemp)} °C </p>
			<p> max temp: {kelvinToCelcius(maxTemp)} °C </p>
			<p>
				location: {lat} {lon}
			</p>
		</div>
	);
};

export default WeatherCard;