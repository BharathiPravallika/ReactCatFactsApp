import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomCatFact = ({onSaveFact, onLoadnewFact }) => {
    const [catFact, setCatFact] = useState('');

    const fetchCatFact = async () => {
        try{
            const response = await axios.get('https://catfact.ninja/fact');
            setCatFact(response.data.fact);
        }catch(error){
            console.error('Error fetching cat fact:', error);
        }
    };

    useEffect(() => {
        fetchCatFact();
    }, []);

    return (
        <div className='column'>
            <h2>Random Cat Fact</h2>
            <p>{catFact}</p>
            <button onClick={() => onSaveFact(catFact)}>Save Fact</button>
            <button onClick={fetchCatFact}>Load New Fact</button>
        </div>
    );
};

export default RandomCatFact;