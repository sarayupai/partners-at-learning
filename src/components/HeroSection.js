import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Sarayu's Math Corner</h1>
            <p>Welcome to Sarayu's Math Corner, a website of curated educational and enrichment materials for the remote learning of algebra!</p>
            <h2>A message for you ...</h2>
            <h3>Students</h3>
            <p>I know math can be frustrating, especially in this new age of remote learning, but hang in there! It's important to remember to take breaks and that it's okay if you don't always get something right on the first (or even the tenth) time as long as you keep trying. I believe in you :)</p>
            <h3>Teachers</h3>
            <p>Thank you for all your dedication and hard work! Devising new ways to support your students through this pandemic is no easy feat and us students can’t thank you enough!</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    About Me
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
