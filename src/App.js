import './App.css';
import React, { useEffect, useState } from 'react';
import RandomCatFact from './RandomCatFact';
import SavedCatFacts from './SavedCatFacts';

function App() {
  const [savedFacts, setSavedFacts] = useState([]);

  const onSaveFact = (fact) => {
    setSavedFacts([...savedFacts, fact]);
    //Store the saved facts in local storage
    localStorage.setItem('savedFacts', JSON.stringify([...savedFacts, fact]));
  };

  const onLoadnewFact = () => {
    //Load a new fact (handled in the RandomCatFact component)
  };

  useEffect(() => {
    //Retrieve saved facts from local storage on component mount
    const storedFacts = JSON.parse(localStorage.getItem('savedFacts'));
    if (storedFacts) {
      setSavedFacts(storedFacts);
    }
  }, []);

  return (
    <div className="App">
      <h1 className='stunning-heading'>
        <span role='img' aria-label='Cat emoji'>🐱</span>
        Cat Fact App
        <span role='img' aria-label='Cat emoji'>🐱</span>
      </h1>
      <div className='container'>
        <div className='column'>
          <RandomCatFact onSaveFact={onSaveFact} onLoadnewFact={onLoadnewFact} />
        </div>
        <div className='column'>
          <SavedCatFacts savedFacts={savedFacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
