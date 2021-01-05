import React from 'react'
import './Header.css'

export default function Header({movieSelected, goBack}) 
{
    return (
        <header className="App-header">
            <div>
                <img src="logo.png" className="App-logo" alt="logo" />
            </div>

            {movieSelected && <h1>Browsing characters from <span style={{fontStyle: 'italic'}}>{movieSelected.title}</span></h1>}

            {movieSelected && <button onClick={goBack} className="back-btn">Go Back</button>}
        </header>
    )
}
