import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
			<div>
				<span class='homeBtn'>
					<Link to='/home'>Home</Link>
				</span>
				<span class='searchBtn'>
					<Link to='/search'>Search</Link>
				</span>
			</div>
		);
};

export default Navigation;