import { useState, useEffect } from 'react'



import './App.css';


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MoviePreview from './components/MoviePreview/MoviePreview';
import BrowseCharacters from './components/BrowseCharacters/BrowseCharacters';

import requester from './requester';

const loadingMessages = [
	'Recharging Starship...',
	'Fetching all Wookies...',
	'Checking if Han Solo shot first...',
	'Making sure Ewoks are still cute...'
]

export const selectLoadingMessage = () => {
	return loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
}

function App() 
{
	const [movieData, setMovieData] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() =>
	{
		requester('/films').then(data => setMovieData(data)).catch(err =>
			{
				console.log(err);
				setError(true)
			})
	}, [])

	const [movieSelected, setMovieSelected] = useState(false)

  	return (
    	<div className="App">
      		<Header movieSelected={movieSelected} goBack={() => setMovieSelected(false)} />

      		<Main>
				{error && <div>Failed to load Star Wars data :(</div>}

				{!movieData && <div>{selectLoadingMessage()}</div>}

				{(!error && movieData && !movieSelected) && (
					<div style={{width: '90%', margin: '2rem 0'}}>
						<div className="Movie-previews-container">
							{movieData.results.sort((movie1, movie2) => movie1.episode_id - movie2.episode_id).map(movie => <MoviePreview handleMovieSelect={(movie) => setMovieSelected(movie)} key={movie.episode_id} movie={movie} />)}
						</div>	
					</div>	
				)}

				{(!error && movieSelected) && (
					<div style={{width: '90%', margin: '2rem 0'}}>
						<BrowseCharacters movie={movieSelected} />
					</div>
				)}
      		</Main>

			<Footer />
   		</div>
  	);
}

export default App;
