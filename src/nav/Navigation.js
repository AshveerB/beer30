import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
			<div className='navigation'>
				<span class='homeBtn hvr-grow'>
					<Link to='/home'>Home</Link>
				</span>
				<span class='searchBtn hvr-grow'>
					<Link to='/search'>Search</Link>
				</span>
			</div>
		);
};

export default Navigation;