import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade className='mb-4'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/1L48c1J/3.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>McLaren Elva</h3>
                    <p>Elva produces 804 horsepower and 590 pound-feet of torque from its twin-turbocharged 4.0-liter V8.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/N3Y80vC/1.webp"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Pagani Huayra</h3>
                    <p>Powering each and every example was a Mercedes-AMG V12 capable of 720 horsepower (537 kilowatts).</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/rmHW2qT/11.webp"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Lamborghini Sian</h3>
                    <p>In addition to the SVJ-sourced 6.5-liter V12, the Sian uses a 48-volt mild-hybrid system. Total system output is 819 horsepower (611 kilowatts), which also makes it the most powerful Lamborghini ever.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/3CSc78J/9.webp"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Lamborghini Veneno</h3>
                    <p>Underhood Lamborghini fitted a more-powerful iteration of the Aventador's 6.5-liter V12, now producing 740 horsepower (552 kilowatts) and 509 pound-feet (609 Newton-meters) of torque, which gave it the ability to sprint to 60 miles per hour (96 kilometers per hour) in a blistering 2.9 seconds.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/tZ0mLJZ/6.webp"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Ferrari FXX K Evo</h3>
                    <p> This 1,036-horsepower Ferrari tore up the track with its naturally aspirated V12 and aggressive aerodynamics.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;