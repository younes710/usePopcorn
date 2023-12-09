import Main from './components/Main';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Search from './components/Search';
import NumResults from './components/NumResults';
import ListBox from './components/ListBox';
import WatchedBox from './components/WatchedBox';
import MovieList from './components/MovieList';

const tempMovieData = [
 {
  imdbID: 'tt1375666',
  Title: 'Inception',
  Year: '2010',
  Poster:
   'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
 },
 {
  imdbID: 'tt0133093',
  Title: 'The Matrix',
  Year: '1999',
  Poster:
   'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
 },
 {
  imdbID: 'tt6751668',
  Title: 'Parasite',
  Year: '2019',
  Poster:
   'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
 },
];

function App() {
 const [movies, setMovies] = useState(tempMovieData);
 return (
  <>
   <NavBar>
    <Search />
    <NumResults movies={movies} />
   </NavBar>
   <Main>
    <ListBox>
     <MovieList movies={movies} />
    </ListBox>
    <WatchedBox />
   </Main>
  </>
 );
}

export default App;
