import React from 'react';

const Search = ({ handelSearch }) => {
	return (
		<div className="searchButton">
			<input type="text" onChange={handelSearch} placeholder="Search City..." />
		</div>
	);
};

export default Search;
