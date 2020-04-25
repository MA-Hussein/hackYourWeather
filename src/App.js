import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard.js';
import Button from './components/Button.js';
import Search from './components/Search.js';
import './App.css';

const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const App = () => {
	
	const [ cities, setCities ] = useState([]);
	const [ message, setMessage ] = useState(' No cities searched for yet... ');
	const [ isLoading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);
	const [ Value, setValue ] = useState('');

	const getCity = async (city) => {
		setLoading(true);
		setMessage('');
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
			if (response.ok) {
				const data = await response.json();
				const listItems = cities.filter((item) => item.id !== data.id);
				setCities([ data, ...listItems ]);
				setLoading(false);
				setError('');
			} else {
				setError('City name not found...');
				setLoading(false);
			}
		} catch (err) {
			console.log(err);
			setError('Something went wrong...');
		}
	};
	const handelSearch = (e) => {
		setValue(e.target.value);
	};
	const handleButton  = (e) => {
		e.preventDefault();
		getCity(Value);
	}
	const deleteItem = (id) => {
		const filterd = cities.filter((city) => city.id !== id);
		setCities(filterd);
	};

	return (
		<div className="App" >
			
			<h1>Weather</h1>
			
			<h3 className="message">{message}</h3>
			<div className="display-weather">
			<Search handelSearch={handelSearch} />
			 <Button handelButton={handleButton} />
			
			</div>

			{error && <h2 className="message">{error}</h2>}
			{isLoading && <h1> Loading...</h1>}
			<ul>{cities.map((city) => <WeatherCard props={city} key={city.id} deleteItem={deleteItem} />)}</ul>
		</div>
	);
};

export default App;