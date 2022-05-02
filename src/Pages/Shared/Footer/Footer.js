import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className=' footer-container'>
            <div className='text-center'>
                <h4>SpaceX Car House</h4>
                <p className='footer-description'>SpaceX Car House is an Car Inventory.Here you can get your best car in recent world.If You want cope-up  with this modern car world then you must to stay tuned with us , Just follow us bellow ... </p>
                <div>
                    <a href=""> <img src="https://i.ibb.co/0Xf7XpS/google.png" alt="" /></a>
                    <a href=""> <img src="https://i.ibb.co/PrcScz9/facebook.png" alt="" /></a>
                    <a className='p-4' href=""><img src="https://i.ibb.co/djNwppJ/github.png" alt="" /></a>
                </div>
            </div>
            <hr />

            <p className='d-flex last-line'> Copyright &copy; {new Date().getFullYear()} <div className='horizontal-line'>  </div> SpaceX Car House</p>
        </footer>
    );
};

export default Footer;