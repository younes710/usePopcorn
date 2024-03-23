import Main from './components/Main';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import NumResults from './components/NumResults';
import Box from './components/Box';
import MovieList from './components/MovieList';
import WatchedSummary from './components/WatchedSummary';
import WatchedList from './components/WatchedList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const KEY = 'f84fc31d';
const query = 'interstellar';

function App() {
 const [movies, setMovies] = useState([]);
 const [watched, setWatched] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState('');

 useEffect(() => {
  const fetchMovies = async () => {
   try {
    setIsLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
    if (!res.ok) throw new Error('Something went wrong with fetching movies');
    const data = await res.json();
    if (data.Response === 'False') throw new Error('Movie not found');
    setMovies(data.Search);
   } catch (err) {
    console.error(err.message);
    setError(err.message);
   } finally {
    setIsLoading(false);
   }
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
    <Box>
     {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
     {isLoading && <Loader />}
     {!isLoading && !error && <MovieList movies={movies} />}
     {error && <ErrorMessage message={error} />}
    </Box>
    <Box>
     <WatchedSummary watched={watched} />
     <WatchedList watched={watched} />
    </Box>
   </Main>
  </>
 );
}

export default App;
