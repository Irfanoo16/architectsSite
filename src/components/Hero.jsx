import React from 'react';
//images
import hero from '../asstes/images/hero-img.jpg'

export default function Hero() {
    return (
        <div id='home' className='d-flex justify-content-center  mx-2 position-relative' style={{ letterSpacing: '4px' }}>
            <img src={hero} alt='' className='mw-100' />
            <div className='custom-text-absolute text-white opacity-75 text-center'>
                <h1>
                    <span className='bg-black px-2  me-md-3'><b>BR</b></span>
                    <span className='d-none d-md-inline-block'>Architects</span>
                </h1>
            </div>
        </div>
    )
}
