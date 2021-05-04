import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
            <h1>WELCOME</h1>
            <p>This is the Arsenal</p>
            <div className="hero-btns">
                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    North London is RED <i className='far fa-play-circle' />
                </Button>
            </div> 

        </div>
    )
}

export default HeroSection
