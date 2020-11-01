import React, { useState, useEffect } from 'react';
import PhoneNumber from 'react-phone-number';

const Details = ({ match }) => {
	const [bar, setBars] = useState('')
	const api = 'https://api.openbrewerydb.org/breweries/';
	const endPoint = `${match.params.id}`
	const url = `${api}${endPoint}`
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				setBars(resJson);
			});
	}, [url]);
	console.log(bar);
	return (
		<div>
			{bar?.name}
			<br />
			{bar?.street}
			<br />
			{bar?.brewery_type}
			<br />
			{bar?.city}, {bar?.state}
			<br />
			{bar?.postal_code}
			<br />
			<a href={bar?.website_url} target='_blank' rel='noreferrer'>
				{bar?.website_url}
			</a>
			<br />
			<PhoneNumber number={bar?.phone} isLinked={true} />
			<br />
			{bar?.country}
		</div>
	);
};

export default Details;
//referenced https://www.npmjs.com/package/react-phone-number/v/1.3.1
