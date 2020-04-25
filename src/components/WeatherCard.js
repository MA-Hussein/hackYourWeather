import React from 'react';

const WeatherCard = ({ props, deleteItem }) => {
	const kelvinToCelcius = (kelvin) => {
		return (kelvin - 273).toFixed(2);
	};
	return (
		<div className="main">
			<h3>
				{props.name} {props.sys.country}
			</h3>
			<button className="deleteBtn" onClick={() => deleteItem(props.id)}>
				X
			</button>
			<div className="weatherMain">
				<h5>{props.weather[0].main}</h5>
				<p> {props.weather[0].description} </p>
			</div>

			<p> min temp: {kelvinToCelcius(props.main.temp_min)} °C </p>
			<p> max temp: {kelvinToCelcius(props.main.temp_max)} °C </p>
			<p>
				location: {props.coord.lat} {props.coord.lon}
			</p>
		</div>
	);
};
export default WeatherCard;