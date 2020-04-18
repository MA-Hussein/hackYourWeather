import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard.js';
import Button from './components/Button.js';
import Input from './components/Input.js';

const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const App = () => {
	const [ state, setState ] = useState('');
	const [ city, setCity ] = useState('Amsterdam');
	const [ isLoading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);
	const [ Value, setValue ] = useState('');

	useEffect(
		() => {
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
				.then((res) => res.json())
				.then((data) => {
					setState(data);
					setLoading(false);
				})
				.catch((err) => {
					console.log('error', err);
					setError(true);
					setLoading(false);
				});
		},
		[ city ]
	);
	const handelSearch = (e) => {
		setValue(e.target.value);
	};
	const handleButton = () => {
		setCity(Value);
	};

	return (
		<div className="App" >
			{error && <h1>Something went wrong</h1>}
			{isLoading && <h1>{isLoading && 'Loading...'}</h1>}
			<h1>Weather</h1>
			<div className="display-weather">
				<Input handelSearch={handelSearch} />
				<Button handelButton={handleButton} />
			</div>
			{state && (
				<WeatherCard
					name={state ? state.name : ''}
					country={state.sys ? state.sys.country : <h3> No cities searched for yet</h3>}
					main={state.weather ? state.weather[0].main : ''}
					description={state.weather ? state.weather[0].description : ''}
					minTemp={state.main ? state.main.temp_min : ''}
					maxTemp={state.main ? state.main.temp_max : ''}
					lat={state.coord ? state.coord.lat : ''}
					lon={state.coord ? state.coord.lon : ''}
				/>
			)}
		</div>
	);
};

export default App;