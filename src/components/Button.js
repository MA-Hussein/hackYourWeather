import React from 'react';

const Button = ({ handelButton }) => {
	return (
		<div className="searchInput">
			<button type="submit" value="submit" onClick={handelButton}>
				Search
			</button>
		</div>
	);
};

export default Button;