// Main Content Component
import React from 'react'

import './Main.css'

export default function Main({children}) 
{
    return (
        <main className="Main-container">
            {children}
        </main>
    )
}
