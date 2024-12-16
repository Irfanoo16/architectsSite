import React from 'react';
//image
import HouseOne from '../asstes/images/summerHouse.jpg';
import HouseTwo from '../asstes/images/brickHouse.jpg';
import HouseThree from '../asstes/images/renovatedHouse.jpg';
import HouseFour from '../asstes/images/branHouse.jpg';

export default function Projects() {
    return (
        <div id='projects' className='container' style={{ padding: '8px 16px', maxWidth: '1564px' }}>
            <div style={{ padding: '1.01rem 16px' }}>
                <h3 style={{ textTransform: 'uppercase' }}>Projects</h3>
                <hr />
            </div>

            {/* projects-section-parent */}
            <div className='projects-section' style={{ padding: '0 8px' }}>
                {/* houseOne */}
                <div className='projects-section' style={{ width: '24.99999%', marginBottom: '16px', float: 'left' }}>
                    <div className="container position-relative">
                        <div className='position-absolute top-0 left-0 bg-black text-white' style={{ padding: '8px 16px', width: '9.5rem' }}>Summer House</div>
                        <img src={HouseOne} alt="" className='img-fluid'
                            style={{ maxWidth: '20rem', verticalAlign: 'middle', borderStyle: 'none' }} />
                    </div>
                </div>

                {/* houseTwo */}
                <div className='projects-section' style={{ width: '24.99999%', marginBottom: '16px', float: 'left' }}>
                    <div className="container position-relative">
                        <div className='position-absolute top-0 left-0 bg-black text-white' style={{ padding: '8px 16px', width: '9.5rem' }}>Brick House</div>
                        <img src={HouseTwo} alt="" className='img-fluid'
                            style={{ maxWidth: '20rem', verticalAlign: 'middle', borderStyle: 'none' }} />

                    </div>
                </div>

                {/* houseThree */}
                <div className='projects-section' style={{ width: '24.99999%', marginBottom: '16px', float: 'left' }}>
                    <div className="container position-relative">
                        <div className='position-absolute top-0 left-0 bg-black text-white' style={{ padding: '8px 16px', width: '9.5rem' }}>Renovated</div>
                        <img src={HouseThree} alt="" className='img-fluid'
                            style={{ maxWidth: '20rem', verticalAlign: 'middle', borderStyle: 'none' }} />

                    </div>
                </div>

                {/* houseFour */}
                <div className='projects-section' style={{ width: '24.99999%', marginBottom: '16px', float: 'left' }}>
                    <div className="container position-relative">
                        <div className='position-absolute top-0 left-0 bg-black text-white' style={{ padding: '8px 16px', width: '9.5rem' }}>Barn House</div>
                        <img src={HouseFour} alt="" className='img-fluid'
                            style={{ maxWidth: '20rem', verticalAlign: 'middle', borderStyle: 'none' }} />

                    </div>
                </div>



            </div>
            <div className='projects-section' style={{ padding: '0 8px' }}>
                {/* houseOne */}
                <div className='projects-section' style={{ width: '24.99999%', marginBottom: '16px', float: 'left' }}>
                    <div className="container position-relative">
                        <div className='position-absolute top-0 left-0 bg-black text-white' style={{ padding: '8px 16px', width: '9.5rem' }}>Summer House</div>
                        <img src={HouseTwo} alt="" className='img-fluid'
                            style={{ maxWidth: '20rem', verticalAlign: 'middle', borderStyle: 'none' }} />
                    </div>
                </div>

                {/* houseTwo */}
                <div className='projects-section' style={{ width: '24.99999%', marginBottom: '16px', float: 'left' }}>
                    <div className="container position-relative">
                        <div className='position-absolute top-0 left-0 bg-black text-white' style={{ padding: '8px 16px', width: '9.5rem' }}>Brick House</div>
                        <img src={HouseOne} alt="" className='img-fluid'
                            style={{ maxWidth: '20rem', verticalAlign: 'middle', borderStyle: 'none' }} />

                    </div>
                </div>

                {/* houseThree */}
                <div className='projects-section' style={{ width: '24.99999%', marginBottom: '16px', float: 'left' }}>
                    <div className="container position-relative">
                        <div className='IMG position-absolute top-0 left-0 bg-black text-white' style={{ padding: '8px 16px', width: '9.5rem' }}>Renovated</div>
                        <img src={HouseFour} alt="" className='img-fluid'
                            style={{ maxWidth: '20rem', verticalAlign: 'middle', borderStyle: 'none' }} />

                    </div>
                </div>

                {/* houseFour */}
                <div className='projects-section' style={{ width: '24.99999%', marginBottom: '16px', float: 'left' }}>
                    <div className="container position-relative">
                        <div className='position-absolute top-0 left-0 bg-black text-white' style={{ padding: '8px 16px', width: '9.5rem' }}>Barn House</div>
                        <img src={HouseThree} alt="" className='img-fluid'
                            style={{ maxWidth: '20rem', verticalAlign: 'middle', borderStyle: 'none' }} />

                    </div>
                </div>



            </div>
        </div>
    )
}
