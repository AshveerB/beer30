import React from 'react';
import ReactPlayer from 'react-player';
import './Home.css'

const Home = () => {
	return (
		<div class='home'>
			<span class='welcome'>Welcome To Beer30!</span>
			<span class='video'>
				<ReactPlayer url='https://www.youtube.com/watch?v=VuMwpfqHyZ0' width='350px'/>{' '}
			</span>
			<h2 className='howTo'>
				Click Search To Find Your Favorite Brewery By Name! Or Get A List Of
				Breweries By Zip Code, City Or State!
			</h2>
		</div>
	);
};

export default Home;
