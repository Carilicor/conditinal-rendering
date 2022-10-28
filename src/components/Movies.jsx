import { useState } from 'react'

const genres = ['animation', 'classic', 'drama', 'horror', 'family', 'mystery']

export default function Movies() {
    const [moviesList, setMovieList] = useState();
    const getMovies = (genre) => {
        fetch(`https:/api.sampleapis.com/${genre}`)
            .then(response => response.json())
            .then(setMovieList)
            .catch(console.error)
    }
    return (
        <>
            <div className='button-list'>
                {
                genres.map((genre) => (
                    <button key={genre} onClick={() => getMovies(genre)}>
                        {genre.toUpperCase()}
                    </button>
                ))
                }
            </div>
            <div className='movie-list'>
                {
                !moviesList
                    ? <p>Pick a Genre, any Genre!</p>
                    : moviesList.map(movie => (
                        <p key={movie.id}>{movie.title}</p>
                    ))
                    }
            </div>
        </>
    )
}

