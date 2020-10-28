import React from 'react';
import './App.css';
import Home from './home/Home'
import { Route, Redirect } from 'react-router-dom';
import Navigation from './nav/Navigation'
import Search from './search/Search';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<main>
				<Route path='/home' exact component={Home} />
				<Route path='/search' component={Search} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
			</main>
		</div>
	);
}

export default App;
