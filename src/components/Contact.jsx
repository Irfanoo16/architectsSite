import React from 'react';
import Button from '@mui/material/Button';


export default function Contact() {
    return (
        <div id='contact' style={{ padding: '8px 16px', maxWidth: '1564px' }} className='container'>
            <h3 style={{ textTransform: 'uppercase' }}>contact</h3>
            <hr />
            <p>Lets get in touch and talk about your next project.</p>
            <form className='col'>
                <input className='col-8 p-2 mb-4 w-100' type="text" placeholder='Name' required name='text' />
                <input className='col-8 p-2 mb-4 w-100' type="email" placeholder='Email' required name='Email' />
                <input className='col-8 p-2 mb-4 w-100' type="text" placeholder='Subject' required name='text' />
                <input className='col-8 p-2 mb-4 w-100' type="text" placeholder='Comment' required name='text' />
                <Button
                    style={{ background: 'black', color: 'white', textTransform: 'uppercase' }}
                    variant="contained">send message
                </Button>
            </form>
        </div>
    )
}
