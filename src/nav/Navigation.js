import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/search">Search</Link>
        </div>
    );
};

export default Navigation;