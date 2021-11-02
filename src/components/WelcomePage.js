import React from 'react'


export default function WelcomePage() {
    return (
        // <div className='welcome-wrapper'>
            <div className='welcome-container'>
                <h1 className='welcome-header'>Hi, my name is <span className='my-name'> Fedor Khandobin </span></h1>
                <h2 className='welcome-description'>A passionate web developer from Kokkola.</h2>
                <a className='btn animation' href='#about'><span>Know more</span></a>
            </div>
        // </div>
    )
}
