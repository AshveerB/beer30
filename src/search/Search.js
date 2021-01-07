import React, { useState } from 'react';
import Results from '../results/Results';

const Search = () => {
	const initialState = {
		searchBar: '',
	};
	const [formState, setFormState] = useState(initialState);

	const [bars, setBars] = useState([]);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const api = `https://api.openbrewerydb.org/breweries/search?query=`;
		const endPoint = formState.searchBar 
		const url = `${api}${endPoint}`
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				console.log(resJson);
				setBars(resJson);
			})
			.catch(console.error);
		
		setFormState(initialState);
	};
	
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchBar'>Enter Either Name/ Zip Code/ City/ State:  </label><br />
				<input
					id='searchBar'
					onChange={handleChange}
					value={formState.searchBar}
				/>
				<button type='submit'>Submit</button>
			</form>
			Click On Brewery For More Info! <br/>
			<Results bars={bars} />
		</div>
	);
};

export default Search;
