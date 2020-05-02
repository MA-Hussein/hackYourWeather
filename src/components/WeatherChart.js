import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Recharts = () => {
    const history = useHistory();
    const backBtn = () => history.goBack();
	const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
	const { id } = useParams();
	const [ data, setData ] = useState([]);
	const [ city, setCity ] = useState('');
	const [ isLoading, setLoading ] = useState(false);
	const [ hasError, setError ] = useState(false);

	const getData = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${APIKEY}&units=metric`
			);
			const json = await response.json();
			setData(json);
			setCity(json.city);
			setLoading(false);
		} catch (err) {
			console.log(err);
			setError(true);
			setLoading(false);
		}
	};
	useEffect(
		() => {
			getData();
        }, 
        // eslint-disable-next-line
		[ id ]
	);

	return (
		<div className="recharts">
			<h2>{city.name}</h2>
			{isLoading && <h2>Loading...</h2>}
			{hasError && <h2>Something went wrong...</h2>}

			<ResponsiveContainer width="100%" height={400}>
				<AreaChart data={data.list}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="dt_txt" />
					<YAxis dataKey="main.temp" />
					<Tooltip />
					<Area type="monotone" dataKey="main.temp" name="temp" stroke="#96A8AC" fill="#82BFDB" />
				</AreaChart>
			</ResponsiveContainer>
			<button  className="backBtn" onClick={backBtn} style={{ fontSize: '16px', marginLeft: '40px' }}>
                Back
            </button>
		</div>
	);
};

export default Recharts;