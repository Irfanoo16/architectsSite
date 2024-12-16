import React from 'react';
import Button from '@mui/material/Button';

//image
import JohnDoe from '../asstes/images/ceoimg.jpg';
import JaneDoe from '../asstes/images/johneimg.jpg';
import MilkRose from '../asstes/images/milk rose.jpg';
import DanStar from '../asstes/images/dan star.jpg';

export default function About() {
    return (
        <div id='about' className='container' style={{ padding: '8px 16px', maxWidth: '1564px' }}>
            <div style={{ padding: '1.01rem 16px' }}>
                <h3 style={{ textTransform: 'uppercase' }}>About</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            {/* JohnDoe */}
            <div style={{ padding: '1rem', filter: 'grayscale(75%)' }} className='about'>
                <div style={{ padding: '0 8px ', marginBottom: '1rem' }}>
                    <img src={JohnDoe} alt="" style={{ maxWidth: '20rem' }} />
                    <h3>John Doe</h3>
                    <p style={{ opacity: '0.60' }}>CEO & Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <Button
                            style={{ background: '#f1f1f1', color: 'gray', border: 'none', width: '100%' }}
                            variant="outlined">Contact
                        </Button>
                    </p>
                </div>

                {/* JaneDeo */}
                <div style={{ padding: '0 8px ', marginBottom: '1rem' }}>
                    <img src={JaneDoe} alt="" style={{ maxWidth: '20rem' }} />
                    <h3>John Doe</h3>
                    <p style={{ opacity: '0.60' }}>Artchitect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <Button
                            style={{ background: '#f1f1f1', color: 'gray', border: 'none', width: '100%' }}
                            variant="outlined">Contact
                        </Button>
                    </p>
                </div>

                {/* MilkRose */}
                <div style={{ padding: '0 8px ', marginBottom: '1rem' }}>
                    <img src={MilkRose} alt="" style={{ maxWidth: '20rem' }} />
                    <h3>John Doe</h3>
                    <p style={{ opacity: '0.60' }}>Artchitect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <Button
                            style={{ background: '#f1f1f1', color: 'gray', border: 'none', width: '100%' }}
                            variant="outlined">Contact
                        </Button>
                    </p>
                </div>

                {/* DanStar */}
                <div style={{ padding: '0 8px ', marginBottom: '1rem' }}>
                    <img src={DanStar} alt="" style={{ maxWidth: '20rem' }} />
                    <h3>John Doe</h3>
                    <p style={{ opacity: '0.60' }}>Artchitect </p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <Button
                            style={{ background: '#f1f1f1', color: 'gray', border: 'none', width: '100%' }}
                            variant="outlined">Contact
                        </Button>
                    </p>
                </div>

            </div>


        </div>
    )
}
