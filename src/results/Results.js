import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ bars }) => {
	return (
		<div class='results'>
			{bars.map((bar) => (
				<Link to={`/details/${bar.id}`} key={bar.id}>
					<h2 key={bar.id}>{bar.name}</h2>
				</Link>
			))}
		</div>
	);
};

export default Results;
