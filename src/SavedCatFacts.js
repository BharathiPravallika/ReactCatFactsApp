import React from 'react';

const SavedCatFacts = ({ savedFacts }) => {
    return (
        <div className='column'>
            <h2>Saved Cat Facts</h2>
            <ul>
                {savedFacts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default SavedCatFacts;