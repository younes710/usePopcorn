import { useState } from 'react';
import WatchedSummary from './WatchedSummary';

const tempWatchedData = [
    {
        imdbID: 'tt1375666',
        Title: 'Inception',
        Year: '2010',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: 'tt0088763',
        Title: 'Back to the Future',
        Year: '1985',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];

const WatchedBox = () => {
    const [watched, setWatched] = useState(tempWatchedData);
    const [isOpen2, setIsOpen2] = useState(true);

    return (
        <div className='box'>
            <button
                className='btn-toggle'
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? '–' : '+'}
            </button>
            {isOpen2 && (
                <>
                    <WatchedSummary watched={watched} />
                    <ul className='list'>
                        {watched.map((movie) => (
                            <li key={movie.imdbID}>
                                <img
                                    src={movie.Poster}
                                    alt={`${movie.Title} poster`}
                                />
                                <h3>{movie.Title}</h3>
                                <div>
                                    <p>
                                        <span>⭐️</span>
                                        <span>{movie.imdbRating}</span>
                                    </p>
                                    <p>
                                        <span>🌟</span>
                                        <span>{movie.userRating}</span>
                                    </p>
                                    <p>
                                        <span>⏳</span>
                                        <span>{movie.runtime} min</span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default WatchedBox;
