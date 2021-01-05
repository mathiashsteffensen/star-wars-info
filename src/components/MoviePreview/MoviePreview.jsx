import './MoviePreview.css'

import React from 'react'

export default function MoviePreview({movie, handleMovieSelect}) 
{
    return (
        <div className="Movie-preview">
            <h2 className="movie-title">{movie.title} - <span>Episode {movie.episode_id}</span></h2>

            <h3>Directed By: {movie.director}</h3>

            <button 
                onClick={() => handleMovieSelect(movie)} 
                type="button" 
                className="browse-btn"
            >
                Browse {movie.characters.length} characters from this movie
            </button>
        </div>
    )
}
