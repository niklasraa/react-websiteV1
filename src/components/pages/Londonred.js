import React from 'react'
import '../../App.css'
import '../HeroSection.css';
import sample from './video-3.mp4';

export default function Londonred() {
    return (
        <div className='hero-container'>
            <div>
                <h1 className='londonred'>North London is red</h1>
            </div>
            <div>
                <video controls className='videoTag' autoPlay loop >
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}