import React from 'react'
import { Button } from '../Button'
import './banner.css';

function Banner() {
    return (
        <div className="hero-container">
           
            <h1>Healthy Life Happy Life</h1>
            <p>We here for you we can help you acheive your body goals</p>
            <div className="hero-btns">
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--primary"> Diet Plans</Button>
            </div>
            
        </div>
    )
}
export default Banner;

