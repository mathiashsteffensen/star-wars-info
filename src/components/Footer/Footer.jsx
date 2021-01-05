import React from 'react'
import GithubLink from '../links/GithubLink'

import heart from '../../assets/heart.svg'

import './Footer.css'

export default function Footer() 
{
    return (
        <footer className="Footer-container">
            <div className="flex-center">
                Made with <img style={{height: '20px', marginLeft: '0.3rem', marginTop: '0.1rem'}} src={heart} alt="love"/>
            </div>

            <div style={{textAlign: 'center', margin: '0.5rem 0'}}>
                Check out<br /> <GithubLink /> for the source code and other interesting projects!
            </div>
        </footer>
    )
}
