import React from 'react';

export default function Header() {
    return (
        <div className='position-fixed w-100 z-1'>
            <div className='d-flex justify-content-center justify-content-md-between align-items-center bg-white text-black shadow-lg'
                style={{ letterSpacing: '3px', padding: '8px 10px' }}>
                <a href="#home" className='text-decoration-none text-black custom-hover d-none d-md-inline-block ' >
                    <b className='me-2'>BR</b>
                    Architects
                </a>
                <div className=''>
                    <a href="#home" className='text-decoration-none text-black custom-hover d-md-none'>Home</a>
                    <a href="#projects" className='text-decoration-none text-black custom-hover '>Project</a>
                    <a href="#about" className='text-decoration-none text-black custom-hover'>About</a>
                    <a href="#contact" className='text-decoration-none text-black custom-hover'>Contact</a>
                </div>
            </div>
        </div>

    )
}
