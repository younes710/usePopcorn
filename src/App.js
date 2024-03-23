import Main from './components/Main';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import NumResults from './components/NumResults';
import Box from './components/Box';
import MovieList from './components/MovieList';
import WatchedSummary from './components/WatchedSummary';
import WatchedList from './components/WatchedList';

const KEY = 'f84fc31d';
const query = 'interstellar';

function App() {
 const [movies, setMovies] = useState([]);
 const [watched, setWatched] = useState([]);

 useEffect(() => {
  const fetchMovies = async () => {
   const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
   const data = await res.json();
   setMovies(data.Search);
  };
  fetchMovies();
 }, []);

 return (
  <>
   <NavBar>
    <Search />
    <NumResults movies={movies} />
   </NavBar>
   <Main>
    <Box element={<MovieList movies={movies} />} />
    <Box
     element={
      <>
       <WatchedSummary watched={watched} />
       <WatchedList watched={watched} />
      </>
     }
    />
   </Main>
  </>
 );
}

export default App;
