import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import '../Hero/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>Find the perfect place</h1>
            <p className='search-text'>Search the Laargest selection of luxury high-rise apartments,multi-family homes and lluxury homes</p>
            <form className='search'>
                <div>
                    <input type='text' placeholder="Enter Keyword...."/>
                </div>
                <div className='radio'>
                    <input type='radio' checked/>
                    <label>Buy</label>
                    <input type='radio' />
                    <label>rent</label>
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>

      
    </div>
  )
}

export default Hero
