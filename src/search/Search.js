import React from 'react';
import City from './city/City';
import Name from './name/Name';
import State from './state/State';
import Type from './type/Type';

const Search = () => {
    return (
        <div>
            Search
            <Name />
            <Type />
            <City />
            <State />
        </div>
    );
};

export default Search;