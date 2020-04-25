import React from 'react';
import { FaSearch } from 'react-icons/fa';
const Form = (props) => {
	return (
		<form onSubmit={props.getWeather}>
			<div className="inputbox">
				{' '}
				<FaSearch />
				<input type="text" placeholder="Search City" name="city" onChange={props.change} />
			</div>

			<button>Search</button>
		</form>
	);
};

export default Form;