import React from 'react';
import './App.css';
import Home from './home/Home';
import Navigation from './nav/Navigation';
import Search from './search/Search';

function App() {
	return (
		<div className='App'>
			Beer30
			<Home />
			<Navigation />
			<Search />
		</div>
	);
}

export default App;
