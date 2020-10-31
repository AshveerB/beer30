import React from 'react';
import PhoneNumber from 'react-phone-number';

const Results = ({ bars }) => {
	return (
		<div>
			Results
			{bars.map((bar) => (
				<h2 key={bar.id}>
					{bar.name}
					<br />
					{bar.street}
					<br />
					{bar.brewery_type}
					<br />
					{bar.city}, {bar.state}
					<br />
					{bar.postal_code}
					<br />
					<a href={bar.website_url} target='_blank' rel='noreferrer'>
						{bar.website_url}
					</a>
					<br />
					<PhoneNumber number={bar.phone} isLinked={true} />
					<br />
					{bar.country}
				</h2>
			))}
		</div>
	);
};

export default Results;
//referenced https://www.npmjs.com/package/react-phone-number/v/1.3.1
