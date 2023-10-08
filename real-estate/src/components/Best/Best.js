import React from 'react'
import './Best.css'
import Apartment1 from '../../assets/Apartment1.jpg';
import Apartment2 from '../../assets/Apartment2.jpg';
import Apartment3 from '../../assets/Apartment3.jpg';

const Best = () => {
    return (
        <div className='best'>
            <h1>Find the best rated property</h1>
            <div className='axis-x'>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={Apartment1} alt='' />
                <img src={Apartment2} alt='' />
                <img src={Apartment3} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
