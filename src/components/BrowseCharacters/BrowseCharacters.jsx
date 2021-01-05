import React, { useEffect, useState } from 'react'
import './BrowseCharacters.css'

import { selectLoadingMessage } from '../../App'
import requester from '../../requester'
import CharacterCard from '../CharacterCard/CharacterCard'

export default function BrowseCharacters({movie}) 
{
    const characterURIs = movie.characters.map(URL => URL.split('/api')[1])
    
    const [characters, setCharacters] = useState(false)

    const [error, setError] = useState(false)

    const fetchCharacters = async () =>
    {
        const characterArray = await Promise.all(characterURIs.map((characterURI) =>
        {
            return requester(characterURI)
                    .catch(err => setError(true))
            
        }))

        setCharacters(characterArray)
    }

    useEffect(() =>
    {
        fetchCharacters()
    })

    if (!characters) return <div className="flex-center">{selectLoadingMessage()}</div>

    if (error) return <div className="flex-center">Failed to load Star Wars data :(</div>
        console.log(characters);
    return (
        <div className="Browse-container">
            {characters.map((character, i) => <CharacterCard character={character} key={i}/>)}
        </div>
    )
}
