import { faDollar, faPlus, faPlusCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
import './Countup.css'

const Countup = () => {
    return (
        <div id='statistics' className='container'>
            <h3 className='text-center p-5 mt-3 mb-3 stat-summary'>Our Statistics</h3>
            <div className='countup mb-3'>

                <h3 className='header'>Income Statement</h3>
                <div className='inventories-summary'>
                    <div>
                        <CountUp className='counter'
                            end={450}
                            duration={10}
                        />
                        <FontAwesomeIcon className='counter' icon={faPlus} ></FontAwesomeIcon>
                        <img src="https://i.ibb.co/DwxfqMS/import-1.png" alt="" />
                        <h1 className='logo-header'>Import/hr </h1>
                    </div>
                    <div>
                        <CountUp className='counter'
                            end={400}
                            duration={8}
                        />
                        <FontAwesomeIcon className='counter' icon={faPlus} ></FontAwesomeIcon>
                        <img src="https://i.ibb.co/StXC7xd/export-1.png" alt="" />
                        <h1 className='logo-header mt-3'>Export/hr</h1>
                    </div>
                    <div>
                        <CountUp className='counter'
                            end={15000}
                            duration={12}
                        />
                        <FontAwesomeIcon className='counter' icon={faPlus} ></FontAwesomeIcon>
                        <img src="https://i.ibb.co/jzqYng6/customer.png" alt="" />
                        <h1 className='logo-header'>Customers</h1>
                    </div>
                </div>
                <hr />
                <h3 className='header'> Our Follwers </h3>
                <div className='social-media'>
                    <div>
                        <CountUp className='counter'
                            end={2500000}
                            duration={13}
                        />
                        <FontAwesomeIcon className='counter' icon={faPlus} ></FontAwesomeIcon>
                        <img src="https://i.ibb.co/4RPWnKd/facebook-3.png" alt="" />
                        <h1 className='logo-header'>Facebook </h1>
                    </div>
                    <div>
                        <CountUp className='counter'
                            end={1500000}
                            duration={11}
                        />
                        <FontAwesomeIcon className='counter' icon={faPlus} ></FontAwesomeIcon>
                        <img src="https://i.ibb.co/F8S8wpv/youtube-4.png" alt="" />
                        <h1 className='logo-header'>YouTube</h1>
                    </div>
                    <div>
                        <CountUp className='counter'
                            end={100000}
                            duration={12}
                        />
                        <FontAwesomeIcon className='counter' icon={faPlus} ></FontAwesomeIcon>
                        <img src="https://i.ibb.co/M2g7H7v/instagram-2.png" alt="" />
                        <h1 className='logo-header'>Instagram</h1>
                    </div>
                </div>


            </div >
        </div>
    );
};

export default Countup;