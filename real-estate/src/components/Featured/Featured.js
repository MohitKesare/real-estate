import '../Featured/Featured.css'
import React from 'react'
import House1 from '../../assets/House1.jpg';
import House2 from '../../assets/House2.jpg';
import House3 from '../../assets/House3.jpg';
import House4 from '../../assets/House4.jpg';
import House5 from '../../assets/House5.jpg';
import House6 from '../../assets/House6.jpg';
import House7 from '../../assets/House7.jpg';
import House8 from '../../assets/House8.jpg';
import House9 from '../../assets/House9.jpg';   
import House10 from '../../assets/House10.jpg';

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City,States and Zip based on views</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={House2} alt='' />
                <img src={House3} alt='' />
                <img src={House4} alt='' />
                <img src={House5} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House For Sale</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms : </p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>bathrooms : </p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet : </p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est. Payment : </p><p>$14,797/Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A Beautiful Modern day in home in the city with a full-size pool
                        ,spacious and luxurious home located in texas. Including Media room
                        workout facility,and built-in sauna.
                    </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>
        {/* section sectiom */}


        <div className='container'>
                <img  className='order-2'src={House7} alt='' />
                <img  className='order-3' src={House8} alt='' />
                <img className='span-3 image-grid-row-2 order-1' src={House6} alt='' />
                <img className='order-4' src={House9} alt='' />
                <img className='order-5' src={House10} alt='' />


                <div className='span-2 right-img-details order-7'>
                    <p>A Beautiful Modern day in home in the city with a full-size pool
                        ,spacious and luxurious home located in texas. Including Media room
                        workout facility,and built-in sauna.
                    </p>
                    <button className='btn'>View Listing</button>
                </div>



                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House For Sale</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms : </p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>bathrooms : </p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet : </p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est. Payment : </p><p>$14,797/Month</p>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>

        </div>
    )
}

export default Featured
