import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'

export default function SocialMedia() {
    return (
        <div className='social-media-wrapper'>
            <div className='social-media-container'>
                <a className='mr' href='https://www.linkedin.com/in/fedor-khandobin-320865158/'><img className='icon-example'  src={linkedin} alt='linkedin-icon'/></a>
                <a className='mr'href='https://github.com/Khandobin-27'><img className='icon-example'  src={github} alt='github-icon'/></a>
                <a href="mailto:f.khandobin27@gmail.com"><img className='icon-example'  src={email} alt='email-icon'/></a>
            </div>
            <p className='white-text'>© 2021 - Developed by Fedor Khandobin</p>
        </div>
    )
}
