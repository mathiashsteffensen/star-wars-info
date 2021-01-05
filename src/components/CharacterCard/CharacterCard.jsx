import React, { useState } from 'react'

import DownArrow from '../../assets/down-arrow.svg'

import './CharacterCard.css'

export default function CharacterCard({character}) 
{
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className="Character-card" style={!showInfo ? {height: '80px'} : {}}>
            <h2>{character.name}</h2>

            <div style={{width: '100%'}} className={!showInfo ? "hidden" : "info-slider flex-col"}>
                <div style={{width: '60%'}} className="flex-between">
                    <strong>Gender:</strong>
                    <span>{character.gender}</span>
                </div>

                <div style={{width: '60%', marginTop: '0.2rem'}} className="flex-between">
                    <strong>Height:</strong>
                    <span>{character.height}</span>
                </div>

                <div style={{width: '60%', marginTop: '0.2rem'}} className="flex-between">
                    <strong>Mass:</strong>
                    <span>{character.mass}</span>
                </div>

                <div style={{width: '60%', marginTop: '0.2rem'}} className="flex-between">
                    <strong>Skin Color:</strong>
                    <span>{character.skin_color}</span>
                </div>

                <div style={{width: '60%', marginTop: '0.2rem'}} className="flex-between">
                    <strong>Hair Color:</strong>
                    <span>{character.hair_color}</span>
                </div>

                <div style={{width: '60%', marginTop: '0.2rem'}} className="flex-between">
                    <strong>Eye Color:</strong>
                    <span>{character.eye_color}</span>
                </div>
            </div>

            <button onClick={() => setShowInfo(!showInfo)} title="Learn more about this character" className="learn-btn">
                <img className={showInfo ? "upside-down" : ""} src={DownArrow} alt="click to learn more about this character" />
            </button>
        </div>
    )
}
