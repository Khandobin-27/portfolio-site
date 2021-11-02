import React from 'react'
import profilePhoto from '../assets/profile-photo.jpg'

export default function About() {
    return (
        <div className='about-wrapper' id='about'>
            <h2 className='section-title white'>About</h2>
                <div className='about-centered'> 
                    <div className='content-left'>
                        <img src={profilePhoto} alt='profilePhoto' className='profile-img shadow'/>
                    </div>
                    <div className='content-right'>
                        <p className='paragraph mb sz'>
                        An environmental engineer who began exploring web development as a hobby that later evolved into
                         something more. I've been improving my skills using JavaScript, React, Node JS, Graphql and other 
                         technologies for more than half a year now. I have a great desire to be part of a development team 
                         and create something valuable for this world. Please visit my Linkedin page to know more about me!
                        </p>
                        <a className='btn-white linkedin' href='https://www.linkedin.com/in/fedor-khandobin-320865158/'>Linkedin</a>
                    </div>
                </div>
        </div>
    )
}
