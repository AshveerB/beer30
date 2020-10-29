import React from 'react';

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
					{bar.website_url}
				</h2>
			))}
		</div>
	);
};

export default Results;
