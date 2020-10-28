import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Results from '../results/Results';

const Search = () => {
	const initialState = {
		searchBar: '',
	};

	const [formState, setFormState] = useState(initialState);

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(formState);

		setFormState(initialState);
	};

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	return (
		<div>
			Search
			<form onSubmit={handleSubmit}>
				<label htmlFor='searchBar'>
					<input
						id='searchBar'
						onChange={handleChange}
						value={formState.searchBar}
					/>
					<button type='submit'>Submit</button>
				</label>
			</form>
		</div>
	);
};

export default Search;
