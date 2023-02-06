import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import Movie from './components/display_movie';

function App() {
  return (
    <div className="App">
      <Search />
      <Movie />

    </div>
  );
}

export default App;
