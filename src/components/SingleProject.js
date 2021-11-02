import React from 'react'

export default function SingleProject(props) {
    const {
        title,
        description,
        image,
        seeLive,
        sourceCode
    } = props
    return (
        <div className='single-project-container'>
            <div className='project-content-left'>
                <h3 className='project-title'>{title}</h3>
                <p className='paragraph'>{description}</p>
                <button 
                type='button'
                className='btn btn-orange mr-right'
                onClick={(e) => {
                    e.preventDefault()
                    window.location.href = seeLive
                }}
                >
                See live
                </button>
                <button 
                className='btn btn-orange' 
                onClick={(e) => {
                    e.preventDefault()
                    window.location.href = sourceCode
                }}
                >
                Source code
                </button>
            </div>
            <div className='project-content-right'>
            <img src={image} alt='project-screenshot' className='small-img shadow'/>
            </div>
        </div>
    )
}
