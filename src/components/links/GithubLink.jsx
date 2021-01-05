import React from 'react'

import GithubLogo from '../../assets/github-logo.svg'

export default function GithubLink() 
{
    return <a className="link-light" target="_blank" rel="noreferrer" href="https://github.com/mathiashsteffensen">my GitHub <img style={{height: '20px', marginLeft: '0.2rem'}} src={GithubLogo} alt="github link"/></a>
}
