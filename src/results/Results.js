import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css'

const Results = ({ bars }) => {
	return (
		<div class='results'>
			{bars.map((bar) => (
				<Link to={`/details/${bar.id}`} key={bar.id}>
					<h2 key={bar.id} className='bar hvr-grow'>{bar.name}</h2>
				</Link>
			))}
		</div>
	);
};

export default Results;
