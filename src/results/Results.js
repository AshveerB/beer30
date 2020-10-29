import React, { useState, useEffect } from 'react';

const Results = () => {
	const [bars, setBars] = useState([]);
	useEffect(() => {
		const url =
			'https://api.openbrewerydb.org/breweries/search?query=Santa_Rosa';
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				console.log(resJson);
				setBars(resJson);
			})
			.catch(console.error);
		//  return () => {
		// 	 cleanup
		//  }
	}, []);
	return (
		<div>
			Results
			{bars.map((bar) => (
				<h2 key={bar.id}>
					{bar.name}
					<br />
					{bar.street}
					<br />
					{bar.website_url}
				</h2>
			))}
		</div>
	);
};

export default Results;
