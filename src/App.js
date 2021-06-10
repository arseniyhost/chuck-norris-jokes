import React, { useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category/Category';
import Header from './components/Header/Header';
import Joke from './components/Joke/Joke';
import { getJoke, getUrlIcon, getCategories, getRandomJokeCategories } from './fetchFun';

function App() {
  const [joke, setJoke] = useState('');
  const [categories, setCategories] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    getUrlIcon(setLogoUrl)
    getJoke(setJoke)
    getCategories(setCategories)
  }, [])

  return (
    <>
      <Header logo={logoUrl} />
      <div className="wrapper">
        <div className="main-text">
          <h1>Categories</h1>
        </div>

        <div className="categories">
          {
            categories ? categories.map((item, index) => {
              return <Category getJoke={getRandomJokeCategories} setJoke={setJoke} item={item} key={index} />
            }) : ''
          }
        </div>
        <div className="chuck-jokes">
          <Joke joke={joke} />
        </div>
      </div>
    </>
  );
}

export default App;
