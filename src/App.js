// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Search from './components/search';
import Movie from './components/display_movie';

function App() {

  const [searchedMovie, setSearchedMovie] = useState(null);
  console.log(searchedMovie);

  const logString = (string) => {
    console.log("string is in APP", string);
  }

  return (
    <div className="App">
      <Search setSearchedMovie={setSearchedMovie} user="Chase" logString={logString} />
      <Movie searchedMovie={searchedMovie} />
    </div>
  );
};

export default App;
