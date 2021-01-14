import React, { useState, useEffect } from 'react';
import PhoneNumber from 'react-phone-number';
import './Details.css'
// import GoogleMapReact from 'google-map-react';

const Details = ({ match }) => {
	const [bar, setBars] = useState('');
	const api = 'https://api.openbrewerydb.org/breweries/';
	const endPoint = `${match.params.id}`;
	const url = `${api}${endPoint}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				setBars(resJson);
			});
	}, [url]);
	// const location = {
	// 	address: bar?.street,
	// 	lat: bar?.latitude,
	// 	lng: bar?.longitude,
	// };
	return (
		<div class='details'>
			Name: {bar?.name}
			<br />
			Type of Bar: {bar?.brewery_type}
			<br />
			Address: {bar?.street}
			<br />
			{bar?.city}, {bar?.state}
			<br />
			{bar?.postal_code}
			<br />
			Website: <a href={bar?.website_url} target='_blank' rel='noreferrer'>
				{bar?.website_url}
			</a>
			<br />
			Phone Number: <PhoneNumber number={bar?.phone} isLinked={true} />
			<br />
			{bar?.country}
			{/* <GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.REACT_APP_GOOGLE_KEY,
					language: 'en',
					region: 'US',
				}}
				center={location}
				zoom= "8"
				>
					
				</GoogleMapReact> */}
		</div>
	);
};

export default Details;
//referenced https://www.npmjs.com/package/react-phone-number/v/1.3.1
